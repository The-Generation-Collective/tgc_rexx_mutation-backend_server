import * as dotenv from 'dotenv';
import { writeFileSync } from "fs";
import fetch from 'node-fetch';
import { Configuration, OpenAIApi } from "openai";
dotenv.config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

async function generate() {

    const prompt = process.argv[2]

    if (!prompt) {
        console.error('please provide a prompt')
        return
    }

    console.log('generating image...')

    const result = await openai.createImage({
        prompt,
        n: 1,
        size: "1024x1024",
        user: "ricogustavo"
    })

    const url = result.data.data[0].url

    // saave image URL to disk using fetch
    const imageResult = await fetch(url);
    const blob = await imageResult.blob();
    // turn blob into buffer
    const buffer = Buffer.from(await blob.arrayBuffer());

    // save buffer to disk
    writeFileSync(`./img-result/${prompt}-${Date.now()}.png`, buffer);

    console.info('done!')
}

generate()

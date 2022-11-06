import * as dotenv from 'dotenv';
import { createReadStream, writeFileSync } from "fs";
import fetch from 'node-fetch';
import { Configuration, OpenAIApi } from "openai";
dotenv.config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

async function rexxMutation() {

    const image = process.argv[2]
    const newImageName = process.argv[3]

    if (!image) {
        console.error('please provide an image')
        return
    }

    if (!newImageName) {
        console.error('please provide a new image name')
        return
    }

    console.log(image, 'mutating image...')
    // const image = './1.png'

    const result = await openai.createImageVariation(
        createReadStream(image),
        1,
        "1024x1024",
        "url",
        "ricogustavo"
    )

    const url = result.data.data[0].url

    const imageResult = await fetch(url);
    // get the blob of the image result url
    const blob = await imageResult.blob();
    // turn blob into buffer
    const buffer = Buffer.from(await blob.arrayBuffer());

    // save buffer to disk
    writeFileSync(`./img-result/${newImageName}-${Date.now()}.png`, buffer);

    console.info('done!')
}


rexxMutation()
<div align="center">
  <a href="https://tgcollective.xyz">
    <img src="https://www.tgcollective.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frexxie-banner.227d942b.webp&w=3840&q=75" alt="tgc_fam" width="750" height="250">
  </a>
  <h3 align="center">TGC image generation and mutation with openAI DALL.E </h3>
  <h3 align="center">Created by: <a href="https://github.com/ass77">ass77</a></h3>
</div>

# Purpose

- To upgrade the REXX as owner wishes with the power of openAI DALL.E `(tgcollective.xyz/rexx-upgrade)`

1. connect wallet and show REXX nft in the wallet (filter w polygon mainnet)
2. create a variation system with the REXX:
   - choose and add REXX image
   - add prompt (with example placeholder)
   - generate n:1 REXX with variations
3. REXX holders are able to generate variations once every 3 month (quarterly)
4. Mint the mutated image with dynamic NFT that sits on top of Polygon blockchain

# How To

### Generate image with prompt

```js
node scripts/generateWithPrompt.js <prompt>
```

- for instance:

```js
node scripts/generateWithPrompt.js "a clown writing a php code on a desk"
```

### Generate mutation

```js
node scripts/mutation.js <imageFile> <newImageName>
```

- for instance:

```js
node scripts/mutation.js ./img/1.png retarded-one
```

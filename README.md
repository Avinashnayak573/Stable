Hey Guys,
Stable is a web-app that generates NFTs using on mumbai network  using openAI's **text-to-image** model

Deployed NFT collection address on mumbai is [0xA404eE146fc621cfb3AD60E6Ddc7AFb4582d76b1](https://mumbai.polygonscan.com/address/0xA404eE146fc621cfb3AD60E6Ddc7AFb4582d76b1)<br />
We used Thirdweb's pre-built contract for this  NFT collection.<br />
The Prize we are targeting is best UX or DevX<br />
=>we solved the wallet connection problems like **Auto wallet connection** and **switching networks** by using rainbow kit<br />
=>To get the generated NFT, user shouldn't have to pay for the gas or even sign the transaction<br />
=>We get the user's wallet address using useAccount() hook from wagmi and directly use mintTo function from smart contract to mint NFT to user's account<br />
=>We also run some loaders to engage users as most of the functions are asynchronous and small [view in opensea](https://testnets.opensea.io/collection/openaigenerated) to show the generated NFT<br />
=>All the metadata of NFT is stored on IPFS<br />









This is a [RainbowKit](https://rainbowkit.com) + [wagmi](https://wagmi.sh) + [Next.js](https://nextjs.org/) project bootstrapped with [`create-rainbowkit`](https://github.com/rainbow-me/rainbowkit/tree/main/packages/create-rainbowkit).

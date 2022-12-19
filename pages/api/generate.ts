import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

const NETWORK = "mumbai";
const sdk = ThirdwebSDK.fromPrivateKey(
    process.env.WALLET_PRIVATE_KEY_THIRDWEB || '',
    NETWORK
  );
const nftCollection = sdk.getNFTCollection(
    "0xA404eE146fc621cfb3AD60E6Ddc7AFb4582d76b1"
  );

const configuration = new Configuration({
    apiKey: process.env.OPENAIAPIKEY
})

const openai = new OpenAIApi(configuration);
export default async (req: NextApiRequest, res: NextApiResponse) => {

    const { prompt,address } = req.body
    console.log(prompt)

    const response = await openai.createImage({
        prompt: `${prompt}`,
        n: 1,
        size: "256x256",
    });
    const filepath = response.data.data[0].url
    const nft = await (
        await nftCollection
      ).mintTo(address, {
        name:`${prompt}`,
        image: filepath,
        description: `It is an AI generated image of ${prompt}`,
      });
      const tokenID = parseInt(nft.id._hex, 16);
    res.status(200).json({filepath,tokenID})
};
import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useAccount } from 'wagmi';
import styles from '../styles/Home.module.css';
import Input from '../components/Input';

const Home: NextPage = () => {
  const {isConnected,address}=useAccount()
  return (
    <div className={styles.container}>
      <Head>
        <title>Demo</title>
        <meta
          name="description"
          content="Demo for ethindia"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.head}>
         <h1>Stable generates NFTs based on user prompts,Now you can convert your random crazy thoughts as NFTs forever on chain,connect your wallet and Mint AI generated NFTs for free and yes without Gas fees</h1>
        </div>
         <ConnectButton />
         {isConnected && <Input/>}
      </div>
    </div>
  );
};

export default Home;

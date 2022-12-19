import { useState,useEffect } from "react";
import styles from "styles/Home.module.css"

import { MyImage } from './Image';
import Link from "next/link";
import { useAccount } from 'wagmi';

export default function Input() {
  const {address}=useAccount()
  const [prompt, setprompt] = useState('');
  const [filepath,setfilepath] = useState('');
  const [tokenID,settokenID]=useState(0);
  const [isloading,setIsloading]= useState(Boolean);
  const handleSubmit= async (event:any)=>{
    setIsloading(true);
    event.preventDefault();
    const res =await fetch('https://stable-eight.vercel.app/api/generate',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify({ prompt ,address }),
    })
    const data = await res.json();
    console.log(data)
    setfilepath(data.filepath)
    settokenID(data.tokenID)
    setIsloading(false)
  }

  return (
     <div>
      <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.input}
          id="prompt"
          name="prompt"
          value={prompt}
          placeholder="Enter your prompt here"
          onChange={event => setprompt(event.target.value)}
        />
        <button type="submit" className={styles.button}>{
          isloading?(
            <p>Loading...</p>
          ):(
            "Generate" 
          )

        }</button>
      </form>
     </div>
     <div className={styles.image}>
      <MyImage url={filepath} />
      </div>
        <Link href={`https://testnets.opensea.io/assets/mumbai/0xa404ee146fc621cfb3ad60e6ddc7afb4582d76b1/${tokenID}`}>
           <a target="_blank"style={{color: 'blue'}}>View on opensea</a>
         </Link>
    </div>

  )
  }

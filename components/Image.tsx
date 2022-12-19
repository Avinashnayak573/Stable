import Image from 'next/image';

export const MyImage = ({ url }: { url: string }) => {
    return <Image src={url} width={300} height={300} />
  }
  


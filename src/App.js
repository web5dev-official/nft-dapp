import './App.css';
import { useState } from 'react';

function App() {
  const [NftStatus, setNftStatus] = useState('none');
  const [ClaimNft, setClaimNft] = useState('visible');
  const [Wallet, setWallet] = useState();
  const [MintAmount, setMintAmount] = useState();
  const [Status, setStatus] = useState();
  return (
    <div className="min-h-screen h-full w-full overflow-hidden flex flex-col items-center justify-center bg-brand-background ">
      <div className="relative w-screen h-screen flex flex-col items-center justify-center">
        <img
          src="/images/background.png"
        alt='cover'
          className=" w-full min-h-screen "
        />
       <div className='absolute h-full w-full'>
        <div className='flex flex-col h-screen w-screen justify-center items-center'>
          <div className='w-auto h-auto'>
       <h1 className=' fontm  text-[5.2rem] '>LiquiDoodles</h1>
       <h1 className='text-white text-[1.3rem] bold new-line' style={{ display : NftStatus}}>{`You can mint now -20 nft per wallet is
         the max. Go ahead and enjoy!`}</h1>
       <h1 className='text-white text-[1.3rem] bold new-line' style={{ visibility :ClaimNft}}>{`Congratulataion you are raindrop nft
        holder so you mint 20 LiquiDoodles
        nft for free !`}</h1>
          <div className='flex items-center mt-6 mb-6' style={{ display : NftStatus}}>
       <h1 className='text-white text-[1.4rem] bold  inline'>{`i want to mint `}</h1>
       <input  className='bg-transparent border-b-2 s w-8 mx-2'></input>
       <h1 className='text-white text-[1.4rem] bold  inline'>{`LiquiDoodles`}</h1>
       </div>
       <h1 className='text-white text-[0.8rem]  mt-4 bold'>{`your price will be 0 ETH and you will get 20 nft`}</h1>
       <h1 className='text-white text-[0.8rem] my-2 bold'>{`The LiquiDoodles you get, will be randomly picked`}</h1>
       <h1 className='text-white text-[2.2rem] my-2 bold'>{`BEST OF LUCK`}</h1>
       <button className='bg-white my-2 text-blue-300 px-4 py-2 rounded-[16px]'>Mint Now</button>
       </div>
       </div>
       </div>
      </div>
    </div>
  );
}

export default App;

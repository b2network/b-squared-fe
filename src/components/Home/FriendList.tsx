import useIsMobile from '@/hooks/useIsMobile';
import {
  Box,
  Grid,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { ReactNode } from 'react';
import friendIcon0 from '@/assets/icons/friend0.png'
import friendIcon1 from '@/assets/icons/friend1.png'
import friendIcon2 from '@/assets/icons/friend2.png'
import friendIcon3 from '@/assets/icons/friend3.png'
import friendIcon4 from '@/assets/icons/friend4.png'
import friendIcon5 from '@/assets/icons/friend5.png'
import TwitterSvg from '@/assets/icons/twitter_light.svg'
import Link from 'next/link';

type ItemProps = {
  index: number,
  name: string,
  avatar: any
  account: string
  content: string[],
  twitter: string
  time: string,
  imgUrl: string,
  imgSize: string
}

const PropertyArr: ItemProps[] = [
  {
    index: 0,
    name: 'ardizor 🧙‍♂️',
    account: '@ardizor',
    avatar: friendIcon0,
    content: [
      "Unleash the Power of Bitcoin's Layer-2 Solution. Say goodbye to Bitcoin's scalability issues and hello to unparalleled asset flexibility.",
      "Enter @BsquaredNetwork, the ultimate Layer-2 solution that turbocharges transaction speeds and unlocks endless application possibilities 👇"
    ],
    twitter: '',
    time: '20:25 12/11/2023',
    imgUrl: '/assets/friend_card0.png',
    imgSize: 'lg'
  },{
    index: 1,
    name: 'andrew.moh',
    account: '@0xAndrewMoh',
    avatar: friendIcon1,
    content: [
      "#Bitcoin's revolution brings challenges: limited transactions, high fees, and slow confirmations.",
      "A Layer-2 Solution is on the horizon.",
      "Curious about what it is?",
      "A thread 🧵(0/18)"
    ],
    twitter: '',
    time: '20:20 12/11/2023',
    imgUrl: '/assets/friend_card1.png',
    imgSize: 'sm'
  },{
    index: 2,
    name: 'Moses Perry🥷📊',
    account: '@PerryYzer1',
    avatar: friendIcon2,
    content: [
      "What do you get when you combine creativity, innovation, and a passion for technology?",
      "The answer is @BsquaredNetwork",
      "The most Practical Bitcoin Layer-2 Network  A 🧵❤️ rt"
    ],
    twitter: '',
    time: '16:25 15/11/2023',
    imgUrl: '/assets/friend_card2.png',
    imgSize: 'sm'
  },{
    index: 3,
    name: 'BRC20 Station 🟧',
    account: '@BRC20_Station',
    avatar: friendIcon3,
    content: [
     "💫 Introduce @BsquaredNetwork💫",
     "🔥 The most Practical Bitcoin Layer-2 Network | Exponentially expanding the #Bitcoin Ecosystem.",
     "👉 What makes this project special? Let's explore this potential project with us right now.",
     "A thread 🧵",
     "#BRC20 #Ordinals $ordi $meme $pepe $sats"
    ],
    twitter: '',
    time: '20:50 12/11/2023',
    imgUrl: '/assets/friend_card3.png',
    imgSize: 'lg'
  },{
    index: 4,
    name: 'DEE-EMPRESS🟧🌔',
    account: '@Deedefiempress8',
    avatar: friendIcon4,
    content: [
      "Since the advent of Bitcoin in 2008, we've seen a massive improvement in the financial sector But what's more interesting is seeing the once rigid blockchain turn into something as simple as a Layer 2. ",
      "Surprised right?, walk with me to find out more about",
      "@BsquaredNetwork🧵"
    ],
    twitter: '',
    time: '20:31 19/11/2023',
    imgUrl: '/assets/friend_card4.png',
    imgSize: 'lg'
  },{
    index: 5,
    name: 'MrMee🔥⚛️💜🎮₿💎(💙,🧡)',
    account: '@0xMrMee',
    avatar: friendIcon5,
    content: [
      "->Enhanced security through zk proofs",
      "->Account abstraction supporting Bitcoin, Ethereum and social accounts  ->Gas delegation  ->Decentralized sequencing  ->Cross-chain functionality. And more are features ",
      "@BsquaredNetwork. offers.It is a revolutionary ZK Proof verification commitment rollup solution designed specifically for Bitcoin.#BSquared #BTC"
    ],
    twitter: '',
    time: '04:57 20/11/2023',
    imgUrl: '/assets/friend_card5.png',
    imgSize: 'lg'
  },
]

const PropertieItem: React.FC<ItemProps> = ({ name, content, twitter, avatar, account, index, imgUrl, imgSize, time }) => {
  const isMobile = useIsMobile();
  return <Box sx={{
    p: isMobile ? '15px' : '30px',
    pb: isMobile ? '12px' : '24px',
    minHeight: index > 2 ? '499px' : '451px',
    background: 'white',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    '.avatar': {
      borderRadius: '30px'
    },
    '.card': {
      width: imgSize === 'lg' ? '244px' : '135px',
      borderRadius:'6px'
    },
    '&:hover': {
      background: '#FFF8EE'
    }
  }}>
    <Box>
      <Box display={'flex'} mb={'20px'}>
        <Image className='avatar' src={avatar} alt='avatar' width={54} height={54} />
        <Box flex={1} ml='16px'>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Typography fontSize={isMobile?'18px':'24px'} whiteSpace={'nowrap'} overflow={'hidden'} fontWeight={600} lineHeight={'24px'}>{name}</Typography>
            <Link href={twitter} target='_blank'><TwitterSvg /></Link>
          </Box>
          <Typography color={'rgab(0,0,0,0.65)'}>{account}</Typography>
        </Box>
      </Box>
      <Box sx={{
        minHeight: index > 2 ? '192px' : '144px'
      }}>
        {
          content.map(item => <Typography key={item}>{item}</Typography>)
        }
      </Box>
    </Box>
    <Box>
      <img className='card' src={imgUrl} alt="image" />
      <Typography color={'rgba(0,0,0,0.65)'} mt={'10px'}>{time}</Typography>
    </Box>
  </Box>
}


const Friends = () => {
  const isMobile = useIsMobile();
  return (
    <Box sx={{
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      p: '1px'
    }}>
      <Box sx={{ background: 'white', borderRadius: '8px', width: '100%', p:isMobile?'10px':'30px' }}>
        <Typography textTransform='uppercase' data-aos='fade-down' fontFamily='Hanson' textAlign={'left'} mb={'30px'} color={'black'} fontSize={isMobile ? '20px' : '30px'} fontWeight={700}>B² Network Friends</Typography>
        <Grid container spacing={'1px'} alignItems={'stretch'} sx={{ background: 'black', borderBottom: '1px solid #000',borderRight:'1px solid #000' }}>
          {
            PropertyArr.map(item => <Grid data-aos='fade-up' item sm={6} lg={4} xs={12} key={item.name}>
              <PropertieItem {...item}></PropertieItem>
            </Grid>)
          }
        </Grid>
      </Box>
    </Box>
  )
}

export default Friends;

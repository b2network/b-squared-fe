import useIsMobile from 'hooks/useIsMobile';
import Link from 'next/link';
type Iprops = {
  color: string
}
const Logo: React.FC<Iprops> = ({ color = '#000' }) => {
  const isMobile = useIsMobile();
  return (
    <Link href='/' passHref >
      {
        <img style={{ width: isMobile ? '100px' : '196px' }} src={isMobile && color === '#fff' ? '/assets/logo_white.svg' : '/assets/logo.svg'} alt='logo' />
      }
    </Link>
  )
}

export default Logo;

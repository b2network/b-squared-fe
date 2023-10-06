import useMediaQuery from '@mui/material/useMediaQuery';
const useIsMobile = () => {
  const matches = useMediaQuery('(max-width:600px)');
  return matches
}

export default useIsMobile;
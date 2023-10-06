import useMediaQuery from '@mui/material/useMediaQuery';
const useIsMobile = () => {
  const matches = useMediaQuery('(max-width:750px)');
  return matches
}

export default useIsMobile;

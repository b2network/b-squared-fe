

import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

const BarSvg = (props: SvgIconProps) => {
  return (
    <SvgIcon color='primary' {...props} width="101" height="10" viewBox="0 0 101 10" fill="none">
      <path d="M13 5H91V10H13V5Z" fill="#FFB852" />
      <path d="M31 5H101V10H31V5Z" fill="black" />
      <path d="M0 0H13V5H0V0Z" fill="#FFB852" />
    </SvgIcon>
  );
};

export default BarSvg;

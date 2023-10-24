import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

const ArrowSvg = (props: SvgIconProps) => {
  return (
    <SvgIcon  {...props} width="34" height="22" viewBox="0 0 34 22" fill="none">
      <path d="M24 20L33 11L24 2" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M0.799999 11.7998C0.358172 11.7998 -1.56562e-08 11.4416 -3.49691e-08 10.9998C-5.4282e-08 10.558 0.358172 10.1998 0.8 10.1998L32.2 10.1998C32.6418 10.1998 33 10.558 33 10.9998C33 11.4416 32.6418 11.7998 32.2 11.7998L0.799999 11.7998Z" />
    </SvgIcon>
  );
};

export default ArrowSvg;

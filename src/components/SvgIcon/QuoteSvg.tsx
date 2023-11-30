

import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

const QuoteSvg = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} width="34" height="26" viewBox="0 0 34 26" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M14 0H0V14L7 26V14H14V0Z" fill="#FFB852" />
      <path fillRule="evenodd" clipRule="evenodd" d="M34 0H20V14L27 26V14H34V0Z" fill="#FFB852" />
    </SvgIcon>
  );
};

const QuoteEndSvg = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} width="34" height="26" viewBox="0 0 34 26" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M20 0H34V14L27 26V14H20V0Z" fill="#FFB852" />
      <path fillRule="evenodd" clipRule="evenodd" d="M0 0H14V14L7 26V14H0V0Z" fill="#FFB852" />
    </SvgIcon>
  );
};

export default QuoteSvg;
export {
  QuoteEndSvg
}


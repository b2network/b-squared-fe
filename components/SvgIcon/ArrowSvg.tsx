import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

const ArrowSvg = (props: SvgIconProps) => {
  return (
    <SvgIcon color='primary' {...props} width="35" height="24" viewBox="0 0 35 24" fill="none">
      <g clipPath="url(#clip0_522_1912)">
        <path d="M24.4475 0.706692L24.4474 0.606787H24.3475L22.9375 0.606787H22.8374L22.8375 0.706899C22.8399 2.87992 23.4334 5.01135 24.5542 6.87297C25.608 8.62316 27.0907 10.0729 28.8593 11.0868L0.9375 11.0868H0.8375V11.1868L0.8375 12.5668V12.6668H0.9375L28.8779 12.6668C27.1061 13.6783 25.6199 15.1268 24.5629 16.8768C23.4383 18.7387 22.8419 20.8715 22.8375 23.0466L22.8373 23.1468H22.9375H24.3275H24.4274L24.4275 23.0469C24.4301 20.293 25.5259 17.6528 27.4742 15.7064C29.4224 13.7601 32.0636 12.6668 34.8175 12.6668H34.9175V12.5668V11.1868V11.087L34.8177 11.0868C32.0672 11.0815 29.4311 9.98593 27.4871 8.04014C25.5432 6.09434 24.4501 3.45715 24.4475 0.706692Z" fill="black" stroke="black" strokeWidth="0.2" />
      </g>
      <defs>
        <clipPath id="clip0_522_1912">
          <rect width="33.88" height="22.34" fill="white" transform="translate(0.9375 0.706787)" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default ArrowSvg;

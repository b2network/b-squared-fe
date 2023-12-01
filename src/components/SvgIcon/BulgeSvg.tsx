

import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

const BulgeSvg = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} width="16" height="27" viewBox="0 0 16 27" fill="none">
      <mask id="mask0_675_401" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="27">
        <rect width="16" height="27" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_675_401)">
        <mask id="path-2-outside-1_675_401" maskUnits="userSpaceOnUse" x="-326" y="-111" width="342" height="250" fill="black">
          <rect fill="white" x="-326" y="-111" width="342" height="250" />
          <path fillRule="evenodd" clipRule="evenodd" d="M0 -110H-325V138H0V26H5V21H10V16H15V11H10V6H5V1H0V-110Z" />
        </mask>
        <path fillRule="evenodd" clipRule="evenodd" d="M0 -110H-325V138H0V26H5V21H10V16H15V11H10V6H5V1H0V-110Z" fill="white" />
        <path d="M-325 -110V-111H-326V-110H-325ZM0 -110H1V-111H0V-110ZM-325 138H-326V139H-325V138ZM0 138V139H1V138H0ZM0 26V25H-1V26H0ZM5 26V27H6V26H5ZM5 21V20H4V21H5ZM10 21V22H11V21H10ZM10 16V15H9V16H10ZM15 16V17H16V16H15ZM15 11H16V10H15V11ZM10 11H9V12H10V11ZM10 6H11V5H10V6ZM5 6H4V7H5V6ZM5 1H6V0H5V1ZM0 1H-1V2H0V1ZM-325 -109H0V-111H-325V-109ZM-324 138V-110H-326V138H-324ZM0 137H-325V139H0V137ZM-1 26V138H1V26H-1ZM5 25H0V27H5V25ZM4 21V26H6V21H4ZM10 20H5V22H10V20ZM9 16V21H11V16H9ZM15 15H10V17H15V15ZM14 11V16H16V11H14ZM10 12H15V10H10V12ZM9 6V11H11V6H9ZM5 7H10V5H5V7ZM4 1V6H6V1H4ZM0 2H5V0H0V2ZM-1 -110V1H1V-110H-1Z" fill="black" mask="url(#path-2-outside-1_675_401)" />
      </g>
    </SvgIcon>
  );
};

export default BulgeSvg;

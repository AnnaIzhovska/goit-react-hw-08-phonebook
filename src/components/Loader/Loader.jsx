import { css } from '@emotion/react';
import BarLoader from 'react-spinners/BarLoader';


const overrideBarLoader = css`
  top: 85px;
  left: 0;
  position: absolute;
  z-index: 1200;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px auto;
`;

export function Loader() {
  return (
    <BarLoader
      color={'#343a40'}
      loading={true}
      css={overrideBarLoader}
      size={15}
    />
  );
}
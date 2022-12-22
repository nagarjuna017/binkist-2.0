import { Grid } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import theme from '../../../Theme/theme';

const StyledBanner = styled(Grid)`
  width: "912px";
  height: "264px";
  background-color: ${theme.palette.grey1[100]}
`;

const Banner = () => {
  return (
    <StyledBanner>
    
    </StyledBanner>
  )
}

export default Banner;
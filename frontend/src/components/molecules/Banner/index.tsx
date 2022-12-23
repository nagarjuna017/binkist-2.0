import { Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import theme from "../../../Theme/theme"
import Illustration from "../../atoms/Illustration";

const StyledBanner = styled(Grid)`
  width: 912px;
  height: 264px;
  background-color: ${theme.palette.background2.main};

  & .text1 {
    padding-top: 45px;
    padding-left: 45px;
    
  }

  & .text2 {
    padding-bottom: 15px;
  } 
`;

const Banner = () => {
  return (
    <StyledBanner container>
      <Grid item className="text1" xs={9} md={4}>
        <Typography variant="h5">Explore on Books</Typography>
        <Typography variant="h5" className="text2">entrepreneurship</Typography>
        <Typography variant="subtitle2">Everything you need to know about thriving on a</Typography>
        <Typography variant="subtitle2">shoestring budget, making your first million, and hiring </Typography>
        <Typography variant="subtitle2">right from the start.</Typography>
      </Grid>
      <Grid item className="text2">

      </Grid>   
      <Grid item>
        <Illustration name="banner" />
      </Grid>  
    </StyledBanner>
  );
};

export default Banner;

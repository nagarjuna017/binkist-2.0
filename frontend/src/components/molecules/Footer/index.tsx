import styled from "styled-components";
import { Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../../../Theme/theme";
import Logos from "../../atoms/Logo";
import { Box } from "@mui/system";

const StyledGrid = styled(Grid)`
  background-color: ${theme.palette.background2.main};
  height: 370px;

  & .grid1 {
    padding-top: 38px;
    padding-left: 244px;
  }

  & .logo {
    padding-bottom: 32px;
  }

  & .text1 {
    color: ${theme.palette.blueColor[500]};
  }
`;

const Footer = () => {
  return (
    <StyledGrid>
      <Grid item className="grid1">
        <Box className="logo">
          <Logos name="blinkist" />
        </Box>
        <Typography variant="h5" className="text1">
          Big ideas in small packages
        </Typography>
        <Typography variant="h5" className="text1">
          Start learning now
        </Typography>
      </Grid>
    </StyledGrid>
  );
};

export default Footer;

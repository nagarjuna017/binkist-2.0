import styled from "styled-components";
import { Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../../../Theme/theme";
import Logos from "../../atoms/Logo";
import { Box } from "@mui/system";
import FooterPart from "../FooterPart";

const StyledGrid = styled(Grid)`
  background-color: ${theme.palette.background2.main};
  height: 370px;

  & .grid1 {
    padding-top: 38px;
    padding-left: 244px;
    padding-bottom: 48px;
  }

  & .logo {
    padding-bottom: 32px;
  }

  & .text1 {
    color: ${theme.palette.blueColor[500]};
  }

  & .foot {
    padding-left: 244px;
  }
`;

const Footer = () => {
  return (
    <StyledGrid container>
      <Grid container className="grid1">
        <Grid item xs={5}>
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
        <Grid item xs={2}>
          <FooterPart
            text1="Editorial"
            text2="Book Lists"
            text3="What is Nonfiction?"
            text4="What to read next?"
            text5="Benefits of reading"
          />
        </Grid>
        <Grid item xs={2}>
          <FooterPart
            text1="Useful Links"
            text2="Pricing"
            text3="Blinkist Bussiness"
            text4="Gift cards"
            text5="Blinkist magazine"
            text6="Contact & help"
          />
        </Grid>
        <Grid item xs={2}>
          <FooterPart
            text1="Company"
            text2="About"
            text3="Careers"
            text4="partners"
            text5="Code of Conduct"
          />
        </Grid>
      </Grid>
        <Typography className = "foot" variant="caption2git ">© Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies</Typography>
    </StyledGrid>
  );
};

export default Footer;

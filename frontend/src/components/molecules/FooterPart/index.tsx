import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";

interface FooterProps {
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    text5: string;
    text6?: string;
}

const FooterStyled = styled(Box)`
    & .text {
        color: #03314B;
    }

    & .text2 {
        padding-top: 16px;
    }
`;

const FooterPart = (props: FooterProps) => {
  return (
    <FooterStyled>
        <Typography className="text">{props.text1}</Typography>
        <Typography className="text2">{props.text2}</Typography>
        <Typography className="text2">{props.text3}</Typography>
        <Typography className="text2">{props.text4}</Typography>
        <Typography className="text2">{props.text5}</Typography>
        <Typography className="text2">{props.text6}</Typography>
    </FooterStyled>
  );
};

export default FooterPart;

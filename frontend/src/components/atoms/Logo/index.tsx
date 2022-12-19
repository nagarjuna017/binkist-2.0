import { Box, styled } from "@mui/material";
import React from "react";
import { Logo } from "../../../Constants";

export interface LogoProps {
  name: "blinkist";
  margin?: string;
}

const StyledDiv = styled(Box)<{ margin?: string }>`
  margin: ${(props) => props.margin};
`;

const Illustration: React.FC<LogoProps> = ({ name, margin }) => {
  return (
    <StyledDiv data-testid={`logo-${name}`} className="logo" margin={margin}>
      {Logo[name]}
    </StyledDiv>
  );
};

export default Illustration;
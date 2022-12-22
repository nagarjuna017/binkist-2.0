import { Box, styled } from "@mui/material";
import React from "react";
import { Illustrations } from "../../../Constants";

export interface IllustrationProps {
  name:
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "banner";

  margin?: string;
}

const StyledDiv = styled(Box)<{ margin?: string }>`
  margin: ${(props) => props.margin};
`;

const Illustration: React.FC<IllustrationProps> = ({ name, margin }) => {
  return (
    <StyledDiv data-testid={`illustration-${name}`} className="illustration" margin={margin}>
      {Illustrations[name]}
    </StyledDiv>
  );
};

export default Illustration;
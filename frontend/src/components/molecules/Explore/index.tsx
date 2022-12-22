import { Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Icon } from "../../atoms/Icon";

const StyledAvatar = styled(Grid)`
  & .icon {
    padding-left: 2px;
  }
`;

interface ExploreProps {
    text: string;
}

const Explore = (props: ExploreProps) => {
  return (
    <StyledAvatar container>
      <Grid item>
        <Typography>{props.text}</Typography>
      </Grid>
      <Grid item className="icon">
        <Icon name="downArrow" />
      </Grid>
    </StyledAvatar>
  );
};

export default Explore;

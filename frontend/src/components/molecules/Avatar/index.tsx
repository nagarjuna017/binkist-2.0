import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import theme from "../../../Theme/theme";

import Avatar from "@mui/material/Avatar";
import { Icon } from "../../atoms/Icon";

const StyledAvatar = styled(Grid)`
  & .icon {
    padding-top: 10px;
    padding-left: 2px;
  }
`;

const AvatarIcon = () => {
  return (
    <StyledAvatar container>
      <Grid item>
        <Avatar sx={{ bgcolor: theme.palette.blueColor[300] }}>A</Avatar>
      </Grid>
      <Grid item className="icon">
        <Icon name="downArrow" />
      </Grid>
    </StyledAvatar>
  );
};

export default AvatarIcon;

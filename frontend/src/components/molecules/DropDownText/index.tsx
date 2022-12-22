import { Grid, Typography } from "@mui/material";
import React from "react";
import { Icon } from "../../atoms/Icon";

interface DropDownTextProps {
  icon:
    | "add"
    | "careerAndSuccess"
    | "checked"
    | "communicationSkills"
    | "corperateCulture"
    | "downArrow"
    | "economics"
    | "edit"
    | "entrepreneurship"
    | "motivationAndInspiration"
    | "natureAndTheEnvironment"
    | "politics"
    | "readAgain"
    | "removeTwo"
    | "search"
    | "sexAndRelationship"
    | "timer"
    | "unchecked"
    | "upArrow"
    | "upload";
    name: string;
}

const DropDownText = (props: DropDownTextProps) => {
  return (
    <Grid container columnSpacing="8px">
      <Grid item>
        <Icon name={props.icon} />
      </Grid>
      <Grid item>
        <Typography variant="body2">{props.name}</Typography>
      </Grid>
    </Grid>
  );
};

export default DropDownText;

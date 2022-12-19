import React from "react";
import { SvgIcon } from "@mui/material";
import { Icons } from "../../../Constants";

export interface IconsProps {
  name:
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
}

export const Icon = ({ name }: IconsProps) => {
  return <SvgIcon data-testid={`icon-${name}`}>{Icons[name]}</SvgIcon>;
};

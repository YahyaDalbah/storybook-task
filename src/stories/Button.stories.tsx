import React from "react";
import Button from "./Button";

export default {
    component: Button,
    title: 'Button'
}

export const Primary = {
  args: {
    variant: "primary",
    size: 'sm',
    color: 'black',
  },
};
export const Secondry = {
  args: {
    variant: "secondry",
    size: "lg",
    color: "red",
  },
};
export const Text = {
  args: {
    variant: "text",
    size: "md",
    color: "green",
  },
};
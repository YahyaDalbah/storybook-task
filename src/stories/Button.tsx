import React, {ReactNode} from 'react'

interface Props {
  children: ReactNode;
  variant: "primary" | "secondry" | "text";
  size: "lg" | "md" | "sm";
  color: 'black' | 'green' | 'red';
}

export default function Button({ children = "click me", variant, size, color }: Props) {
    let style: {
        color?: string
        backgroundColor?: string
        borderColor?: string
    }
    if (variant == "primary") {
      style = {
        backgroundColor: color,
        borderColor: color,
        color: "white",
      };
    } else if (variant == "secondry") {
      style = {
        backgroundColor: "white",
        borderColor: color,
        color: color,
      };
    } else {
      style = {
        color: color,
      };
    }

  const buttonClass = `button ${variant} ${size}`;
  return <button className={buttonClass} style={style}>{children}</button>;
}


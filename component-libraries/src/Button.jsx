import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

const SIZES = {
  small: {
    "--borderRadius": "2px",
    "--fontSize": 16 / 16 + "rem",
    "--padding": "4px 12px",
  },
  medium: {
    "--borderRadius": "2px",
    "--fontSize": 18 / 16 + "rem",
    "--padding": "12px 20px",
  },
  large: {
    "--borderRadius": "4px",
    "--fontSize": 21 / 16 + "rem",
    "--padding": "16px 32px",
  },
};

const Button = ({ variant, size, className, children }) => {
  const styles = SIZES[size];
  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  } else if (variant === "ghost") {
    Component = GhostButton;
  } else if (variant === "danger"){
    Component = DangerButton;
  } else {
    throw new Error(`Unrecognized Button variant: ${variant}`);
  }
  return <Component style={styles} className={className}>{children}</Component>;
};

const ButtonBase = styled.button`
  font-size: var(--fontSize);
  font-family: "Roboto";
  padding: var(--padding);
  border: 2px solid transparent;
  border-radius: var(--borderRadius);
  cursor: pointer;

  &:focus {
    outline-color: ${COLORS.primary};
    outline-offset: 4px;
  }
`;

const FillButton = styled(ButtonBase)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  &:hover {
    background-color: ${COLORS.primaryLight};
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: ${COLORS.white};
  color: ${COLORS.primary};
  border: 2px solid currentColor;
  &:hover {
    background-color: ${COLORS.offwhite};
  }
`;

const GhostButton = styled(ButtonBase)`
  color: ${COLORS.gray};
  background-color: transparent;
  &:focus {
    outline-color: ${COLORS.gray};
  }
  &:hover {
    background: ${COLORS.transparentGray15};
    color: ${COLORS.black};
  }
`;

const DangerButton = styled(ButtonBase)`
  color: ${COLORS.white};
  background-color: ${COLORS.danger};

  &:focus {
    outline-color: ${COLORS.danger};
  }
  &:hover {
    opacity: 90%;
  }
`

export default Button;

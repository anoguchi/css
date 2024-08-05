import styled from "styled-components";
import Button from "./Button";

import { COLORS } from "./constants";


const SpookyButton = styled(Button)`
  font-family: "Creepster", system-ui;
  font-weight: 400;
  font-style: normal;
  background-color: ${COLORS.halloween};
  color: black;

  &:hover {
    background-color: ${COLORS.halloween};
    opacity: 90%;
  }

  &:focus {
    outline-color: ${COLORS.halloween};
  }

`;

export default SpookyButton
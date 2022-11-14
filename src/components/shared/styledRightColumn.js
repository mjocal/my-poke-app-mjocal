import styled from "styled-components";
import { Card } from "@mui/material";

const StyledRightColumn = styled(Card)`
  width: 50vw;

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

export default StyledRightColumn;

import styled from "styled-components";
import { Card } from "@mui/material";

const StyledLeftColumn = styled(Card)`
  width: 40vw;

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

export default StyledLeftColumn;

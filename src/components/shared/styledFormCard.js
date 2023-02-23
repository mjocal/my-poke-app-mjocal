import styled from "styled-components";
import { Card } from "@mui/material";

const StyledFormCard = styled(Card)`
  max-width: 25vw;

  @media (max-width: 768px) {
    max-width: 80vw;
  }
`;

export default StyledFormCard;

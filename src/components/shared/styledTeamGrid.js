import styled from "styled-components";

const StyledTeamGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  align-items: center;
  align-content: space-between;
  justify-content: center;
  margin-bottom: 0;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-flow: column;
  }
`;

export default StyledTeamGrid;

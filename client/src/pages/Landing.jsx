import styled from "styled-components";

const StyledBtn = styled.button`
  font-size: 1.5rem;
  background: red;
  color:white;
`;


const Landing = () => {
  return (
    <div>
      <h1>Landing</h1>
      <StyledBtn>Styled btn</StyledBtn>
    </div>
  )
}

export default Landing
//import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg"
import { Link } from "react-router-dom";
import { Logo } from "../components";

/* const StyledBtn = styled.button`
  font-size: 1.5rem;
  background: red;
  color:white;
`; */


const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, cum no dolore iudicabit,
            id his enim prima. Cum an illum dicta reprimique,
            eam enim aeque docendi id. Dicit saepe voluptatum vel ea.
            No his amet conclusionemque, equidem sanctus vim eu.
            Has ut exerci legimus civibus, mea et tantas facete.
            Quo dicit feugait sensibus ne, sit ea nonumy facete tritani.
          </p>
          <Link to="/register" className='btn register-link'>
            Register
          </Link>
          <Link to="/login" className='btn'>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
      {/*   <h1>Landing</h1>
      <div className="content"> some content</div>
      <StyledBtn>Styled btn</StyledBtn> */}
    </Wrapper>
  )
}

/* const Wrapper = styled.div`
background: red;
h1{
  color:white;
}
.content {
  background:blue;
  color:yellow;
}
`; */

export default Landing
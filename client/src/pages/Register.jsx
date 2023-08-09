import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { FormRow, Logo } from "../components"


const Register = () => {
  return (
    <Wrapper>
      <form action="" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type='text' name='name' defaultValue='John' />
        <FormRow type='text' name='lastname' labelText='Last name' defaultValue='Wick' />
        <FormRow type='text' name='location' defaultValue='earth' />
       
        <FormRow type='email' name='email' defaultValue='john@gmail.com' />
        <FormRow type='number' name='phone' defaultValue='john' />
      
        <FormRow type='password' name='password' defaultValue='secret password' />
        <button type="submit" className="btn btn-block"> Submit</button>
        <p>Already a member?
          <Link to='/Login' className="member-btn">
            Login
          </Link>
        </p>

      </form >

    </Wrapper >
  )
}

export default Register
import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { Logo } from "../components"


const Register = () => {
  return (
    <Wrapper>
      <form action="" className="form">
        <Logo />
        <h4>Register</h4>
        <div>
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            defaultValue=''
            required
          />
        </div>
        <button type="submit" className="btn btn-block"> Submit</button>
        <p>Already a member?
          <Link to='/Login' className="member-btn">
            Login
          </Link>
        </p>

      </form>

    </Wrapper>
  )
}

export default Register
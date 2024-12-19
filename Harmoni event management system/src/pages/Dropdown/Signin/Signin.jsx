import Nav from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import frlogin from "../../../assets/frlogin.jpg";
import "./Signin.css";

const Signin = () => {
  return (
    <>
      <Nav />
      <div className="login-container">
        <div className="image-container">
          <img src={frlogin} alt="Login" />
        </div>
        <div className="form-container1">
          <form className="form-container1">
            <h2>Sign In</h2>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password *</label>
              <input type="password" id="password" name="password" required />
            </div>
            
            <div className="form-group">
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember"> Remember Me</label>
            </div>
            <button type="submit">Sign In</button>
            <div className="additional-options">
              <a href="/forgot-password">Forgot your password?</a>
              <a href="/signup">Create an Account</a>
            </div>  
            <p>© Harmoni 2024.</p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signin;

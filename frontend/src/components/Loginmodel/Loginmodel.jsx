import { useState } from "react";
import axios from "axios";
import "../Loginmodel/Login.css";
import { useDispatch } from "react-redux";
import { setuser } from "../../slice/createslice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [islogin, setislogin] = useState(true);
  const [form, setform] = useState({
    email: "",
    password: "",
  });
  const dispatch=useDispatch()
  const Navigate=useNavigate()

  const handlechange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const result = async (e) => {
    e.preventDefault();
    if (!islogin) {
      try {
        await axios.post("http://localhost:3000/save", form);
        alert("Signup success");
      } catch (error) {
        alert("Signup failed");
      }
    } else {
      try {
        await axios.post("http://localhost:3000/login", form);

        alert("Login success");
        dispatch(setuser(form))
        Navigate('/home')
      } catch (error) {
        alert("Please signup first");
      }

      setform({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="login-container">
     
      <div className="login-left">
        <h1>{islogin ? "Looks like you're new here" : "Login"}</h1>
        <p>
          {islogin
            ? "Sign up with your email to get started"
            : "Get access to your Orders, Wishlist and Recommendations"}
        </p>
      </div>

      
      <div className="login-right">
        <form onSubmit={result}>
          <input
            name="email"
            value={form.email}
            onChange={handlechange}
            placeholder="Enter Email"
          />

          <input
            name="password"
            value={form.password}
            onChange={handlechange}
            placeholder="Enter Password"
            type="password"
          />

          <button className="main-btn">
            {islogin ? "Login" : "Signup"}
          </button>
        </form>

        
        <div className="toggle-texts">
          <p onClick={()=>setislogin(true)}>Already have an account?</p>  
<p onClick={()=>setislogin(false)}>Create an account</p>

        </div>
      </div>
    </div>
  );
}

export default Login;

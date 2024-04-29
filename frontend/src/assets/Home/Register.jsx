import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Registere, clearErrors } from "../../action/StudentAction";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../Loader";
import {Button} from '../../Button'

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, isAuthenticated , isValidate} = useSelector(
    (state) => state.student
  );

  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [stdYear, setStdyear] = useState("");
  const [uucmsNo, setuucmsNo] = useState("");


  function handleSelectChange(event) {
    setStdyear(event.target.value);
}


localStorage.setItem("email", JSON.stringify(email));

  const register = (e) => {
    e.preventDefault();
   
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("password", password);
    myForm.set("phoneNumber", phoneNumber);
    myForm.set("email", email);
    myForm.set("stdYear", stdYear);
    myForm.set("uucmsNo", uucmsNo);

  
    dispatch(Registere(myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error, "error");
      dispatch(clearErrors());
    }

    if ( isValidate) {
      navigate("/");
    }
  }, [dispatch, error, isAuthenticated, navigate,isValidate]);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Wrapper>
          <div className="container">
            <div className="forms-container">
              <div className="signin-signup">
                <form onSubmit={register} className="sign-in-form">
                  <h2 className="title underline">Sign in</h2>
                  <div className="input-field">
                    <i className="fas fa-user" />
                    <input
                      type="text"
                      placeholder="Username"
                      required
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                    />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-lock" />
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-lock" />
                    <input
                      type="text"
                      placeholder="PhoneNumber"
                      value={phoneNumber}
                      onChange={(e) => setphoneNumber(e.target.value)}
                    />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-lock" />
                    <input
                      type="text"
                      placeholder="valid email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-lock" />

                    {/* Dropdwon  */}
                    <select value={stdYear}  id="years" onChange={handleSelectChange}>
                      <option value="1st year">1st year</option>
                      <option value="2nd year">2nd year</option>
                      <option value="3rd year">3rd year</option>
                    </select>

                    {/* <input
                      type="text"
                      placeholder="current std year"
                      required
                      value={stdYear}
                      onChange={(e) => setStdyear(e.target.value)}
                    /> */}
                  </div>
                  <div className="input-field">
                    <i className="fas fa-lock" />
                    <input
                      type="text"
                      placeholder="uucms No"
                      required
                      value={uucmsNo}
                      onChange={(e) => setuucmsNo(e.target.value)}
                    />
                  </div>
                  <input
                    type="submit"
                    defaultValue="Login"
                    className="btn solid"
                  />

                  <div className="signup_link text-2xl   text-blue-600">
                    already have a account ?<Link to="/login"><span className=" text-red-500 ml-5 text-3xl underline">Login</span></Link>
                  </div>
                </form>
              </div>
            </div>
            <div className="panels-container">
              <div className="panel left-panel">
                <div className="content">
                  <div className="slide">
                    <ul className="  slideRight  ">
                      <li>
                        » Inspire Innovation, Achieve{" "}
                        <span className="    text-red-600">Excellence!</span>
                      </li>
                    </ul>
                  </div>

                  <h3 className=" mb-4">Already here ?</h3>

                
                
                  <button className="btn transparent hover:bg-orange-300" id="sign-up-btn">
                    <Link to="/login">

                    login
                    
                    </Link>
                  </button>
                </div>
                <img src="./images/clga.png" alt="" />
              </div>
            </div>
          </div>
        </Wrapper>
      )}
    </div>
  );
};

const Wrapper = styled.section`

select#years {
    /* padding-left: 53px; */
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 600;
    font-size: 2.1rem;
    color: #333;
    width: 37vh;
}

  .slide {
    padding-bottom: 12px;
    font-size: 21px;
  }
  .container {
    position: relative;
    width: 100%;
    background-color: #fff;
    min-height: 100vh;
    overflow: hidden;
  }

  .forms-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .signin-signup {
    position: absolute;
    top: 41%;
    transform: translate(-50%, -50%);
    left: 75%;
    width: 50%;
    transition: 1s 0.7s ease-in-out;
    display: grid;
    grid-template-columns: 1fr;
    z-index: 5;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0rem 5rem;
    transition: all 0.2s 0.7s;
    overflow: hidden;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  form.sign-up-form {
    opacity: 0;
    z-index: 1;
  }

  form.sign-in-form {
    z-index: 2;
  }

  .title {
    font-size: 2.2rem;
    color: #444;
    margin-bottom: 10px;
  }

  .input-field {
    max-width: 380px;
    width: 100%;
    background-color: #f0f0f0;
    margin: 10px 0;
    height: 55px;
    border-radius: 55px;
    display: grid;
    grid-template-columns: 15% 85%;
    padding: 0 0.4rem;
    position: relative;
  }

  .input-field i {
    text-align: center;
    line-height: 55px;
    color: #acacac;
    transition: 0.5s;
    font-size: 1.1rem;
  }

  .input-field input {
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 600;
    font-size: 2.1rem;
    color: #333;
  }

  .input-field input::placeholder {
    color: #aaa;
    font-weight: 500;
  }

  .social-text {
    padding: 0.7rem 0;
    font-size: 1rem;
  }

  .social-media {
    display: flex;
    justify-content: center;
  }

  .btn {
    width: 150px;
    background-color: #5995fd;
    border: none;
    outline: none;
    height: 49px;
    border-radius: 49px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    margin: 10px 0;
    cursor: pointer;
    transition: 0.5s;
  }

  .btn:hover {
    background-color: #4c6898;
  }
  .panels-container {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .container:before {
    content: "";
    position: absolute;
    height: 2000px;
    width: 2000px;
    top: -10%;
    right: 48%;
    transform: translateY(-50%);
    background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);
    transition: 1.8s ease-in-out;
    border-radius: 50%;
    z-index: 6;
  }

  .image {
    width: 100%;
    transition: transform 1.1s ease-in-out;
    transition-delay: 0.4s;
  }

  .panel {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    text-align: center;
    z-index: 6;
  }

  .left-panel {
    pointer-events: all;
    padding: 3rem 17% 2rem 12%;
  }

  .right-panel {
    pointer-events: none;
    padding: 3rem 12% 2rem 17%;
  }

  .panel .content {
    color: #fff;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.6s;
  }

  .panel h3 {
    font-weight: 600;
    line-height: 1;
    font-size: 1.5rem;
  }

  .panel p {
    font-size: 0.95rem;
    padding: 0.7rem 0;
  }

  .btn.transparent {
    margin: 0;
    background: none;
    border: 2px solid #fff;
    width: 130px;
    height: 41px;
    font-weight: 600;
    font-size: 1.8rem;
  }

  .right-panel .image,
  .right-panel .content {
    transform: translateX(800px);
  }

  /* ANIMATION */

  .container.sign-up-mode:before {
    transform: translate(100%, -50%);
    right: 52%;
  }

  .container.sign-up-mode .left-panel .image,
  .container.sign-up-mode .left-panel .content {
    transform: translateX(-800px);
  }

  .container.sign-up-mode .signin-signup {
    left: 25%;
  }

  .container.sign-up-mode form.sign-up-form {
    opacity: 1;
    z-index: 2;
  }

  .container.sign-up-mode form.sign-in-form {
    opacity: 0;
    z-index: 1;
  }

  .container.sign-up-mode .right-panel .image,
  .container.sign-up-mode .right-panel .content {
    transform: translateX(0%);
  }

  .container.sign-up-mode .left-panel {
    pointer-events: none;
  }

  .container.sign-up-mode .right-panel {
    pointer-events: all;
  }

  @media (max-width: 870px) {
    .container {
      min-height: 800px;
      height: 100vh;
    }
    .signin-signup {
      width: 100%;
      top: 95%;
      transform: translate(-50%, -100%);
      transition: 1s 0.8s ease-in-out;
    }

    .signin-signup,
    .container.sign-up-mode .signin-signup {
      left: 50%;
    }

    .panels-container {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 2fr 1fr;
    }

    .panel {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      padding: 2.5rem 8%;
      grid-column: 1 / 2;
    }

    .right-panel {
      grid-row: 3 / 4;
    }

    .left-panel {
      grid-row: 1 / 2;
    }

    .image {
      width: 200px;
      transition: transform 0.9s ease-in-out;
      transition-delay: 0.6s;
    }

    .panel .content {
      padding-right: 15%;
      transition: transform 0.9s ease-in-out;
      transition-delay: 0.8s;
    }

    .panel h3 {
      font-size: 1.2rem;
    }

    .panel p {
      font-size: 0.7rem;
      padding: 0.5rem 0;
    }

    .btn.transparent {
      width: 110px;
      height: 35px;
      font-size: 0.7rem;
    }

    .container:before {
      width: 1500px;
      height: 1500px;
      transform: translateX(-50%);
      left: 30%;
      bottom: 68%;
      right: initial;
      top: initial;
      transition: 2s ease-in-out;
    }

    .container.sign-up-mode:before {
      transform: translate(-50%, 100%);
      bottom: 32%;
      right: initial;
    }

    .container.sign-up-mode .left-panel .image,
    .container.sign-up-mode .left-panel .content {
      transform: translateY(-300px);
    }

    .container.sign-up-mode .right-panel .image,
    .container.sign-up-mode .right-panel .content {
      transform: translateY(0px);
    }

    .right-panel .image,
    .right-panel .content {
      transform: translateY(300px);
    }

    .container.sign-up-mode .signin-signup {
      top: 5%;
      transform: translate(-50%, 0);
    }
  }

  @media (max-width: 570px) {
    form {
      padding: 0 1.5rem;
    }

    .left-panel {
      margin-top: 50px;
    }
    .image {
      display: none;
    }
    .panel .content {
      margin: -199px -431px 82px 25px;
    }
    .container {
      padding: 1.5rem;
    }

    .container:before {
      bottom: 72%;
      left: 50%;
    }
    .slide {
      font-size: 15px;
    }

    .container.sign-up-mode:before {
      bottom: 28%;
      left: 50%;
    }
  }

  img {
    margin: -114px -27px;
    
}

  .input-field {
    margin-top: -1px;
  }
`;
export default Register;

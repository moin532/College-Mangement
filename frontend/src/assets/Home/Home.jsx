import { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import styled from "styled-components";
import { Button } from "../../Button";
import FeautureSection from "./FeautureSection";
import Card from "./Card";


const Home = () => {


  return (
    <Wrapper>
     
     
      

      <div className="banner">
    

        {/* <a href="#container">
         

          <Button className="w-15">
          scroll <CgMouse className="mous" />

          </Button>
        </a> */}
      </div>

      <h2 className="homeHeading" id="container"> Feauterd Section </h2>
    
     <FeautureSection/>
     <Card/>
     
cls

     <div className="cartoon">

      <figure>

      <img src="./images/cartoon.webp" alt="" />
      </figure>
    </div>

    
    </Wrapper>
  );
};

const Wrapper = styled.section`


.cartoon{
  margin-top: 8vh;
  margin-left: 45vh;
  cursor: pointer;
    /* display: inline-block; */
    /* overflow: hidden; */
    position: relative;
  
} figure {
    position: relative;

    &::after {
      content: "";
    width: 73%;
    height: 92%;
    background-color: rgb(73 73 165);
    position: absolute;
    left: 51%;
    top: -3rem;
    z-index: -1;
    }
  }

.cartoon,img{
  
  width: 100vh;
  height: 80vh;
  transition: filter 0.5s ease;

}


.cartoon:hover img {
    border: 1px solid #3a67d044;
    box-shadow: 0 10px 50px 15px #000000aa;
    transform: scale(1.015);
    filter: brightness(1.3);
    ::before{
      filter: brightness(.5);
      top: -100%;
      left: 200%;
    }
}


.mous{
  width: 12vh;
  height: 2vh;
}
 
  .banner {
    background-image: url("/images/girl.jpg");
    height: 100vmin;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: #efffff;
    flex-direction: column;
    background-color:"#F6F8FA";
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    animation: slideAnimation 23s step-end infinite;
    scroll-behavior: smooth;
    
    
  }

  
@keyframes slideAnimation {
    0%,100% {
        transform: translateX(0%);
        background-image: url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    }
    20% {
        transform: translateX(0%);
        background-image: url("./images/srs degree.jpg")
      }
      45% {
        transform: translateX(0%);
        background-image: url("./images/cartoon.webp")
      }
      70% {
        transform: translateX(0%);
        background-image: url("https://srspucollege.in/wp-content/uploads/2020/04/slidingnew1.jpg");
      }

    83%{
  
       background-image: url("https://srsdegreecollege.com/wp-content/uploads/2021/03/aboutsrs.jpg");
      transform: translateX(0%);
    }
}
 

  .banner > a > button {
    
    cursor: pointer;
    width: 9vmax;
    font-size: 20px;
    border-radius: 18px;
  }
  .homeHeading {
    text-align: center;
    font-size: 3vmax;
    border-bottom: 1px solid rgba(21, 21, 21, 0.5);
    width: 30vmax;
    padding: 1vmax;
    margin: 5vmax auto;
  }

  .container1 {
    display: flex;
    margin: 2vmax auto;
    width: 80vw;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100%;
  }

  @media screen and (max-width: 600px) {
    .banner{
      margin:0px;  
      margin-top: 10px;
   
    }

    .banner ,h1{
      margin:0px;
      font-size:43px;
    }

    .banner,p{
      font-size:20px;
      color:black;
      margin-bottom: 12px;
    }

    .banner>a>Button {
        
      padding: 0px 17px 0px 12px;
    
    height: 38px;
    width: 120px;
    font-size: 11px;
    margin-top: 300px
        
    }

  }
`;

export default Home;
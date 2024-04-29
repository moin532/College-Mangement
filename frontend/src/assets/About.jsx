import styled from "styled-components";
import { Button } from "../Button";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to</p>
            <h1>SRS - FGC</h1>
            <p>
              SRS Degree College is a reputable institution that offers a
              comprehensive Bachelor of Computer Applications (BCA) program. The
              BCA program at SRS Degree College is designed to provide students
              with a strong foundation in computer applications, software
              development, and information technology. The curriculum is updated
              regularly to incorporate the latest advancements in technology and
              industry trends.
              
               Graduates of the BCA program from SRS Degree
              College are well-prepared to enter the workforce or pursue higher
              education in the field of computer science. They are equipped with
              the skills required to excel in various roles such as software
              developers, system analysts, and IT consultants. Overall, SRS
              Degree College provides a robust platform for students aspiring to
              pursue a career in computer applications. Its BCA program is not
              just about imparting knowledge; it is about creating innovators
              and leaders who will contribute to the advancement of the
              technology sector. Thank You
            </p>

            <NavLink to="/login">
              <Button>Login now</Button>
            </NavLink>
          </div>
          <div className="hero-section-image">
            <figure>
              <img src="./images/srs degree.jpg" alt="hero" className="img-style" />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 12rem 0;

  h1 {
    font-family: "Work Sans", sans-serif;
  }
  p {
    font-size: 1.65rem;
    line-height: 1.5;
    font-weight: 400;
  }

  h1 {
    color: rgb(24 24 29);
    font-size: 6rem;
    font-weight: 900;
  }
  .intro-data {
    margin-bottom: 0;
    text-transform: uppercase;
    color: #5138ee;
  }

  .container {
    max-width: 120rem;
    margin: 0 auto;
  }

  .grid {
    display: grid;
    gap: 9rem;
  }

  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
      color: rgb(73 73 165);
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 70%;
      height: 86%;
      background-color: rgb(73 73 165);
      position: absolute;
      left: 51%;
      top: -3rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      background-color: rgba(81, 56, 238, 0.4);
    }
    hero-section-data,
    p {
      font-size: 25px;
    }
  }
`;
export default About;

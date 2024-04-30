import React from "react";
import styled from "styled-components";

const FeautureSection = () => {
  return (
    <Wrapper>
      <div className="Main-sect">
      <div className="vid">
       
<iframe width="853" height="480" src="https://www.youtube.com/embed/SwBFGP-IAok?rel=0&modestbranding=1" title="Srs Degree College" frameborder="0" allow="accelerometer; autoplay;  encrypted-media; gyroscope; " referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
      </div>

      <div className="para">
        <p>At Srs College, our Bachelor of Computer Applications (BCA) program stands as a beacon for aspiring technology professionals.
           With a curriculum meticulously designed to match the industry's evolving demands, we offer a blend of theoretical foundations 
           and practical expertise in computer science. Our students to bring their innovative ideas 
           to life, under the guidance of a distinguished faculty deeply invested in their success. Collaborations with leading tech companies
            enrich our program with internships, workshops,
           and live project experiences, ensuring our graduates are not just job-ready but trailblazers in the IT realm.
            The vibrant campus life,  fosters a robust learning environment that encourages students to exceed their potential.
             Join us at Srs College, where your journey in computer applications begins, poised to transform passion into a distinguished
              career in technology.</p>
      </div>

      </div>
    </Wrapper>
  );
};

export default FeautureSection;

const Wrapper = styled.section`
  .vid ,iframe{
 
    margin-left: 1vh;
    width: 100vh;
   
  }

  .Main-sect{
    margin-top : 5%;
    display: flex; /* Use Flexbox */
    justify-content: space-between;
  }

.para {
  text-indent: 90px;
    font-size: 22px;
    width: 63%;
    padding-left: 30px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    word-spacing: 10px
}

.para p{

    font-family: Arial, Helvetica, sans-serif;
    

}

@media screen and (max-width: 600px) {

  .vid,iframe {
    height: 30vh;
        position: absolute;
        width: 100%;
        margin-left: 0px;
  }

  .para{
    padding-left: 12px;
    padding-right: 12px;
    text-align: justify;
    width: 50vh;
    margin-top: 31vh;
    position: static;
  }

  .para,p{
    font-size: 13px;
  }

  
}

`;

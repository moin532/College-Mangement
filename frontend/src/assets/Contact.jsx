import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free to Contact us</h2>

      
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.133825922824!2d76.40369599902641!3d14.245414612973915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba74def4540b0f%3A0x3fd117c842e2233b!2sS.R.S%20First%20Grade%20College%20%7C%7C%20Basaveshwar%20Nagar%20%7C%7C%20Chithradurga!5e0!3m2!1sen!2sin!4v1713681294339!5m2!1sen!2sin" 
        width="100%"
        height="450"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="mm"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xbjvdnar"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required
            ></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;

  
input, textarea{
    max-width: 50rem;
    color: #000;
    padding: 1.6rem 2.4rem;
    border: 1px solid rgba(98, 84, 243, 0.5);
    text-transform: uppercase;
   box-shadow:  rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
   
    
input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;
    background-color: rgb(98 84 243);
    color:#fff;
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
    }
  .common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 6rem;
      text-transform: capitalize;
    }
  .container {
    margin-top: 6rem;
    text-align: center;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;
          
          &:hover {
            background-color: #fff;
            border: 1px solid  rgb(98 84 243);
            color:  rgb(98 84 243);
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

export default Contact;
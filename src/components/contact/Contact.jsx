import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  
    const handleSubmit = (e) => {
      console.log("this function works");
        e.preventDefault();
        emailjs
        .sendForm(
            "service_qf13yam",
        "template_3v5nih4",
        formRef.current,
        "user_DrriDPTGKO2Zj4RDXCA6W"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
        
    };

    return (
      <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Let's talk about your next project</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} alt="" className="c-icon" />
                +1 754 242 7030
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={Email} alt="" />
                mrralphpierre@gmail.com
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={Address} alt="" />
                4900 NE 1st Ter Oakland Park, Florida 33334
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>What do you have in mind?</b> Never hesitate to reach out. Always available for
              freelancing if the right project comes along. 
            </p>
            {/* <form ref={formRef} onSubmit={handleSubmit}>
              <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
              <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
              <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
              <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
              <button>Submit</button>
              {done && "Thank you..."}
            </form> */}
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
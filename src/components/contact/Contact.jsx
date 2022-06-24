import "./contact.css";
import Phone from "../../images/phone.png";
import Email from "../../images/email.png";
import Address from "../../images/address.png";

const Contact = () => {
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's talk about your next project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              <div>
                <i class="fa fa-phone"></i>{" "}
                <a href="tel:754-242-7030">(754) 242 - 7030</a>
              </div>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              <div>
                <a href="mailto:mrralphpierre@gmail.com">
                  mrralphpierre@gmail.com
                </a>
              </div>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Oakland Park, Florida
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What do you have in mind?</b> Never hesitate to reach out. Always
            available for freelancing if the right project comes along.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;


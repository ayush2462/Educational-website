import "./Contact.css";
import msg from '../../assets/msg-icon.png';
import mail from '../../assets/mail-icon.png';
import phone from '../../assets/phone-icon.png';
import location from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';
const Contact = () => {
  return(
    <div className="contact">
        <div className="contact-col">
            <h3>Send us a message <img src={msg} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet suscipit atque quaerat dolor perferendis illum, quos tenetur earum doloremque enim ex minima iusto esse, ab explicabo maiores. Commodi, vel iure.</p>
            <ul>
                <li><img src={mail} alt="" /> Contact@xyz.dev</li>
                <li><img src={phone} alt="" /> +1-26-47-89566</li>
                <li><img src={location} alt="" /> XYZ, California, <br />South Africa</li>
            </ul>
        </div>
        <div className="contact-col">
            <form>
                <label>
                    Your Name
                </label>
                <input type="text" name="name" placeholder="Your name.." required/>
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="enter mobile number" required />
                <label>Write your messages here</label>
<textarea name="messages" rows="6" placeholder="Enter your message" required></textarea>
<button type="submit" className="btn dark-btn">Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span>Sending</span>
        </div>
    </div>
  )
};

export default Contact;

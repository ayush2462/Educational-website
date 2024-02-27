import "./Testimonial.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";
const Testimonial = () => {
  return (
    <div className="testimonial">
      <img src={next_icon} alt="" className="next-btn" />
      <img src={back_icon} alt="" className="back-btn" />
      <div className="slider">
        <ul>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam alias tempora? Nobis soluta sit perspiciatis ea aliquam aspernatur. Enim.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam alias tempora? Nobis soluta sit perspiciatis ea aliquam aspernatur. Enim.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam alias tempora? Nobis soluta sit perspiciatis ea aliquam aspernatur. Enim.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam alias tempora? Nobis soluta sit perspiciatis ea aliquam aspernatur. Enim.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;

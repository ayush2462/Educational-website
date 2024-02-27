import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrows Leader Today</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quia illo autem animi aperiam! Quae dolorem nemo incidunt dolore non doloribus provident eligendi tempora? Delectus modi, voluptatem unde itaque porro animi est, sit repellendus atque nam, repudiandae voluptates facere voluptas. Doloremque nostrum debitis inventore provident expedita, quo delectus minus a?</p>
        <p>Incidunt magni dolores amet natus est impedit possimus in, modi odit magnam ducimus error libero dolorem cum aliquam soluta deserunt obcaecati explicabo. A nobis velit, cum minima quisquam placeat rerum maxime eius, ad impedit, eligendi consequatur alias! Culpa, officiis itaque? Placeat dicta at excepturi rem facere consequuntur assumenda rerum doloremque?</p>
        <p>Totam dolorum dolores, delectus nostrum sequi sint? Magni facilis corrupti blanditiis iste sint mollitia eligendi ipsam voluptatibus consequatur aperiam expedita libero ipsa nobis, distinctio dolorum fugit cumque neque nulla deleniti quis eos sed itaque? Earum necessitatibus vel officiis, autem officia, perspiciatis rem soluta fugit enim dolore excepturi rerum labore praesentium.</p>
      </div>
    </div>
  );
};

export default About;

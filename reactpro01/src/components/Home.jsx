import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="Home" id="home">
        <main>
          <h1>DevLab</h1>
          <p>solution to all your problem</p>
        </main>
      </div>
      <div className="home2" id="contact">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            we are your one and pnly solution to the tech problems you face
            everyday. we are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>who we are</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            reiciendis dolores corrupti quas consequatur incidunt eaque minus
            fugiat nulla, nostrum quibusdam labore. Hic consequuntur ab, cum
            magni, incidunt ea in voluptas quas, doloremque doloribus veritatis.
            Suscipit ab sed aperiam, incidunt eveniet natus reiciendis eligendi!
            Voluptatem eaque alias iusto quasi ea.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: "0.10s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;

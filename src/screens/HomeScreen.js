import React from "react";
import "./HomeScreen.css";
import { Link } from "react-router-dom";
import Featured from "../Featured";
import Heading from "../Heading";
import Info from "../Info";
import Info2 from "../info2";
import { Fade } from "react-awesome-reveal";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Fade>
        <div className="homeScreen__top">
          <h4>
            We’re working hard to put the health and well-being of our partners
            and customers first in all that we do. <Link>Learn more</Link>
          </h4>
        </div>
      </Fade>
      <Fade>
        <div className="homeScreen__bottom">
          <div className="homeScreen__bottomLeft">
            <h4>WELCOME BACK, PUMPKIN</h4>
            <p>
            The quintessential flavor is back in session with the velvety, 
            cool Pumpkin Cream Cold Brew and the warm and cozy  Pumpkin Spice Latte.
            </p>
            <button>Order Now</button>
          </div>
          <div className="homeScreen__bottomRight">
            <img
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-73204.png"
              alt=""
            />
          </div>
        </div>
      </Fade>
      <Fade>
        <Heading heading="PERFECTLY SPICED OH, SO NICE" />
      </Fade>
      <div className="homeScreen__featured">
        <Fade>
          <Featured
            title="NICELY NONDAIRY"
            info="Celebrate the return of pumpkin with these bakery favorites—warm autumn spices and just the right amount of sweetness."
            link="Explore the honey drinks"
            path=""
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-73314.png"
            background="#f0ebe0"
            color="#1e3932"
            className="featured__hoverLight"
          />
        </Fade>
        <Fade>
          <Featured
            title="PISTACHIOOOOOOO"
            info="Embrace creamy coffee bliss with our new Pistachio Latte and Pistachio Frappuccino® blended beverage."
            link="Try the new pistachio drinks"
            path=""
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67826.png"
            order="2"
            background="#f0ebe0"
            color="#1e3932"
            className="featured__hoverLight"
          />
        </Fade>
      </div>
      <Fade>
        <Heading heading="MORE TO DISCOVER" />
      </Fade>
      <Fade>
        <div className="homeScreen__discover">
          <Info
            title="FREE COFFEE IS A TAP AWAY"
            image=""
            info="Join now to start earning Rewards.*"
            link="Join Now."
            color="#1e3932"
            background="transparent"
            className="info__hoverLight"
          />
          
          <Info2
            title=""
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-73206.png"
            info=""
            color="#1e3932"
            background="transparent"
            className="info__hoverLight"
          />
        </div>
      </Fade>
      <Fade>
        <Fade>
        <div className="homeScreen__discover">
          <Info
            title="Today deserves delivery."
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-73315.jpg"
            info="Order Starbucks®  delivery on Uber Eats. Check the Uber Eats app for availability and restrictions.**"
            link="Order Now."
            color="#1e3932"
            background="transparent"
            className="info__hoverLight"
          />
          
          <Info
            title="Fall into an easier routine."
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-73208.jpg"
            info="Make everything a little brighter. Enjoy a $0 Delivery Fee* on your first Uber Eats order over $15 through 1/31."
            link="see Pick up options"
            color="#1e3932"
            background="#d4e9e4"
            className="info__hoverLight"
          />
        </div>
      </Fade>
      </Fade>
       <Fade>
      <div className="homeScreen__discover">
          <Info
            title="Order and pick up. Easy as that."
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67828.jpg"
            info="Just open the app, order your favorites, and enjoy contactless pay. From there, choose whichever pickup method is best for you."
            link="See pickup options"
            color="#1e3932"
            background="#d4e9e4"
            className="info__hoverLight"
          />
          
          <Info
            title="Coffee delivered. Day made."
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67829.jpg"
            info="Make everything a little brighter. Enjoy a $0 Delivery Fee* on your first Uber Eats order over $15 through 1/31."
            link="Order now"
            color="#1e3932"
            background="#d4e9e4"
            className="info__hoverLight"
          />
        </div>
      </Fade>

      <div className="homeScreen__featured">
        <Fade>
          <Featured
            title="50 years of serving communities"
            info="From the beginning, Starbucks has been about more than just coffee. See how our partners (employees) and customers strengthen our local communities."
            link="learn more"
            path=""
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72972.jpg"
            background="#f2f0eb"
            color="#1e3932"
            className="featured__hoverLight"
          />
        </Fade>
        </div>
    </div>
  );
}

export default HomeScreen;

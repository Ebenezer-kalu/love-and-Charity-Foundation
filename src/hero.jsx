import React, { useState } from "react";

// Hero Section Component
const Hero = () => {
  

  return (
    <section id="home">
      <div className="hero">
            <div>
              <img src="network.jpg" alt="nwtwork" style={{borderRadius:"20px"}} />
            </div>
           
            <div>
                <h2>
                  <b>Together, We Can Make a Difference</b>
                </h2>
              <h3>  
              Mission Statement:<br/>
                  Our mission is to create a positive<br/> impact by fostering
                  collective action<br/> to address environmental, social, and 
                  governance challenges. <br/>Through initiatives like tree planting,
                    environmental restoration,<br/> providing clean water,<br/> and supporting 
                    education and community development,<br/> we aim to promote sustainability,
                    improve lives,<br/> and empower communities.<br/> Every step we take, 
                    no matter how small, 
                  contributes to building a<br/> better and more 
                  sustainable future for all.
              </h3>
              <h6>
                  <i>...join us in creating a better future for all! </i>
              </h6>
            </div>
        </div>
  
    </section>
  );
};

export default Hero;

import React from "react";
import "./Governmental.css"; // ✅ Ensure you have a CSS file for styling

const Governmental = () => {
  return (
    <section id="governmental">
      <div className="governmental">
        <h2><b>GOVERNMENTAL SERVICE</b></h2>
        
        <p className="description">
          At <b>Love and Charity Foundation</b>, we are dedicated to improving lives through impactful 
          governmental service activities that foster community growth and empowerment.
        </p>

        <p className="description">
          Our initiatives include organizing public health programs, such as free health camps and 
          vaccination drives, to ensure underserved communities have access to essential healthcare. 
          We also offer legal aid to individuals in need, helping them navigate legal challenges 
          and secure their rights.
        </p>

        <p className="description">
          In partnership with local governments, we work on enhancing community infrastructure 
          like schools, clinics, and clean water systems, creating spaces that promote well-being 
          and long-term development.
        </p>

        <p className="description">
          During crises, our emergency response services provide immediate aid, offering food, 
          shelter, and medical support to those in need. Our commitment extends to job training 
          and placement programs, equipping individuals with skills for sustainable employment.
        </p>

        <p className="description">
          We also advocate for stronger social services, ensuring every community has access to 
          housing, education, and welfare support. By promoting voter education and civic engagement, 
          we empower individuals to participate in governance, strengthening democratic processes 
          for a more inclusive society.
        </p>

        <div className="image-gallery">
          <img src="gov1.jpg" alt="Community health camp" />
          <img src="gov2.jpg" alt="Legal aid program" />
          <img src="gov3.jpg" alt="Infrastructure development" />
          <img src="gov4.jpg" alt="Emergency response service" />
          <img src="gov5.jpg" alt="Civic engagement program" />
        </div>
      </div>
    </section>
  );
};

export default Governmental;

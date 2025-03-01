import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

// const Footer = () => {
//   return (
//     <div className='footer' id='footer'>
//       <div className="footer-content">
//         <div className="footer-content-left">
//             <img src={assets.logo2} alt="" />
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam iusto suscipit quasi! Rerum laborum reprehenderit suscipit officia sequi! Sit iure perferendis laudantium odit culpa.</p>
//             <div className="footer-social-icons">
//                 <img src={assets.facebook_icon} alt="" />
//                 <img src={assets.twitter_icon} alt="" />
//                 <img src={assets.linkedin_icon} alt="" />
//             </div>
//         </div>

//         <div className="footer-content-center">
//             <h2>COMPANY</h2>
//             <ul>
//                 <li>Home</li>
//                 <li>About Us</li>
//                 <li>Sevlivery</li>
//                 <li>Privacy Policy</li>
//             </ul>
//         </div>

//         <div className="footer-content-right">
//             <h2>GET IN TOCUH</h2>
//             <ul>
//                 <li>+91 9757040243</li>
//                 <li>mayankjadiwal@gmail.com</li>
//             </ul>
//         </div>
//       </div>
//       <hr />
//       <p className='footer-copyright'>Copyright 2024 &copy; Mayank - All Rights Reserved.</p>
//     </div>
//   )
// }

// export default Footer


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">

          <div className="logo-section">
            <img src={assets.burger28_logo2} alt="burger28 Logo" className="footer-logo" />
            <h3><span id='burger-color'>Burger28</span> India.</h3>
          </div>


          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Care</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Our Golden Past</a></li>
              <li><a href="#">Responsible Disclosure</a></li>
            </ul>
          </div>


          <div className="footer-column">
            <h3>Food</h3>
            <ul>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Order Lookup</a></li>
              <li><a href="#">Gift Card</a></li>
              <li><a href="#">Nutrition & Allergen</a></li>
            </ul>
          </div>


          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Get Help</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Feedback</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>


          <div className="footer-column">
            <h3>Find Us</h3>
            <div className="app-buttons">
              <a href="#" className="app-button">
                <img src={assets.play_store} alt="Google Play" />
              </a>
              <a href="#" className="app-button">
                <img src={assets.app_store} alt="App Store" />
              </a>
            </div>
          </div>
        </div>


        <div className="footer-bottom">
          <p className="copyright">
            Copyright © Burger28 Corporation 2025. All rights reserved
          </p>
          
          <div className="social-links">
            <a href="#">
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a href="#">
              <i className="ri-instagram-fill"></i>
            </a>
            <a href="#">
              <i className="ri-facebook-circle-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


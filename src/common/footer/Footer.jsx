import React from "react"
import "./style.css"
import logo from "../../components/assets/images/sav-logo-white.png"
const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
          <div className='logo width '>
            <img src={logo} alt='' />
          </div>
            {/* <h1>SAV</h1> */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Dhahran, 3xxxx, KSA.</li>
              <li>Email: s201834220@kfupm.edu.sa</li>
              <li>Phone: +1 1123 456 780</li>
              <li> Contact us</li>
              <li> Find us</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

import React from 'react'
import "./CSS/Footer.css"
import { FaFacebook } from "react-icons/fa6";
function Footer() {
  return (
   <>
  <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">Rating</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><a href="#">Community</a></li>
  	 				<li><a href="#">MERN</a></li>
  	 				<li><a href="#">MEAN</a></li>
  	 				<li><a href="#">UI/UX</a></li>
  	 			</ul>
  	 		</div>
  	 	  <div className='Head-Footer'>
            <div className='Company_Name'>
              <h1>EduVerse</h1>
              <p>&#169; Divy Arora ( Project ) Year 2024-Feb </p>
            </div>
          </div>
  	 	</div>
  	 </div>
  </footer>

   </>
  )
}

export default Footer

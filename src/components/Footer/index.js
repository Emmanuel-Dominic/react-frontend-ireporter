/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../assets/scss/Footer.scss';


const Footer = () => (
  <React.Fragment>
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 item text">
              <ul>
                <li><a href="#" className="a-text">About</a></li>
                <li><a href="#" className="a-text">Contact</a></li>
                <li><a href="#" className="a-text">Advertise</a></li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>
                <span className="head-text">&#8465;&#8477;&#8455;</span>
                PORT
                <span className="head-text">&#8455;&#8477;</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa.
              </p>
            </div>
            <div className="col-md-3 item social">
              <a href="#"><i className="fab fa-facebook-square social-fab" /></a>
              <a href="#"><i className="fab fa-twitter social-fab" /></a>
              <a href="#"><i className="fab fa-instagram social-fab" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </React.Fragment>
);

export default Footer;

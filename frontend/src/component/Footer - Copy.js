import React from "react";
import { Telephone, EnvelopeHeart, Facebook, Twitter, Github } from "react-bootstrap-icons";


function Footer() {
  return(
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">Bookworm Library is a simple digital library service.</p>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Contact</h6>
              <div>
                <Telephone size={30} color="#fff" />
                <p>+1(222)222-2222</p>
              </div>
              <div>
                <EnvelopeHeart size={30} color="#fff" />
                <p>bookworm@library.com</p>
              </div>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Contact Us</a>
                </li>
                <li>
                  <a href="/">Account</a>
                </li>
              </ul>
            </div>
          </div>
          <hr></hr>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">copyright &copy; 2022 All Rights Reserved by Bookworm Library.</p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="/">
                    <Facebook size={30} color="#fff" />
                  </a>
                </li>
                <li>
                  <a className="twitter" href="/">
                    <Twitter size={30} color="#fff" />
                  </a>
                </li>
                <li>
                  <a className="github" href="/">
                    <Github size={30} color="#fff" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

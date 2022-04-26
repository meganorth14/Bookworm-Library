import React from "react";
import { Telephone, EnvelopeHeart, Facebook, Twitter, Github } from "react-bootstrap-icons";


function Footer() {
  return(
    <>
      <footer className="site-footer">
        <div className="container">
          <hr></hr>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Bookworm Library &copy; 2022 All Rights Reserved.</p>
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

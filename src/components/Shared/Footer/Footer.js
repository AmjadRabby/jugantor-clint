import React from "react";
import "./Footer.css";
import { MenuItem } from "../../Home/Header/Navbar/MenuItem";
import { Container } from "react-bootstrap";
import logo from "../../../images/amr-somy.png";
import google from "../../../images/google-play.png";
import convert from "../../../images/converter.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-secondary pb-1 pt-3">
      <div className="container p-0">
        <Link to="/">
          <img src={logo} alt="" className="img-fluid main-logo mb-2" />
        </Link>
      </div>
      <div className="bg-dark">
        <Container>
          <div className="row pt-4">
            <div className="col-8 col-md-8 col-sm-12 ">
              <ul className="row list-unstyled text-white">
                {MenuItem.map((item, index) => (
                  <li
                    key={index}
                    className="footer-item col-3 col-md-3 col-sm-4 mb-1"
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-4 col-md-4 col-sm-12 ">
              <Link to="/">
                <img
                  src={google}
                  alt=""
                  className="img-fluid mb-2  border rounded"
                />
              </Link>
              <Link to="/">
                <img
                  src={convert}
                  alt=""
                  className="img-fluid border rounded"
                />
              </Link>
            </div>
          </div>
          <ul className="text-white list-unstyled pb-3 pt-2">
            <li className="">সম্পাদক : সাইফুল আলম, প্রকাশক : সালমা ইসলাম</li>
            <li className="">
              প্রকাশক কর্তৃক ক-২৪৪ প্রগতি সরণি, কুড়িল (বিশ্বরোড), বারিধারা,
              ঢাকা-১২২৯ থেকে প্রকাশিত এবং যমুনা প্রিন্টিং এন্ড পাবলিশিং লিঃ থেকে
              মুদ্রিত।
            </li>
            <li className="">
              পিএবিএক্স : ৯৮২৪০৫৪-৬১, রিপোর্টিং : ৯৮২৪০৭৩, বিজ্ঞাপন : ৯৮২৪০৬২,
              ফ্যাক্স : ৯৮২৪০৬৩, সার্কুলেশন : ৯৮২৪০৭২। ফ্যাক্স : ৯৮২৪০৬৬
            </li>
            <li className="">E-mail: amarsomoy.mail@gmail.com</li>
            <li className="">© সর্বস্বত্ব স্বত্বাধিকার সংরক্ষিত</li>
          </ul>
        </Container>
      </div>
      <div className="text-center text-white">
        <p className="">Crafted with by The Daily Amar Somoy © 2021</p>
      </div>
    </div>
  );
};

export default Footer;

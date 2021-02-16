import React from "react";
import "./Footer.css";
import { MenuItem } from "../../Home/Header/Navbar/MenuItem";
import { Container } from "react-bootstrap";
import logo from "../../../images/footer-logo.png";
import google from "../../../images/google-play.png";
import convert from "../../../images/converter.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-secondary pb-1 pt-4">
      <div className="container p-0">
        <Link to="/">
          <img src={logo} alt="" className="img-fluid mb-3" />
        </Link>
      </div>
      <div className="bg-dark">
        <Container>
          <div className="row pt-5">
            <div className="col-8">
              <ul className="row list-unstyled text-white">
                {MenuItem.map((item, index) => (
                  <li className="footer-item col-3 col-md-3 col-sm-6 mb-2">{item.title}</li>
                ))}
              </ul>
            </div>
            <div className="col-4">
              <Link to="/">
                <img
                  src={google}
                  alt=""
                  className="img-fluid mb-3 border rounded"
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
          <ul className="text-white list-unstyled pb-4 pt-3">
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
            <li className="">E-mail: jugantor.mail@gmail.com</li>
            <li className="">© সর্বস্বত্ব স্বত্বাধিকার সংরক্ষিত</li>
          </ul>
        </Container>
      </div>
      <div className="text-center text-white">
        <p className="">Crafted with by The Daily Jugantor © 2021</p>
      </div>
    </div>
  );
};

export default Footer;

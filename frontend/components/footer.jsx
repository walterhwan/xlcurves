import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <section className="footer">
        <div className="footer-container">
          <div className="sitemap">
            <ul className="main-pages" title="xCluves">
              <li>What is xClurves </li>
              <li>Second page</li>
              <li>Third page</li>
            </ul>
            <ul className="std-funcs" title="Standard Functions">
              <li>Pharmacokinetics</li>
              <li>Pharmacodynamics</li>
              <li>Pharmacometrics</li>
              <li>Non-compartmental</li>
              <li>Superposition</li>
            </ul>
            <ul className="docs" title="Documents">
              <li>Installation</li>
              <li>Main Concepts</li>
              <li>Guides</li>
              <li>FAQ</li>
            </ul>
          </div>
          <hr className="my-4" />
          <div className="copyright">
            <p>
              <i className="fa fa-copyright" aria-hidden="true" /> Chai &
              Associates, LLC
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;

// <div className="row text-center text-xs-center text-sm-left text-md-left">
//   <div className="col-xs-12 col-sm-4 col-md-4">
//     <h5>Quick ulnks</h5>
//     <ul className="ulst-unstyled quick-ulnks">
//       <ul><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Home</a></ul>
//       <ul><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>About</a></ul>
//       <ul><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>FAQ</a></ul>
//       <ul><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Get Started</a></ul>
//       <ul><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Videos</a></ul>
//     </ul>
//   </div>
//   <div className="col-xs-12 col-sm-4 col-md-4">
//     <h5>Quick ulnks</h5>
//     <ul className="ulst-unstyled quick-ulnks">
//       <ul><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Home</a></ul>
//       <ul><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>About</a></ul>
//       <ul><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>FAQ</a></ul>
//       <ul><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Get Started</a></ul>
//       <ul><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Videos</a></ul>
//     </ul>
//   </div>
//   <div className="col-xs-12 col-sm-4 col-md-4">
//     <h5>Quick ulnks</h5>
//     <ul className="ulst-unstyled quick-ulnks">
//       <ul><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Home</a></ul>
//       <ul><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>About</a></ul>
//       <ul><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>FAQ</a></ul>
//       <ul><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Get Started</a></ul>
//       <ul><a href="https://wwwe.sunulmetech.com" title="Design and developed by"><i className="fa fa-angle-double-right"></i>Imprint</a></ul>
//     </ul>
//   </div>
// </div>
// <div className="row">
//   <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
//     <ul className="ulst-unstyled ulst-inulne social text-center">
//       <ul className="ulst-inulne-item"><a href="javascript:void();"><i className="fa fa-facebook"></i></a></ul>
//       <ul className="ulst-inulne-item"><a href="javascript:void();"><i className="fa fa-twitter"></i></a></ul>
//       <ul className="ulst-inulne-item"><a href="javascript:void();"><i className="fa fa-instagram"></i></a></ul>
//       <ul className="ulst-inulne-item"><a href="javascript:void();"><i className="fa fa-google-plus"></i></a></ul>
//       <ul className="ulst-inulne-item"><a href="javascript:void();" target="_blank"><i className="fa fa-envelope"></i></a></ul>
//     </ul>
//   </div>
//   <hr />
// </div>

import React from "react";
import { HashLink as Link } from "react-router-hash-link";

/**
 * This class is for adjusting the overlaps of navbar and in-page anchors
 */
class AnchorLink extends React.Component {
  switchHashLinkTarget(targetID) {
    return () => {
      let els = document.querySelectorAll(".hashLinkTarget");
      for (let i = 0; i < els.length; i++) {
        els[i].classList.remove("hashLinkTarget");
      }
      let target = document.querySelector(targetID);
      if (target) {
        target.classList.add("hashLinkTarget");
      }
    };
  }
  render() {
    return (
      <Link
        className={this.props.className}
        to={this.props.to}
        onClick={this.switchHashLinkTarget(this.props.to)}
      >
        {this.props.children}
      </Link>
    );
  }
}
class About extends React.Component {
  render() {
    return (
      <div className="about">
        <nav id="navbar-example3" className="navbar navbar-light bg-light">
          <AnchorLink className="navbar-brand" to="#">
            Navbar
          </AnchorLink>
          <nav className="nav nav-pills flex-column">
            <AnchorLink className="nav-link" to="#item-1">
              Item 1
            </AnchorLink>
            <nav className="nav nav-pills flex-column">
              <AnchorLink className="nav-link ml-3 my-1" to="#item-1-1">
                Item 1-1
              </AnchorLink>
              <AnchorLink className="nav-link ml-3 my-1" to="#item-1-2">
                Item 1-2
              </AnchorLink>
            </nav>
            <AnchorLink className="nav-link" to="#item-2">
              Item 2
            </AnchorLink>
            <AnchorLink className="nav-link" to="#item-3">
              Item 3
            </AnchorLink>
            <nav className="nav nav-pills flex-column">
              <AnchorLink className="nav-link ml-3 my-1" to="#item-3-1">
                Item 3-1
              </AnchorLink>
              <AnchorLink className="nav-link ml-3 my-1" to="#item-3-2">
                Item 3-2
              </AnchorLink>
            </nav>
          </nav>
        </nav>

        <div
          className="scroll-content"
          data-spy="scroll"
          data-target="#navbar-example3"
          data-offset="0"
        >
          <h1 id="item-1">What is xlCurves</h1>
          <p>
            xlCurves is a collection of area under the curve functions. xlCurves
            functions is for computing non-compartmental, model independent,
            parameters to the area under the curve. xlCurves is Microsoft Excel
            add-in. It adds 100+ functions to Excel’s Insert Function wizard, in
            7 categories:
          </p>
          <h3 id="item-1-1">Computational method independent category</h3>
          <ul>
            <li>classic</li>
          </ul>
          <h3 id="item-1-2">Computational method dependent categories</h3>
          <ul>
            <li>classic</li>
            <li>trapezoidal (LT)</li>
            <li>log-linear trapezoidal (LN)</li>
            <li>natural cubic spline</li>
            <li>(CS.N) third degree lagrange (LG.3)</li>
            <li>fritsch-butland (FB) yeh-small (YS)</li>
          </ul>
          <p>
            (LN, LN, CS.3, LG.3, FB, and YS categories have same set of
            functions)
          </p>
          <h4 id="item-2">Item 2</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac
            purus non risus condimentum porttitor vitae vitae metus. Nulla
            facilisi. Nullam purus magna, finibus nec laoreet ac, suscipit quis
            dolor. Sed nec volutpat libero, vitae accumsan arcu. In feugiat,
            metus varius dignissim molestie, tortor ipsum malesuada neque, a
            porttitor ligula lorem ut arcu. Cras sapien metus, malesuada vitae
            facilisis nec, sollicitudin ut ex. Etiam vel eros rhoncus,
            consectetur tellus a, facilisis sem.
          </p>
          <h4 id="item-3">Item 3</h4>
          <p>
            Fusce risus magna, pellentesque sed massa et, rhoncus tincidunt
            felis. Donec maximus sollicitudin imperdiet. Pellentesque venenatis
            neque et sapien tristique, nec consectetur ligula scelerisque.
            Praesent risus leo, bibendum et orci ac, pulvinar ultrices velit.
            Praesent non volutpat erat. Donec blandit vel massa sed consectetur.
            Phasellus euismod ex sed porttitor dapibus. Suspendisse dignissim
            orci cursus rhoncus lacinia. Donec at nibh et mauris maximus
            molestie vitae ut nibh.
          </p>
          <h5 id="item-3-1">Item 3-1</h5>
          <p>
            Pellentesque pulvinar faucibus metus, eu semper mi ultricies sit
            amet. Fusce bibendum, sapien ut euismod elementum, ex nulla
            tincidunt erat, vitae feugiat sapien dui ac nibh. Nullam auctor ac
            nunc a vestibulum. Quisque pharetra arcu at turpis vehicula rhoncus.
            Nulla facilisi. Nunc quis nisl cursus, sagittis neque eu, congue
            sapien. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Vestibulum turpis felis,
            condimentum sit amet diam id, egestas convallis nulla. Aliquam
            egestas metus euismod ornare vehicula. Integer rutrum tincidunt
            ligula, vitae fringilla urna imperdiet a. Integer dignissim nisl
            suscipit ex scelerisque vestibulum. Maecenas sed arcu eu magna
            posuere varius vitae eu est.
          </p>
          <h5 id="item-3-2">Item 3-2</h5>
          <p>...</p>
        </div>
      </div>
    );
  }
}

export default About;

import React from "react";

class Functions extends React.Component {
  render() {
    let links = [
      "Area under the curve",
      "Pharmacokinetics",
      "Pharmacodynamics",
      "Pharmacometrics",
      "Non-compartmental",
      "Superposition",
      "HALFLIFE",
      "YMAX",
      "XMAX",
      "LAMDA",
      "AUC",
      "AUCINF",
      "AUMC",
      "AUMCINF",
      "YVALUE",
      "YVALINF"
    ];
    return (
      <div className="functions">
        <div className="marquee">
          <div className="marquee--inner">
            <div className="repeat">{linksToDiv(links.slice(0, 16))}</div>
            <div className="repeat">{linksToDiv(links.slice(0, 16))}</div>
          </div>
        </div>
      </div>
    );
  }
}
const linksToDiv = links => {
  let items = links.map((text, i) => {
    return (
      <div className="item" key={`orb-${i}`}>
        <a>{text}</a>
      </div>
    );
  });

  return items;
};

export default Functions;

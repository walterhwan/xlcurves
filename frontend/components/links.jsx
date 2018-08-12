import React from "react";

class Links extends React.Component {
  render() {
    let links = [
      "Area under the curve",
      "Pharmacokinetics",
      "Pharmacodynamics",
      "Pharmacometrics",
      "No-compartmental Analysis",
      "Superposition",
      "YMAX",
      "XMAX",
      "LAMDA",
      "HALFLIFE",
      "AUC",
      "AUCINF",
      "AUMC",
      "AUMCINF",
      "YVALUE",
      "YVALING"
    ];
    return (
      <section className="links">
        <div className="links-container">{linksToItem(links, 4)}</div>
      </section>
    );
  }
}

const linksToItem = (links, nCol) => {
  let items = links.map((text, i) => {
    let col = (i % nCol) + 1;
    let row = Math.floor(i / nCol) + 1;
    let style = { msGridColumn: col, msGridRow: row };
    return (
      <div className="item" style={style} key={`item-${col}-${row}`}>
        <a href="#">
          <u>{text}</u>
        </a>
      </div>
    );
  });

  return items;
};

const textToItem = (text, i) => {
  let col = Math.floor(i / 4) + 1;
  let row = (i % 4) + 1;
  let style = { msGridColumn: col, msGridRow: row };
  return (
    <div className="item" style={style} key={`item-${col}-${row}`}>
      <a href="#">
        <u>{text}</u>
      </a>
    </div>
  );
};

export default Links;

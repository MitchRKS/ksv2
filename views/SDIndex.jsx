const React = require("react");

function SDIndex({ data }) {
  return (
    <html>
      <head>
        <title>KS Data</title>
        <link rel="stylesheet" href={"/styles.css"} />
      </head>
      <div className="container">
        <h1>Senate District Index</h1>
        <button>
          <a href="/counties">Switch View</a>
        </button>
        <div className="card-container">
          {data.map((item) => (
            <div key={item._id} className="card">
              <h2>
                <a href={`/senatedistricts/${item._id}`}>{item._id}</a>
              </h2>
              <ul>
                <li>
                  <strong>Incumbent:</strong> {item.Incumbent}
                </li>
                <li>
                  <strong>Cash on Hand:</strong> ${item.COH}
                </li>
                <li>
                  <strong>MOD:</strong> {item.MOD}
                </li>
                <li>
                  <strong>CON:</strong> {item.CON}
                </li>
                <li>
                  <strong>MAGA:</strong> {item.MAGA}
                </li>
                <li>
                  <strong>2024 Vote Target:</strong> {item.Target}
                </li>
                <li>
                  <strong>Registered Voters:</strong> {item.RV}
                </li>
                <li>
                  <strong>Registered Republicans:</strong> {item.GOP}
                </li>
                <li>
                  <strong>Registered Independents:</strong> {item.IND}
                </li>
                <li>
                  <strong>Registered Democrats:</strong> {item.DEM}
                </li>
                <li>
                  <strong>Abortion Amendment "Yes":</strong> {item.VTBY}
                </li>
                <li>
                  <strong>Abortion Amendment "NO":</strong> {item.VTBN}
                </li>
                <li>
                  <strong>2022 Primary Turnout:</strong> {item.PTO22}
                </li>
                <li>
                  <strong>2022 Primary Margin</strong> {item.Margin22}
                </li>
                <li>
                  <strong>2020 Primary Turnout:</strong> {item.PTO20}
                </li>
                <li>
                  <strong>2020 Primary Margin</strong> {item.Margin20}
                </li>
                <li>
                  <strong>2016 Primary Turnout:</strong> {item.PTO16}
                </li>
                <li>
                  <strong>2016 Primary Margin</strong> {item.Margin16}
                </li>
                <li>
                  <strong>2012 Primary Turnout:</strong> {item.PTO12}
                </li>
                <li>
                  <strong>2012 Primary Margin</strong> {item.Margin12}
                </li>
                {/* Add more fields as needed */}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </html>
  );
}

module.exports = SDIndex;

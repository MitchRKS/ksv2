// Show.jsx
const React = require("react");

function SDShow({ data }) {
  return (
    <html>
      <head>
        <title>KS Data</title>
        <link rel="stylesheet" href={"/styles.css"} />
      </head>
      <div className="container">
        <h1>Kansans First InfoBase</h1>
        <button>
          <a href="/senatedistricts">Back to Index</a>
        </button>
        <div className="card-container">
          <div className="card">
            <h2>{data._id}</h2>
            <ul>
              <li>
                <strong>Incumbent:</strong> {data.Incumbent}
              </li>
              <li>
                <strong>Cash on Hand:</strong> {data.COH}
              </li>
              <li>
                <strong>MOD:</strong> {data.MOD}
              </li>
              <li>
                <strong>CON:</strong> {data.CON}
              </li>
              <li>
                <strong>MAGA:</strong> {data.MAGA}
              </li>
              <li>
                <strong>2024 Vote Target:</strong> {data.Target}
              </li>
              <li>
                <strong>Registered Voters:</strong> {data.RV}
              </li>
              <li>
                <strong>Registered Republicans:</strong> {data.GOP}
              </li>
              <li>
                <strong>Registered Independents:</strong> {data.IND}
              </li>
              <li>
                <strong>Registered Democrats:</strong> {data.DEM}
              </li>
              <li>
                <strong>Value Them Both "Yes":</strong> {data.VTBY}
              </li>
              <li>
                <strong>Value Them Both "NO":</strong> {data.VTBN}
              </li>
              <li>
                <strong>2022 Primary Turnout:</strong> {data.PTO22}
              </li>
              <li>
                <strong>2022 Primary Margin</strong> {data.Margin22}
              </li>
              <li>
                <strong>2020 Primary Turnout:</strong> {data.PTO20}
              </li>
              <li>
                <strong>2020 Primary Margin</strong> {data.Margin20}
              </li>
              <li>
                <strong>2016 Primary Turnout:</strong> {data.PTO16}
              </li>
              <li>
                <strong>2016 Primary Margin</strong> {data.Margin16}
              </li>
              <li>
                <strong>2012 Primary Turnout:</strong> {data.PTO12}
              </li>
              <li>
                <strong>2012 Primary Margin</strong> {data.Margin12}
              </li>
              {/* Add more fields as needed */}
            </ul>
          </div>
        </div>
      </div>
    </html>
  );
}

module.exports = SDShow;

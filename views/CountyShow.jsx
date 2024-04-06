// Show.jsx
const React = require("react");

function CountyShow({ data }) {
  return (
    <html>
      <head>
        <title>KS Data</title>
        <link rel="stylesheet" href={"/styles.css"} />
      </head>
      <div className="container">
        <h1>Kansans First InfoBase</h1>
        <button>
          <a href="/counties">Back to Index</a>
        </button>
        <div className="card-container">
          <div className="card">
            <h2>{data._id}</h2>
            <ul>
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
                <strong>Registered Voters:</strong> {data.POP}
              </li>
              <li>
                <strong>Value Them Both:</strong> {data.VTBY}
              </li>
              {/* Add more fields as needed */}
            </ul>
          </div>
        </div>
      </div>
    </html>
  );
}

module.exports = CountyShow;

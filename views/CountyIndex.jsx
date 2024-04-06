// Index.jsx
const React = require("react");

function CountyIndex({ data }) {
  return (
    <html>
      <head>
        <title>KS Data</title>
        <link rel="stylesheet" href={"/styles.css"} />
      </head>
      <div className="container">
        <h1>KS County Index</h1>
        <button>
          <a href="/senatedistricts">Switch View</a>
        </button>
        <div className="card-container">
          {data.map((item) => (
            <div key={item._id} className="card">
              <h2>
                <a href={`/counties/${item._id}`}>{item._id}</a>
              </h2>
              <ul>
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
                  <strong>Registered Voters:</strong> {item.POP}
                </li>
                <li>
                  <strong>Value Them Both:</strong> {item.VTBY}
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

module.exports = CountyIndex;

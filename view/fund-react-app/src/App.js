import './App.css';
import ViewDashboard from './view_dashboard/ViewDashboard';

function App() {
  let pageViewTitle = "Funds Dashboard"

  return (
    <div className="App-content-container">
      <h1>{pageViewTitle}</h1>
      <ViewDashboard />
      {/* <h2>$ {amountLeftToInvest} <span style={{fontSize: "16px", fontWeight: 400}}>left to invest</span></h2>
      <input type="text"></input>
      <button>Add Funds</button>
      <p>Sort by</p>
      <select>
        <option value="name">Investment name</option>
        <option value="name">Amount invested</option>
      </select>
      <table className="App-table">
          <thead className="App-table-headers">
            <tr>
              <th>Investment name</th>
              <th>Amount invested</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fund 1</td>
              <td>$1000</td>
            </tr>
            <tr>
              <td>Fund 2</td>
              <td>$2000</td>
            </tr>
             <tr>
              <td>Fund 3</td>
              <td>$10000</td>
            </tr>
          </tbody>
      </table> */}
    </div>
  );
}

export default App;

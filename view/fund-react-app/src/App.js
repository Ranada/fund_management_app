import './App.css';

function App() {
  let pageViewTitle = "Funds Dashboard"
  let amountLeftToInvest = 10000000000

  return (
    <div className="App">
      <h1>{pageViewTitle}</h1>
      <h2>$ {amountLeftToInvest} left to invest</h2>
      <input type="text"></input>
      <button>Add Funds</button>
      <p>Sort by</p>
      <select>
        <option value="name">Investment name</option>
        <option value="name">Amount invested</option>
      </select>
      <table>
          <thead>
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
          </tbody>
      </table>
    </div>
  );
}

export default App;

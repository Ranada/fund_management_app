import './App.css';
import ViewDashboard from './view_dashboard/ViewDashboard';

function App() {
  let pageViewTitle = "Funds Dashboard"

  return (
    <div className="App-content-container">
      <h1>{pageViewTitle}</h1>
      <ViewDashboard />
      
    </div>
  );
}

export default App;

import { Elements } from "./Elements";
import { ConnectLine } from "./connect-line/Connector";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Connect Divs</h1>
      </header>
      <Elements />
      <ConnectLine
        from={[
          { id: "element-1", text: "2" },
          { id: "element-2", text: "5" },
        ]}
        to={[{ id: "element-3" }, { id: "element-4" }]}
        parentSelector=".tasks-container"
      />
    </div>
  );
}

export default App;

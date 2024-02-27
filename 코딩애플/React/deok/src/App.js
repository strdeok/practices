import logo from "./logo.svg";
import "./App.css";

function App() {
  let post = "일산 우동 맛집";

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Deok's Blog</h4>
      </div>
      <h4 style={{color:'red'}}>{post}</h4>
    </div>
  );
}

export default App;

import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      {/* <h1>Welcome react</h1>
      <p>Lorem</p> */}
      <Navbar />
      <Header />
      <Main />
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <main>
      <Card />
    </main>
  );
}

function Card() {
  return (
    <div className="card">
      <img src={require("./images/image-qr-code.png")} alt="qr code" />
      <h1>Improve your front-end skills by building projects</h1>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default App;

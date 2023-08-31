import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1>Front End Bootcamp</h1>
      </header>
      <main>
        <p>
          Welcome to the <strong>Front End bootcamp</strong>
        </p>
        <p>
          I am doing a <em>task 3</em> currently.
        </p>
        <br />
        <div>
          <p>This task includes following things :</p>
          <ul>
            <li>Install react application using vite</li>
            <li>
              Make some changes to it by changing some code in src/App.jsx
            </li>
            <li>
              Create a <a href="https://github.com/">GitHub</a> Repository.
            </li>
            <li>Push the code to Github using Git</li>
          </ul>
        </div>
      </main>
      <footer>Thank you for visitng this webpage</footer>
    </>
  );
}

export default App;

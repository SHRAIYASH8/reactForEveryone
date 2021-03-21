import React from "react";
import "./App.css";
import logo from "./logo.jpg";
function App() {
  return (
    <>
      <div class="landingContainer">
        <header class="header">
          <section class="header-content">
            <section class="header-logo">
              <img src={logo} />
            </section>
            <section class="header-legend">
              <h1 class="header-subtitle">
                Just Replace imported jsx file in index.js and play around with
                react hooks.
              </h1>
              <h2 class="header-subtitle">Happy coding!!</h2>
            </section>
          </section>
        </header>
        <div class="centered">
          <h1 class="title">React Hooks</h1>
        </div>

        <div class="glassContainer">
          <div class="cover">
            <footer class="footer">
              <section class="footer-content">
                <section class="footer-legend">
                  <div class="footer-copy">#useState</div>
                  <div class="footer-copy">#useEffect</div>
                  <div class="footer-copy">#useMemo</div>
                  <div class="footer-copy">#useRef</div>
                  <div class="footer-copy">#useContext</div>
                  <div class="footer-copy">#useReducer</div>
                  <div class="footer-copy">#useCallback</div>
                </section>
              </section>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

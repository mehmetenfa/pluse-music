import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Layout } from "./router";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

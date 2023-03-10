import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./router";

function App() {
  return (
    <>
      <Router>
        <Routes
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        ></Routes>
      </Router>
    </>
  );
}

export default App;

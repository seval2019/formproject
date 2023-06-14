import "./App.css";
import { Route, Routes } from "react-router-dom";
import GeneralForm from "./component/GeneralForm";
import PortalForm from "./component/PortalForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<GeneralForm />} />
        <Route path="/portal" exact element={<PortalForm />} />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import HomePage from "./Layout/HomePage";
import Layout from "./Layout/Layout";
import Profile from "./Components/Profile";
import HelpCenter from "./Components/HelpCenter/HelpCenter";
import DomesticFlight from "./Layout/DomesticFlight";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/help-center" element={<HelpCenter />}/>
          <Route path="/iranout" element={<DomesticFlight />}/>  
        </Routes>
      </Layout>
    </>
  );
}

export default App;

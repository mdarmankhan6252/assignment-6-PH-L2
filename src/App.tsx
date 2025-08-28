import { Outlet } from "react-router";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";


const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
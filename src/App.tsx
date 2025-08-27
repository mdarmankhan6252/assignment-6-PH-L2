import { Outlet } from "react-router";
import Navbar from "./shared/Navbar";


const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      
    </div>
  );
};

export default App;
import './App.css';
import DashboardOverview from './Components/Views/DashboardOverview/DashboardOverview';
import Navbar from './Components/Views/Navigation/Navbar';
import Sidemenu from './Components/Views/SideMenu/Sidemenu';

function App() {
  return (
    <div className="App">
      <Navbar />
    <div className="layout">
      <Sidemenu />
      <DashboardOverview />
    </div>
    </div>
  );
}

export default App;

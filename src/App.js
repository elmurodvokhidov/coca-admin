import { Route, Routes } from 'react-router-dom';
import './Main.css';
import Dashboard from './admin_page/Dashboard';
import Employees from './admin_page/Employees';
import OrdersPanel from './admin_page/OrdersPanel';
import AdminNavbar from './utils/AdminNavbar';

function App() {
  return (
    <div className="App">
      <AdminNavbar />

      {
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/employees' element={<Employees />} />
          <Route path='/panel' element={<OrdersPanel />} />
        </Routes>
      }
    </div>
  );
}

export default App;
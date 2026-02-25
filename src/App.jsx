import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Truck, 
  Package, 
  DollarSign,
  LogOut 
} from 'lucide-react';
import Dashboard from './components/Dashboard';
import ComerciantesList from './components/ComerciantesList';
import EntregadoresList from './components/EntregadoresList';
import EntregasList from './components/EntregasList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Mock login - depois implementa real
    localStorage.setItem('admin_token', 'mock_token');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="login-container" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #0A2540 0%, #1976D2 100%)'
      }}>
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '16px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
          textAlign: 'center'
        }}>
          <h1 style={{ marginBottom: '10px', color: '#0A2540' }}>BONEX</h1>
          <p style={{ marginBottom: '30px', color: '#666' }}>Painel Administrativo</p>
          <button 
            onClick={handleLogin}
            style={{
              background: '#0A2540',
              color: 'white',
              border: 'none',
              padding: '15px 40px',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            Entrar como Admin
          </button>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="admin-container">
        <aside className="sidebar">
          <h2>BONEX</h2>
          <nav>
            <ul>
              <li>
                <NavLink to="/" end>
                  <LayoutDashboard size={20} style={{ marginRight: '10px' }} />
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/comerciantes">
                  <Users size={20} style={{ marginRight: '10px' }} />
                  Comerciantes
                </NavLink>
              </li>
              <li>
                <NavLink to="/entregadores">
                  <Truck size={20} style={{ marginRight: '10px' }} />
                  Entregadores
                </NavLink>
              </li>
              <li>
                <NavLink to="/entregas">
                  <Package size={20} style={{ marginRight: '10px' }} />
                  Entregas
                </NavLink>
              </li>
              <li>
                <NavLink to="/financeiro">
                  <DollarSign size={20} style={{ marginRight: '10px' }} />
                  Financeiro
                </NavLink>
              </li>
              <li style={{ marginTop: 'auto' }}>
                <a href="#" onClick={handleLogout} style={{ color: '#ff6b6b' }}>
                  <LogOut size={20} style={{ marginRight: '10px' }} />
                  Sair
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/comerciantes" element={<ComerciantesList />} />
            <Route path="/entregadores" element={<EntregadoresList />} />
            <Route path="/entregas" element={<EntregasList />} />
            <Route path="/financeiro" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
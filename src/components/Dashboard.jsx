import React, { useState, useEffect } from 'react';
import { getTiposBag } from '../services/api';

function Dashboard() {
  const [stats, setStats] = useState({
    totalEntregas: 0,
    entregasHoje: 0,
    faturamentoDia: 0,
    comissaoPlataforma: 0,
  });
  const [tiposBag, setTiposBag] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tipos = await getTiposBag();
        setTiposBag(tipos);
        
        // Mock data - depois pega da API real
        setStats({
          totalEntregas: 156,
          entregasHoje: 12,
          faturamentoDia: 485.50,
          comissaoPlataforma: 72.82, // 15% de 485.50
        });
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 style={{ marginBottom: '30px' }}>Dashboard</h1>
      
      <div className="dashboard-grid">
        <div className="card">
          <h3>Total de Entregas</h3>
          <div className="value">{stats.totalEntregas}</div>
        </div>
        
        <div className="card">
          <h3>Entregas Hoje</h3>
          <div className="value">{stats.entregasHoje}</div>
        </div>
        
        <div className="card">
          <h3>Faturamento do Dia</h3>
          <div className="value">R$ {stats.faturamentoDia.toFixed(2)}</div>
        </div>
        
        <div className="card">
          <h3>Comissão Plataforma (15%)</h3>
          <div className="value" style={{ color: '#2ecc71' }}>
            R$ {stats.comissaoPlataforma.toFixed(2)}
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: '20px' }}>
        <h3>Tipos de Bag Disponíveis</h3>
        <div style={{ marginTop: '20px' }}>
          {tiposBag.map((tipo) => (
            <div key={tipo.id} style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '15px',
              background: '#f8f9fa',
              borderRadius: '8px',
              marginBottom: '10px'
            }}>
              <div>
                <strong>{tipo.nome}</strong>
                <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '14px' }}>
                  {tipo.descricao}
                </p>
              </div>
              <div style={{ fontWeight: 'bold', color: '#0A2540' }}>
                R$ {tipo.preco_base.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
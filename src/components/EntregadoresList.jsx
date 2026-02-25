import React from 'react';

function EntregadoresList() {
  const entregadores = [
    { id: 1, nome: 'João Silva', telefone: '(48) 99999-1111', status: 'online', entregasHoje: 5, avaliacao: 4.8 },
    { id: 2, nome: 'Maria Santos', telefone: '(48) 99999-2222', status: 'ocupado', entregasHoje: 3, avaliacao: 4.9 },
    { id: 3, nome: 'Pedro Costa', telefone: '(48) 99999-3333', status: 'offline', entregasHoje: 0, avaliacao: 4.7 },
  ];

  const getStatusStyle = (status) => {
    const styles = {
      online: { background: '#d4edda', color: '#155724' },
      ocupado: { background: '#fff3cd', color: '#856404' },
      offline: { background: '#f8d7da', color: '#721c24' },
    };
    return styles[status] || {};
  };

  return (
    <div>
      <h1 style={{ marginBottom: '30px' }}>Entregadores</h1>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Status</th>
              <th>Entregas Hoje</th>
              <th>Avaliação</th>
            </tr>
          </thead>
          <tbody>
            {entregadores.map((e) => (
              <tr key={e.id}>
                <td><strong>{e.nome}</strong></td>
                <td>{e.telefone}</td>
                <td>
                  <span className="status" style={getStatusStyle(e.status)}>
                    {e.status}
                  </span>
                </td>
                <td>{e.entregasHoje}</td>
                <td>⭐ {e.avaliacao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EntregadoresList;
import React from 'react';

function ComerciantesList() {
  const comerciantes = [
    { id: 1, nome: 'Restaurante Bom Sabor', email: 'bomsabor@email.com', cnpj: '98.765.432/0001-98', status: 'ativo', entregas: 45 },
    { id: 2, nome: 'Pizzaria Napoli', email: 'napoli@email.com', cnpj: '12.345.678/0001-95', status: 'ativo', entregas: 32 },
    { id: 3, nome: 'Sushi Bar', email: 'sushi@email.com', cnpj: '11.222.333/0001-44', status: 'ativo', entregas: 28 },
  ];

  return (
    <div>
      <h1 style={{ marginBottom: '30px' }}>Comerciantes</h1>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>CNPJ</th>
              <th>Status</th>
              <th>Entregas</th>
            </tr>
          </thead>
          <tbody>
            {comerciantes.map((c) => (
              <tr key={c.id}>
                <td><strong>{c.nome}</strong></td>
                <td>{c.email}</td>
                <td>{c.cnpj}</td>
                <td>
                  <span className="status entregue" style={{ background: '#d4edda', color: '#155724' }}>
                    {c.status}
                  </span>
                </td>
                <td>{c.entregas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComerciantesList;
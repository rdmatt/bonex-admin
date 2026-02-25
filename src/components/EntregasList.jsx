import React, { useState, useEffect } from 'react';

function EntregasList() {
  const [entregas, setEntregas] = useState([]);
  const [filtro, setFiltro] = useState('todos');

  useEffect(() => {
    // Mock data - depois pega da API real
    setEntregas([
      {
        id: '1',
        comerciante: 'Restaurante Bom Sabor',
        destino: 'Rua das Palmeiras, 100',
        tipo_bag: 'bag_padrao',
        valor_entrega: 15.50,
        status: 'entregue',
        data: '2024-02-24',
      },
      {
        id: '2',
        comerciante: 'Pizzaria Napoli',
        destino: 'Av Beira Mar, 500',
        tipo_bag: 'bag_grande',
        valor_entrega: 22.00,
        status: 'em_rota',
        data: '2024-02-24',
      },
      {
        id: '3',
        comerciante: 'Sushi Bar',
        destino: 'Rua do Sol, 45',
        tipo_bag: 'bag_grande',
        valor_entrega: 20.00,
        status: 'pendente',
        data: '2024-02-24',
      },
    ]);
  }, []);

  const entregasFiltradas = filtro === 'todos' 
    ? entregas 
    : entregas.filter(e => e.status === filtro);

  const getStatusClass = (status) => {
    return `status ${status}`;
  };

  const getStatusLabel = (status) => {
    const labels = {
      pendente: 'Pendente',
      aceita: 'Aceita',
      em_rota: 'Em Rota',
      entregue: 'Entregue',
      cancelada: 'Cancelada',
    };
    return labels[status] || status;
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>Entregas</h1>
        <select 
          value={filtro} 
          onChange={(e) => setFiltro(e.target.value)}
          style={{
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #ddd',
            fontSize: '14px'
          }}
        >
          <option value="todos">Todos</option>
          <option value="pendente">Pendente</option>
          <option value="aceita">Aceita</option>
          <option value="em_rota">Em Rota</option>
          <option value="entregue">Entregue</option>
          <option value="cancelada">Cancelada</option>
        </select>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Comerciante</th>
              <th>Destino</th>
              <th>Tipo</th>
              <th>Valor</th>
              <th>Status</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {entregasFiltradas.map((entrega) => (
              <tr key={entrega.id}>
                <td>#{entrega.id}</td>
                <td>{entrega.comerciante}</td>
                <td>{entrega.destino}</td>
                <td>{entrega.tipo_bag === 'bag_padrao' ? 'Padrão' : 'Grande'}</td>
                <td>R$ {entrega.valor_entrega.toFixed(2)}</td>
                <td>
                  <span className={getStatusClass(entrega.status)}>
                    {getStatusLabel(entrega.status)}
                  </span>
                </td>
                <td>{entrega.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EntregasList;
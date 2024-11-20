import React, { useState, useEffect } from 'react';

// URL de la API
const API_URL = 'http://localhost';

function ClienteDashboard() {
  // Estado para almacenar los clientes, carga, error y filtros
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    // filtros por cliente
    edad: '',
    genero: '',
    nivel_de_satisfaccion: '',
    activo: '' 
  });

  // Función para obtener los clientes desde la API
  const fetchClientes = async () => {
    try {
      setLoading(true);
      let url = `${API_URL}/api/clientes/?`;
      // Construcción de la URL con los filtros aplicados
      Object.keys(filters).forEach(key => {
        if (filters[key]) {
          url += `${key}=${filters[key]}&`;
        }
      });
      
      const response = await fetch(url);
      if (!response.ok) throw new Error('Error al cargar los datos');
      const data = await response.json();
      setClientes(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Efecto para cargar los clientes cuando cambian los filtros
  useEffect(() => {
    fetchClientes();
  }, [filters]);

  // Manejo de cambios en los filtros
  const handleFilterChange = (name, value) => {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Manejo de errores
  if (error) {
    return (
      <div className="p-4 text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Dashboard de Clientes</h1>
        
        {/* Filtros para buscar clientes */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <input
            type="number"
            placeholder="Filtrar por edad"
            onChange={(e) => handleFilterChange('edad', e.target.value)}
            value={filters.edad}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Filtro por género */}
          <select
            value={filters.genero}
            onChange={(e) => handleFilterChange('genero', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Todos los géneros</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Desconocido">Desconocido</option>
          </select>

          {/* Filtro por estado de actividad */}
          <select
            value={filters.activo}
            onChange={(e) => handleFilterChange('activo', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Todos los estados</option>
            <option value="Si">Activos</option>
            <option value="No">Inactivos</option>
          </select>

          {/* Filtro por nivel de satisfacción */}
          <select
            value={filters.nivel_de_satisfaccion}
            onChange={(e) => handleFilterChange('nivel_de_satisfaccion', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Todos los niveles</option>
            <option value="1">Nivel 1</option>
            <option value="2">Nivel 2</option>
            <option value="3">Nivel 3</option>
            <option value="4">Nivel 4</option>
            <option value="5">Nivel 5</option>
          </select>
        </div>

        {/* Estadísticas generales de la base de datos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-blue-800">Total Clientes</h3>
            <p className="text-2xl font-bold text-blue-900">{clientes.length}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-green-800">Clientes Activos</h3>
            <p className="text-2xl font-bold text-green-900">
              {clientes.filter(c => c.activo === 'Si').length}
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-red-800">Clientes Inactivos</h3>
            <p className="text-2xl font-bold text-red-900">
              {clientes.filter(c => c.activo === 'No').length}
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-purple-800">Satisfacción Promedio</h3>
            <p className="text-2xl font-bold text-purple-900">
              {clientes.length > 0 
                ? (clientes.reduce((acc, c) => acc + parseInt(c.nivel_de_satisfaccion), 0) / clientes.length).toFixed(1)
                : '0'}
            </p>
          </div>
        </div>

        {/* Tabla de clientes */}
        <div className="overflow-x-auto bg-white rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Edad</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Género</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Saldo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Satisfacción</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                    Cargando...
                  </td>
                </tr>
              ) : clientes.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                    No se encontraron clientes
                  </td>
                </tr>
              ) : (
                clientes.map((cliente) => (
                  <tr key={cliente.cliente_id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cliente.cliente_id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cliente.edad}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cliente.genero}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${cliente.saldo}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cliente.activo}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cliente.nivel_de_satisfaccion}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ClienteDashboard;
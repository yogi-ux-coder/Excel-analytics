import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
  LineChart, Line,
  PieChart, Pie, Cell
} from 'recharts';

const HomeCharts = () => {
  const barData = [
    { name: 'Marketing', value: 60 },
    { name: 'Sales', value: 80 },
    { name: 'Development', value: 65 },
    { name: 'Support', value: 45 },
  ];

  const lineData = [
    { name: 'Jan', value: 40 },
    { name: 'Feb', value: 55 },
    { name: 'Mar', value: 60 },
    { name: 'Apr', value: 42 },
  ];

  const pieData = [
    { name: 'A', value: 30 },
    { name: 'B', value: 45 },
    { name: 'C', value: 25 },
  ];

  const pieColors = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>📊 Example Visualizations</h2>

      {/* Bar Chart Block */}
      <div style={{ marginBottom: '3rem' }}>
        <h4><strong>• Bar :</strong> Highlights outliers in time series.</h4>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <BarChart width={500} height={300} data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>

      {/* Line Chart Block */}
      <div style={{ marginBottom: '3rem' }}>
        <h4> <strong>• Trend :</strong> Highlights steady trends over time.</h4>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <LineChart width={500} height={350} data={lineData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>

      {/* Pie Chart Block */}
      <div style={{ marginBottom: '2rem' }}>
        <h4><strong>• Pie :</strong> Finds dominant factors.</h4>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <PieChart width={900} height={350}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default HomeCharts;

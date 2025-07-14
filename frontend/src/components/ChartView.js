import React, { useState, useRef } from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  AreaChart, Area, ScatterChart, Scatter,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ChartView = ({ data }) => {
  const [chartType, setChartType] = useState('bar');
  const chartRef = useRef();

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384', '#36A2EB'];
  const keys = Object.keys(data[0] || {});
  const xKey = keys[0];
  const yKey1 = keys[1];
  const yKey2 = keys[2]; // Optional second key

  if (!xKey || !yKey1) {
    return (
      <p className="text-center text-red-500 text-sm italic mt-4">
        No data to display. Please upload a valid Excel file.
      </p>
    );
  }

  const exportAsImage = async () => {
    const canvas = await html2canvas(chartRef.current);
    const imgData = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = imgData;
    link.download = 'chart.png';
    link.click();
  };

  const exportAsPDF = async () => {
    const canvas = await html2canvas(chartRef.current);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 10, 10, 190, 100);
    pdf.save('chart.pdf');
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-center text-blue-900">
        Explore Your Uploaded Data
      </h2>

      {/* Chart Type Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {['bar', 'line', 'pie', 'stacked', 'area', 'scatter'].map((type) => (
          <button
            key={type}
            onClick={() => setChartType(type)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              chartType === type
                ? 'bg-blue-700 text-white'
                : 'bg-gray-200 hover:bg-blue-100 text-gray-800'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Chart Container */}
      <div ref={chartRef} className="bg-white rounded-lg shadow-md p-4">
        {chartType === 'bar' && (
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={xKey} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey={yKey1} fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        )}

        {chartType === 'line' && (
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={xKey} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey={yKey1} stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        )}

        {chartType === 'pie' && (
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={data}
                dataKey={yKey1}
                nameKey={xKey}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        )}

        {chartType === 'stacked' && yKey2 && (
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={xKey} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey={yKey1} stackId="a" fill="#8884d8" />
              <Bar dataKey={yKey2} stackId="a" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        )}

        {chartType === 'area' && (
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={xKey} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey={yKey1} stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        )}

        {chartType === 'scatter' && yKey2 && (
          <ResponsiveContainer width="100%" height={350}>
            <ScatterChart>
              <CartesianGrid />
              <XAxis dataKey={xKey} name={xKey} />
              <YAxis dataKey={yKey1} name={yKey1} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Legend />
              <Scatter name="Scatter" data={data} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        )}
        <br/> <br/>
        <div className="flex justify-center gap-4 mb-4">
          <button onClick={exportAsImage} className="bg-green-500 text-white px-4 py-2 rounded">
            Download PNG
          </button>
          <button onClick={exportAsPDF} className="bg-blue-500 text-white px-4 py-2 rounded">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChartView;

import React from 'react';
import './Home.css';
import HomeCharts from '../components/HomeCharts'; // ✅ Add this

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <section className="text-center py-8 bg-white rounded-lg shadow mt-8 max-w-3xl mx-auto" >
        <h1 className="text-3xl font-bold mb-4 text-center">Analyze your Data here!</h1>
        <p>
          To better represent how clear makes data analysis simpler, faster and more intuitive...
        </p>
        <p>
          Analyze Data in Excel empowers you to understand your data through natural language queries…
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mt-6 mb-2">We're always improving Analyze Data</h2>
        <p className="text-gray-600 leading-relaxed">
          Even if you don’t have any of the above conditions, we may not find a recommendation.
          We're continually working to expand the analysis types that the service supports.
        </p>
      </section>

      {/* ✅ Static charts showcase */}
      <HomeCharts />
      <section className="text-center py-8">
        <h3>Explore more resources</h3>
        <ul className="list-none p-0 space-y-2">
          <li><a  className="text-blue-600 hover:underline transition" href="https://support.microsoft.com/excel" target="_blank" rel="noreferrer">Microsoft Excel Help Center</a></li>
          <li><a  className="text-blue-600 hover:underline transition" href="https://www.w3schools.com/js/js_graphics.asp" target="_blank" rel="noreferrer">W3Schools on JS Charts</a></li>
          <li><a  className="text-blue-600 hover:underline transition" href="https://d3js.org/" target="_blank" rel="noreferrer">D3.js Visualization Library</a></li>
        </ul>
      </section>
    </div>
    
  );
};

export default Home;

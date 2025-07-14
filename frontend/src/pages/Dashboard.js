import React, { useState } from 'react';
import FileUpload from '../components/FileUpload';
import ChartView from '../components/ChartView';
import ExcelTable from '../components/ExcelTable';

const Dashboard = () => {
  const [excelData, setExcelData] = useState([]);
  const [showChart, setShowChart] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-8 px-4">
      <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-md text-center">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">Excel Analytics Dashboard</h1>
        <p className="text-gray-600 mb-8">
          Upload your Excel file to see fresh visualizations and tables.
        </p>

        {/* Upload Section */}
        <div className="mb-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Upload Excel File</h2>
          <FileUpload setExcelData={setExcelData} />
          {excelData.length === 0 && (
            <p className="text-sm text-gray-500 mt-4">
              No data uploaded yet. Please upload an Excel file to continue.
            </p>
          )}
        </div>

        {/* Conditional rendering for data display */}
        {Array.isArray(excelData) && excelData.length > 0 && (
          <>
            {/* Chart Section */}
            <div className="mb-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Chart Visualization</h2>
              {!showChart ? (
                <button
                  onClick={() => setShowChart(true)}
                  className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
                >
                  Show Chart
                </button>
              ) : (
                <>
                  <button
                    onClick={() => setShowChart(false)}
                    className="px-4 py-2 mb-4 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Hide Chart
                  </button>
                  <ChartView data={excelData} />
                </>
              )}
            </div>

            {/* Table Section */}
            <div className="mb-4 bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Excel Data Table</h2>
              <ExcelTable data={excelData} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
  
export default Dashboard;

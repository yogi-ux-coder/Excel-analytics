import React from 'react';

const ExcelTable = ({ data }) => {
  if (!data || data.length === 0)
    return (
      <p className="text-center text-red-500 text-sm italic mt-4">
        No data to display.
      </p>
    );

  const headers = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full table-auto border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-blue-100 text-blue-900">
          <tr>
            {headers.map((key) => (
              <th key={key} className="px-4 py-2 text-left border-b border-gray-300 font-semibold">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr 
              key={i}
              className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50 hover:bg-gray-100'}
            >
              {headers.map((key) => (
                <td key={`${i}-${key}`} className="px-4 py-2 border-b border-gray-200">
                  {row[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExcelTable;

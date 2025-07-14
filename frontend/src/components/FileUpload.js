import React, { useState } from 'react';

const FileUpload = ({ setExcelData }) => {
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e) => {
    setLoading(true);
    const file = e.target.files[0];
    if (!file.name.endsWith('.xlsx') && !file.name.endsWith('.xls')) {
      alert("Please upload a valid Excel file (.xlsx or .xls)");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const username = localStorage.getItem('username') || 'anonymous';

    try {
      const uploadRes = await fetch(`http://localhost:5000/api/upload?user=${username}`, {
        method: "POST",
        body: formData,
      });

      if (!uploadRes.ok) throw new Error(`Upload failed: ${uploadRes.status}`);

      const res = await fetch(`http://localhost:5000/api/data?user=${username}`);
      if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);

      const json = await res.json();
      console.log("✅ Data from backend:", json);
      setExcelData(json.data || []);
    } catch (err) {
      console.error("Upload or fetch error:", err);
      alert("Upload failed or data not found");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <label
        htmlFor="fileUpload"
        className="px-6 py-2 bg-blue-700 text-white rounded cursor-pointer hover:bg-blue-800 transition"
      >
        Select Excel File
      </label>
      <input
        type="file"
        accept=".xlsx, .xls"
        id="fileUpload"
        onChange={handleFileChange}
        className="hidden"
      />
      {loading && (
        <p className="text-sm text-gray-500 italic">
          Uploading and processing your file...
        </p>
      )}
    </div>
  );
};

export default FileUpload;

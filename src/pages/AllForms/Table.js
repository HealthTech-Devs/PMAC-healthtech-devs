import React, { useState } from 'react';
// import axios from 'axios';

const MyTable = ({ headings }) => {
  const [tableData, setTableData] = useState([]);

  const handleAddRow = () => {
    event.preventDefault();
    setTableData(prevState => [
      ...prevState,
      { id: Date.now(), column1: '', column2: '', column3: '' },
    ]);
  };

  const handleCellChange = (e, rowId, column) => {
    const newValue = e.target.value;
    setTableData(prevState => {
      const updatedRow = prevState.find(row => row.id === rowId);
      updatedRow[column] = newValue;
      return [...prevState];
    });
  };

  const handleSaveTableData = async () => {
    event.preventDefault();
      console.log(tableData);
   
  };

  return (
    <div className="container mx-auto py-8">
      <table className="border-collapse border border-gray-600">
        <thead>
          <tr>
            {headings.map(heading => (
              <th
                key={heading}
                className="border border-gray-600 px-4 py-2 font-semibold"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map(row => (
            <tr key={row.id}>
              <td className="border border-gray-600 px-4 py-2">
                <input
                  type="text"
                  value={row.column1}
                  className="w-full border-0 focus:outline-none"
                  onChange={e => handleCellChange(e, row.id, 'column1')}
                />
              </td>
              <td className="border border-gray-600 px-4 py-2">
                <input
                  type="text"
                  value={row.column2}
                  className="w-full border-0 focus:outline-none"
                  onChange={e => handleCellChange(e, row.id, 'column2')}
                />
              </td>
              <td className="border border-gray-600 px-4 py-2">
                <input
                  type="text"
                  value={row.column3}
                  className="w-full border-0 focus:outline-none"
                  onChange={e => handleCellChange(e, row.id, 'column3')}
                />
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={3} className="border border-gray-600 px-4 py-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleAddRow}
              >
                Add Row
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
          onClick={handleSaveTableData}
        >
          Save Table Data
        </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default MyTable;

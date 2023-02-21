import { useState } from 'react';

export default function Table() {
  const [data, setData] = useState([    { id: 1, col1: '', col2: '', col3: '', col4: '' },    { id: 2, col1: '', col2: '', col3: '', col4: '' },  ]);

  const handleDataChange = (id, field, value) => {
    const newData = data.map((row) => {
      if (row.id === id) {
        return { ...row, [field]: value };
      } else {
        return row;
      }
    });
    setData(newData);
  };

  const handleDeleteRow = (id) => {
    const newData = data.filter((row) => row.id !== id);
    setData(newData);
  };

  const handleAddRow = () => {
    const newRow = { id: data.length + 1, col1: '', col2: '', col3: '', col4: '' };
    setData([...data, newRow]);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-400 w-full">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2">Heading 1</th>
            <th className="border border-gray-400 p-2">Heading 2</th>
            <th className="border border-gray-400 p-2">Heading 3</th>
            <th className="border border-gray-400 p-2">Heading 4</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td className="border border-gray-400 p-2">
                <input
                  type="text"
                  value={row.col1}
                  onChange={(event) => handleDataChange(row.id, 'col1', event.target.value)}
                  className="border border-gray-400 p-1 w-full"
                />
              </td>
              <td className="border border-gray-400 p-2">
                <input
                  type="text"
                  value={row.col2}
                  onChange={(event) => handleDataChange(row.id, 'col2', event.target.value)}
                  className="border border-gray-400 p-1 w-full"
                />
              </td>
              <td className="border border-gray-400 p-2">
                <input
                  type="text"
                  value={row.col3}
                  onChange={(event) => handleDataChange(row.id, 'col3', event.target.value)}
                  className="border border-gray-400 p-1 w-full"
                />
              </td>
              <td className="border border-gray-400 p-2">
                <input
                  type="text"
                  value={row.col4}
                  onChange={(event) => handleDataChange(row.id, 'col4', event.target.value)}
                  className="border border-gray-400 p-1 w-full"
                />
              </td>
              <td className="border border-gray-400 p-2">
                <button
                  onClick={() => handleDeleteRow(row.id)}
                  className="bg-red-500 hover:bg-red-600 text-white rounded-md py-1 px-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
        </div>
  )}

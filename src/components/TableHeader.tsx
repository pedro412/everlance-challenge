import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export const TableHeader = ({
  onSearchChange,
}: {
  onSearchChange: (e: any) => void;
}) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSearchChange(input);
  };

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl text-title font-medium">GitHub Users</h1>
      <div className="relative">
        <FaSearch className="absolute top-3 left-3" size={18} color="#e5e7eb" />
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e: any) => setInput(e.target.value)}
            className="border-solid border-2 border-gray rounded h-10 w-64 pl-10   pr-6"
            type="text"
            placeholder="Enter username or email"
          />
        </form>
      </div>
    </div>
  );
};

import React from 'react';

export const TableHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl text-body font-medium">GitHub Users</h1>
      <div>
        <input
          className="border-solid border-2 border-gray rounded h-10 w-64 px-6"
          type="text"
          placeholder="Enter username or email"
        />
      </div>
    </div>
  );
};

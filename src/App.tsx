import React from 'react';
import './App.css';
import { TableHeader } from './components/TableHeader';
import { Navbar } from './components/Navbar';
import { UserCard } from './components/UserCard';

export const App = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1024px] m-auto mt-14">
        <TableHeader />
        <div className="mt-10">
          <UserCard
            name="pedro412"
            url="https:google.com"
            profilePic="https://avatars.githubusercontent.com/u/24465570?v=4"
          />
        </div>
      </div>
    </div>
  );
};

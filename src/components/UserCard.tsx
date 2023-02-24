import React from 'react';
import { FaGithub } from 'react-icons/fa';

export const UserCard = ({
  name,
  url,
  profilePic,
}: {
  name: string;
  url: string;
  profilePic: string;
}) => {
  return (
    <div className="border-solid border-2 rounded w-80 py-4 px-6">
      <div className="flex items-center mb-6">
        <img
          className="bg-body w-14 h-14 rounded-full mr-4"
          src={profilePic}
          alt={name}
        />
        <h2 className="font-medium text-body text-lg">{name}</h2>
      </div>
      <div className="flex items-center justify-between">
        <FaGithub size={22} />
        <div>
          <a className="text-everlance" href={url}>
            View profile
          </a>
        </div>
      </div>
    </div>
  );
};

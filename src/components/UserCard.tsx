import React from 'react';
import { FaGithub } from 'react-icons/fa';

import { Link } from 'react-router-dom';

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
        <h2 className="font-medium text-title text-lg">{name}</h2>
      </div>
      <div className="flex items-center justify-between">
        <a target="_blank" href={url}>
          <FaGithub size={22} />
        </a>
        <div>
          <Link className="text-everlance" to={`/user/${name}`}>
            View profile
          </Link>
        </div>
      </div>
    </div>
  );
};

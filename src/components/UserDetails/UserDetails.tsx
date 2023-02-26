import { FaGithub } from 'react-icons/fa';
import { Links } from './Links';
import { Stats } from './Stats';

export const UserDetails = () => {
  return (
    <div className="border-solid border-2 rounded p-10">
      <div className="flex">
        <div className="w-1/6 mr-10">
          <img
            className="bg-body rounded-full mr-4 w-full h-auto"
            src={'https://avatars.githubusercontent.com/u/1024025?v=4'}
            alt={'name'}
          />
        </div>
        <div className="w-2/6 mr-10">
          <h2 className="text-title text-2xl mb-3">Jenna Chen</h2>
          <p className="text-body text-md mb-3">jennachen</p>
          <p className="text-body text-md mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita,
            ipsam.
          </p>
        </div>
        <div className="w-3/6">
          <p className="text-title flex items-center mb-3">
            <FaGithub size={20} className="mr-2 text-title" /> jennachengithub
          </p>
          <Stats />
        </div>
      </div>
      <Links />
    </div>
  );
};

import { useParams } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { Links } from './Links';
import { Stats } from './Stats';
import { useUserDetails } from '../../hooks/useUserDetail';

export const UserDetails = () => {
  const { username } = useParams();

  const { data } = useUserDetails({ username });

  return (
    <div className="border-solid border-2 rounded p-10">
      <div className="flex">
        <div className="w-1/6 mr-10">
          <img
            className="bg-body rounded-full mr-4 w-full h-auto"
            src={data?.avatar_url}
            alt={data?.login}
          />
        </div>
        <div className="w-2/6 mr-5">
          <h2 className="text-title text-2xl mb-3">{data?.name}</h2>
          <p className="text-body text-md mb-3">{data?.login}</p>
          <p className="text-body text-md mb-6">{data?.bio}</p>
        </div>
        <div className="w-3/6">
          <div className="w-80">
            <p className="text-title flex items-center mb-3">
              <FaGithub size={20} className="mr-2 text-title" /> {data?.login}
            </p>
            <Stats
              repos={data?.public_repos}
              followers={data?.followers}
              following={data?.following}
            />
          </div>
        </div>
      </div>
      <Links
        location={data?.location}
        email={data?.email}
        twitter={data?.twitter_username}
        blog={data?.blog}
      />
    </div>
  );
};

import { FaEnvelope, FaLink, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa';

export const Links = ({
  location,
  email,
  twitter,
  blog,
}: {
  location?: string;
  email?: string;
  twitter?: string;
  blog?: string;
}) => {
  return (
    <div className="flex mt-6">
      <div className="w-1/6 mr-10"></div>
      <div className="w-2/6 mr-5">
        <p className="text-body flex items-center mb-3">
          <FaMapMarkerAlt size={20} className="mr-2 text-body" />
          {location || 'location'}
        </p>
        <p className="text-body flex items-center">
          <FaEnvelope size={20} className="mr-2 text-body" />
          {email || 'email'}
        </p>
      </div>
      <div className="w-3/6">
        <p className="text-body flex items-center mb-3">
          <FaTwitter size={20} className="mr-2 text-blue-400" />
          {twitter || 'twitter'}
        </p>
        <p className="text-body flex items-center mb-3">
          <FaLink size={20} className="mr-2 text-body" />
          {blog || 'blog'}
        </p>
      </div>
    </div>
  );
};

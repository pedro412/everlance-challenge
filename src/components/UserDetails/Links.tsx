import { FaEnvelope, FaLink, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa';

export const Links = () => {
  return (
    <div className="flex">
      <div className="w-1/6 mr-10"></div>
      <div className="w-2/6 mr-10">
        <p className="text-body flex items-center mb-3">
          <FaMapMarkerAlt size={20} className="mr-2 text-body" /> San franciso,
          CA
        </p>
        <p className="text-body flex items-center">
          <FaEnvelope size={20} className="mr-2 text-body" /> San franciso, CA
        </p>
      </div>
      <div className="w-3/6">
        <p className="text-body flex items-center mb-3">
          <FaTwitter size={20} className="mr-2 text-blue-400" />
          jennachengithub
        </p>
        <p className="text-body flex items-center mb-3">
          <FaLink size={20} className="mr-2 text-body" />
          jennachengithub
        </p>
      </div>
    </div>
  );
};

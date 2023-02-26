export const Stats = ({
  repos,
  followers,
  following,
}: {
  repos?: number;
  followers?: number;
  following?: number;
}) => {
  return (
    <div className="bg-gray-100 rounded py-4 px-8 flex items-center justify-center mb-10">
      <div className="w-1/3 text-center">
        <p className="text-sm text-body mb-2">Repos</p>
        <p className="text-lg font-medium">{repos}</p>
      </div>
      <div className="w-1/3 text-center">
        <p className="text-sm text-body mb-2">Followers</p>
        <p className="text-lg font-medium">{followers}</p>
      </div>
      <div className="w-1/3 text-center">
        <p className="text-sm text-body mb-2">Following</p>
        <p className="text-lg font-medium">{following}</p>
      </div>
    </div>
  );
};

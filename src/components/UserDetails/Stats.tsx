export const Stats = () => {
  return (
    <div className="bg-gray-100 rounded py-4 px-6 flex items-center justify-center mb-10">
      <div className="w-1/3 text-center">
        <p className="text-sm text-body mb-2">Repos</p>
        <p className="text-lg font-medium">15</p>
      </div>
      <div className="w-1/3 text-center">
        <p className="text-sm text-body mb-2">Followers</p>
        <p className="text-lg font-medium">1</p>
      </div>
      <div className="w-1/3 text-center">
        <p className="text-sm text-body mb-2">Following</p>
        <p className="text-lg font-medium">2</p>
      </div>
    </div>
  );
};

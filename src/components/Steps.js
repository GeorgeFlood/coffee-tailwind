const Steps = function ({ num, title, info }) {
  return (
    <div className="text-center my-8">
      <h1 className="text-6xl weight-bold text-custom-biege">{num}</h1>
      <h3 className="text-2xl weight-bold mb-4">{title}</h3>
      <p className="text-gray-500">{info}</p>
    </div>
  );
};

export default Steps;

const ShimmerCard = () => {
  return Array(10)
    .fill("0")
    .map((_, i) => {
      return (
        <div
          className="p-5 m-5 border border-black rounded-lg flex gap-5 flex-col"
          data-testid="card"
          key={i}
        >
          <div className="w-64 h-64 bg-gray-200"></div>
          <p className="p-1 w-full h-5 bg-gray-200"></p>
        </div>
      );
    });
};

export default ShimmerCard;

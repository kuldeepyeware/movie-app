const Rating = ({ rating }: { rating: number }) => {
  return (
    <div className='flex items-center justify-center h-full'>
      <div className='relative w-20 h-20'>
        <div
          className={`absolute inset-0 rounded-full border-4 ${
            rating >= 8 ? "border-green-500" : "border-yellow-500"
          } dark:bg-gray-800`}
          style={{
            height: "100%",
            transform: "rotate(-90deg)",
            transformOrigin: "center",
            width: "100%",
          }}>
          <div
            className='absolute inset-0 rounded-full'
            style={{
              background:
                "conic-gradient(#000000 0%, #000000 75%, #000000 75%, #000000 100%)",
              height: "100%",
              transform: "rotate(0deg)",
              transformOrigin: "center",
              width: "100%",
            }}
          />
        </div>
        <div className='absolute inset-0 flex items-center justify-center text-3xl font-bold text-white '>
          {rating}
        </div>
      </div>
    </div>
  );
};

export default Rating;

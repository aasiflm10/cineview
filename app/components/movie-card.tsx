export function MovieCard() {
  return (
    <div className="relative z-0 m-4 h-[450px] w-[309px] bg-red-500">
      <img
        src="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
        className="absolute z-10 object-cover h-full w-full"
      />
      <div className="relative z-20 mt-[323px] ml-[30px] mb-[30px] mr-[114px]  justify-center text-white text-lg font-bold">
        <h1>The lion King</h1>
        <h2>20 April</h2>
        <h2>6+</h2>
        <div className="flex space-x-2">
          <div className="bg-gray-400">
            Ru
          </div>
          <div className="bg-gray-400">
            Tr
          </div>
        </div>

      </div>
    </div>
  );
}

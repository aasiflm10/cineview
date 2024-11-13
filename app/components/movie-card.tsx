export function MovieCard() {
  return (
    <div className="relative m-4 h-[450px] w-[309px] bg-red-500 overflow-hidden">
      {/* Background Image */}
      <img
        src="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
        className="absolute inset-0 object-cover h-full w-full"
        alt="Movie Background"
      />
      
      {/* Text Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white bg-black bg-opacity-50">
        <h2 className="text-2xl font-bold">Movie Title</h2>
        <p className="text-sm mt-2">Some description or other details</p>
      </div>
    </div>
  );
}

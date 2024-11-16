import { IMAGE_BASE_URL } from "@/url";

export function MovieCard({
  id,
  poster_path,
  title,
  original_language,
  release_date
}: {
  id: number;
  poster_path : string;
  title : string;
  original_language :  string;
  release_date : string
}) {

  const year = release_date.trim().substring(0, 4);
  return (
    <div key={id} className="relative z-0 m-4 h-[450px] w-[309px] bg-red-500">
      <img
        src= {`${IMAGE_BASE_URL}${poster_path}`}
        className="absolute z-10 object-cover h-full w-full"
      />
      <div className="relative z-20 mt-[323px] ml-[30px] mb-[30px] justify-center text-white text-lg font-bold">
        <h1>{title}</h1>
        <h1 className="text-xs pt-2 pb-2">{release_date}</h1>
        <h1 className="outline p-2 text-xs w-8">{original_language}</h1>
      </div>
    </div>
  );
}

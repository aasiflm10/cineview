import { IMAGE_BASE_URL } from "@/url";

export function MovieCard({
  id,
  poster_path,
  title,
  original_language,
  release_date
}: {
  id: Number;
  poster_path : String;
  title : String;
  original_language :  String;
  release_date : String
}) {

  const year = release_date.trim().substring(0, 4);
  return (
    <div className="relative z-0 m-4 h-[450px] w-[309px] bg-red-500">
      <img
        src= {`${IMAGE_BASE_URL}${poster_path}`}
        className="absolute z-10 object-cover h-full w-full"
      />
      <div className="relative z-20 mt-[323px] ml-[30px] mb-[30px] mr-[114px]  justify-center text-white text-lg font-bold">
        <h1>{title}</h1>
        <p className="text-xs">{year}</p>
        <p className="outline p-2 text-xs">{original_language}</p>
      </div>
    </div>
  );
}

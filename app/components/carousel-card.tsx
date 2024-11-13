import { IMAGE_BASE_URL } from "@/url";

export function CarouselCard({imagePath} : {imagePath : string}) {
  const url = IMAGE_BASE_URL+imagePath;
  return (
    <div className="ml-4 h-60 w-40">
      <img
        src="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
        className="object-cover h-60 w-40 "
      ></img>
    </div>
  );
}

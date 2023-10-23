export default function Navbar() {
  return (
    <div className="bg-black p-6 flex text-white items-center font-Oswald gap-10 sticky top-0 shadow-lg">
      <a href="#" className="block">
        <span className="text-3xl font-semibold">Bos10 Production</span>
      </a>
      <div className="font-semibold text-lg flex gap-8">
        <a href="#" className="border-b-2 border-transparent hover:border-b-white">
            Showcase
        </a>
        <a href="#" className="border-b-2 border-transparent hover:border-b-white">
            Upcoming
        </a>
        <span className="cursor-pointer border-b-2 border-transparent hover:border-b-white group relative">
            Services
            <a href="#" className="absolute left-0 top-[57px] min-w-[185px] bg-white hidden group-hover:block text-black p-3 shadow-lg">
                Color Correction and Motion Graphics
            </a>
        </span>
      </div>
    </div>
  );
}

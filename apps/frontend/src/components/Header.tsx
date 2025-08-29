export default function Header() {
  return (
    <div className="header bg-(--primary) py-4 border-b-4 border-(--secondary) flex justify-between items-center">
      <div className="logo transition-all duration-300 hover:scale-125">
        <a href="./" className="text-4xl text-white pl-8">
          TripSmith
        </a>
      </div>
      <div className="menu pr-12 flex gap-4 text-white">
        <a
          href="./"
          className="bg-(--secondary) p-2 text-xl rounded-xl hover:bg-(--action) hover:text-white transition-all duration-300 hover:scale-105">
          Home
        </a>
        <a
          href="./plan"
          className="bg-(--secondary) p-2 text-xl rounded-xl hover:bg-(--action) hover:text-white transition-all duration-300 hover:scale-105">
          Planejar
        </a>
        <a
          href="./about"
          className="bg-(--secondary) p-2 text-xl rounded-xl hover:bg-(--action) hover:text-white transition-all duration-300 hover:scale-105">
          Sobre
        </a>
      </div>
    </div>
  );
}

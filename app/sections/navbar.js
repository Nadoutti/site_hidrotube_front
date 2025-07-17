

export default function Navbar() {
  return (
    <nav className="
      bg-white
      bg-linear-65 from-[#F5FBFF] to-[#DEEBFF] 
      border-gray-200 
      text-[#142667]
      ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4  ">
          <a href="#" className="
          flex 
          items-center
          w-1/2">
            <span className="
              self-center
              text-2xl
              font-semibold
              whitespace-nowrap
              dark:text-white">Hidrotube</span>
          </a>

        <ul className="
          flex
          w-1/2
          justify-between
          gap-10">

          <li>
           Inicio 
          </li>
          <li>
            Sobre
          </li><li>
            Catalogo
          </li><li>
            Noticias
          </li><li>
            Contato
          </li>
        </ul>
      </div>
    </nav>
  );
}

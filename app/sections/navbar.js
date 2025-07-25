import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="
      bg-white
      fixed
      w-full
      z-50
      
      bg-linear-65 from-[#F5FBFF] to-[#DEEBFF] 
      border-gray-200 
      text-[#142667]
      ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4  ">
        <a href="#" className="
          flex 
          items-center
          w-1/2">
          <Image 
            src="/logo.png"
            alt="Logo"
            width={250}
            height={250}/>
        </a>

        <ul className="
          flex
          w-1/2
          justify-between
          gap-10
          text-[20px]">

          <li>
            <a href="#">

              Inicio 
            </a>
          </li>

          <li>
            <a href="sobre">
              Sobre
            </a>
          </li>

          <li>
            <a href="catalogo">
              Catalogo
            </a>
          </li>

          <li>
            <a href="noticias">
              Noticias
            </a>
          </li>

          <li>
            <a href="contato">
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

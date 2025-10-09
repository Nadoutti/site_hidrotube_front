import Image from 'next/image';

export default function Navbar() {

  const items = ['Inicio', 'Sobre', 'Catalogo', 'Notícias']

  return (
    <nav className="
      w-full
      bg-linear-65 from-[#F5FBFF] to-[#DEEBFF] 
      border-gray-200 
      fixed
      text-[#142667]
      z-50
      ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4  ">
        <a href="/" className="
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
          text-[20px]
          text-gray-600
          ">
          


          {items.map((item) =>

            <li className="hover:text-[#142667]">
              <a key={item} href={`#${item}`}>

                {item}
              </a>
            </li>

          )}

          <li className="hover:text-[#142667]">
            <a href="/contato">

              Contato 
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
}

import Image from "next/image";
import airplaneSVG from "@/app/assets/airplane.svg"
import logoSVG from "@/app/assets/logo.svg"
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section id="hero" className="mx-auto w-full h-screen bg-stone-100 max-w-7xl flex flex-col p-8">
        <nav className="w-full max-w-5xl flex items-center justify-between ">
          <Link href="/"> 
          <Image
          className="w-14 h-14" 
          src={logoSVG}
          alt="Logo da plataforma do avião"
          />
          </Link>

          <div className='flex gap-8 items-center'>
            <Link href="#hero" className="font-medium text-stone-700 hover:text-fuchsia-500">Preço</Link>
            <Link href="#hero" className="font-medium text-stone-700 hover:text-fuchsia-500">Sobre</Link>
            <Link href="#hero" className="font-medium text-stone-700 hover:text-fuchsia-500">Blog</Link>
            <Link href="#hero" className="font-medium text-white bg-fuchsia-500 hover:bg-fuchsia-700 px-5 py-3 rounded-full">Começar</Link>
          </div>


        </nav>
        <div className="mt-8 w-full items-center justify-between flex">
        <div >
          <h1 className="text-left font-bold text-7xl text-stone-800">
            Planeje sua viajem com <span className="text-fuchsia-500">AirPlanner</span>.
          </h1>
        <p className="mt-8 mb-7 text-lg font-bold text-stone-700">
         Nunca foi tão facil planejar uma viajem. <br/>
         kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
        </p>
        <Link href="#hero" className="ml-25 w-fit mx-auto font-medium text-white bg-fuchsia-500 hover:bg-fuchsia-700 px-5 py-3 rounded-full">Comece agora!</Link>
        </div>
        <Image 
         className="w-full max-w-2xl"
         src={airplaneSVG}
         alt="Ilustração de um avião dando a volta ao mundo"
        />
        </div>
      </section>
    </main>
  );
}

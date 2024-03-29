import { Link } from "react-router-dom"
import sony from "../assets/sony.jpg"
import { Header } from "./Components/Header"
export function LandingPage() {


return (
  <>
  <Header/>
    <div className="relative overflow-hidden bg-black">
    <div className="mx-auto w-full">
      <div className="relative z-10   sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
        <main className="mx-auto mt-10 w-full px-4 pb-16 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-9xl">
              <span className="block ml-12 text-white xl:inline">SONY</span>
              <span className="block text-white font-thin text-2xl ml-44 sm:text-4xl md:text-6xl sm:ml-56 md:ml-64 ">DSLR</span>
            </h1>
            <p className="mt-6 text-sm text-white font-thin  sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">"Whatever is good for your soul, do that"</p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link to = "/explore" className="flex w-full items-center justify-center rounded-md border border-transparent bg-pink-600 px-8 py-3 text-base font-medium text-white hover:border-indigo-600 hover:border-4 md:py-4 md:px-10 md:text-lg">Explore Now</Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a href="#" className="flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white border-white border-1 hover:border-indigo-600 hover:border-4 md:py-4 md:px-10 md:text-lg">Buy</a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div className="lg:absolute lg:inset-y-0 lg:right-16   lg:w-1/2">
      <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full" src={sony} alt=""/>
    </div>
  </div>
  </>
)


}
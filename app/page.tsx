import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section>
        <div className="h-[90vh] w-full dark:bg-myblack  dark:bg-grid-white/[0.05] bg-grid-black/[0.1] relative flex flex-col items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-myblack  [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>
          <h1 className="md:text-7xl text-5xl font-bold text-center ">
            Reddit, but not really.
          </h1>
          <h3 className="text-secondarytext md:text-2xl text-xl md:max-w-[40rem] text-center pt-3 pb-8">
            This is a clone of reddit made as a school project. If you see this,
            please hire me
          </h3>
          <Link href={"/home"}>
            <button className="bg-lightpurp hover:bg-lightpurp/80 rounded-lg px-4 py-2 text-center">
              Enter Website
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

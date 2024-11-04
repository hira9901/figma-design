
import Image from "next/image"
export default function Home() {
  return (
    <main className="mt-10 ml mx-10">
      <section className="flex gap-6 items-center">
        <div className="flex-1">
          <h1 className="font-bold text-3xl">
        Hi, I'm Hira Hamid
          </h1>
          <p className="text-lg text-gray-900 mt-2">I'm a full-stack developer witha a passion for building beautiful website and application</p>
          <button className="bg-gray-900 text-white py-3 mt-4 px-4">View My Work</button>
        </div>

        <div className="flex-1">
          <Image
          width={500}
          height={500}
          src="/poster.jpeg" alt="Hero"/>
        </div>
      </section>
    </main>
  );
}

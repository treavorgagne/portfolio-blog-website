import Image from "next/image";

export default function AboutMe() {
  return (
    <>
      <div>
        <h1 className="mb-2">About Me</h1>
        <Image
          src="/HeadshotAnime.jpg"
          alt="Treavor Gagne - Headshot"
          width={250}
          height={250}
        />
      </div>
      <hr className="my-2" />
      <h2>My Name is Treavor Gagne</h2>
      <h3>I'm a software Engineer</h3>
    </>
  );
}

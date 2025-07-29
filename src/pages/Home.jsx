import { Link } from "react-router-dom";
function Home() {

  return (
    <section className="bg-[url('../src/assets/images/home-hero.png')] bg-[hsla(0,0%,0%,0.8)] bg-blend-multiply w-full bg-cover bg-center h-[80vh] flex flex-col items-center justify-center text-white text-center gap-4">
        <h1 className="text-5xl font-bold">You got the travel plans, we got the travel vans.</h1>
        <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <Link to="vans" className="bg-orange-400 font-bold py-2 px-8 rounded-md hover:bg-orange-500 clip-van">Find your van</Link>
    </section>
  );
}

export default Home;

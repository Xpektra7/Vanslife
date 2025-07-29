import { Link } from "react-router-dom";
import aboutImg from "../assets/images/about-hero.png";
export default function About() {
  return (
    <section className="flex flex-col gap-4 m-16">
        <img src={aboutImg} alt="About Us" className="w-full h-[60vh] rounded object-cover object-center" />
        <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold ">Don’t squeeze in a sedan when you could relax in a van.</h1>
            <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
            <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>
        <div className="h-auto w-full flex flex-col gap-4 bg-orange-300 rounded-md p-4 px-8 mt-8">
            <h2 className="text-2xl font-extrabold">Your destination is waiting.<br />Your van is ready.</h2>
            <Link className="block w-fit bg-neutral-900 p-2 px-8 text-white rounded-md clip-van" to="/vans">Explore our vans</Link>
        </div>

    </section>
  );
}
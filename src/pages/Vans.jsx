import React from "react";
import { Link } from "react-router-dom";
export default function Vans(){
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
    fetch("/server.json")
        .then(res => res.json())
        .then(data => setVans(data));
    }, []);
    function typeColor(type){
        if (type == "rugged") {
            return `bg-amber-800`;
        }
        else if(type == "simple"){
            return  `bg-orange-400`;
        }
        else if(type == "luxury"){
            return  `bg-purple-600`;
        }
    }
    const vanElements = vans.map(van => (
         <div key={van.id} className="w-full flex flex-col gap-4 relative">
            <Link to={`/vans/${van.id}`} className="w-full h-full">
            <img alt={van.van} src={van.imageUrl} className="w-full aspect-square object-cover object-center clip-van border-1 border-orange-200"/>
            </Link>
            <div className="w-full flex items-center justify-between">
                <h3 className="font-bold">{van.van}</h3>
                <p className="font-bold">${van.price}<small className="font-normal">/day</small></p>
            </div>
            <i className={`absolute ${typeColor(van.type)} p-1 px-3 clip-van van-type ${van.type} selected text-white`}>{van.type}</i>
        </div>
    ))

    return (
        <div className="py-8 flex flex-col gap-8 px-8 md:px-16">
            <h1 className="text-3xl">Explore our van options</h1>
            {
                vans ? (
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-8">
                {vanElements}
            </div>
            ):(
                <div className="w-full flex items-center justify-center h-[60vh]">
                    <p className="text-xl text-orange-400">Loading...</p>
                </div>
            )
            }
        </div>
    );
}
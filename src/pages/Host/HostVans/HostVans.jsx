import React from "react";
import { Link } from "react-router-dom";
export default function HostVans(){
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
         <div key={van.id} className="w-full flex gap-4 relative p-4 bg-white clip-van border border-orange-100">
            <Link to={`/host/vans/${van.id}`} className="h-full aspect-square object-cover object-center">
                <img alt={van.van} src={van.imageUrl} className="h-full aspect-square object-cover object-center clip-van border-1 border-orange-200"/>
            </Link>
            <div className="w-full flex flex-col justify-center">
                <h3 className="font-bold">{van.van}</h3>
                <p className="font-bold text-sm">${van.price}<small className="font-normal">/day</small></p>
            </div>
        </div>
    ))

    return (
        <div className="py-8 flex flex-col gap-8 ">
            {
                vans ? (
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-8 grid-rows-[repeat(3,_100px)]">
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
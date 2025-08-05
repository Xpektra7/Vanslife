import React from "react";
import { Link, useSearchParams} from "react-router-dom";
export default function Vans(){


    const [vans, setVans] = React.useState([])
    const [searchParams,setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");

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
            return  `bg-orange-500`;
        }
        else if(type == "luxury"){
            return  `bg-purple-600`;
        }
    }

    const filteredVans = typeFilter ? vans.filter(van => van.type.toLowerCase() === typeFilter) : vans

    const vanElements = filteredVans.map(van => (
         <div key={van.id} className="w-full flex flex-col gap-4 relative">
            <Link to={van.id} state={{"search" : searchParams.toString(), filter : typeFilter}} className="w-full h-full">
                <img alt={van.van} src={van.imageUrl} className="w-full aspect-square object-cover object-center clip-van border-1 border-orange-200"/>
            </Link>
            <div className="w-full flex items-center justify-between">
                <h3 className="font-bold">{van.van}</h3>
                <p className="font-bold">${van.price}<small className="font-normal">/day</small></p>
            </div>
            <i className={`absolute ${typeColor(van.type)} p-1 px-3 clip-van van-type ${van.type} selected text-white`}>{van.type}</i>
        </div>
    ))

    function handleFilter(key,value){
        setSearchParams(prevParams => {
            if(value === null){
                prevParams.delete(key)
            } else {
                prevParams.set(key,value)
            }

            return prevParams
        })

    }
    

    return (
        <div className="py-8 flex flex-col gap-8 px-8 md:px-16">
            <h1 className="text-3xl">Explore our van options</h1>
            <div className="flex gap-2 items-center">
                <button onClick={() => handleFilter("type",null)} className={`p-1 px-4 clip-van text-white text-sm ${typeFilter === null ? `bg-neutral-900` : `bg-neutral-600`}`}>
                    all
                </button>
                <button onClick={() => handleFilter("type" , "simple")} className={`p-1 px-4 clip-van text-white text-sm ${typeFilter === "simple" ? typeColor('simple') : `bg-neutral-600`}`}>
                    simple
                </button>
                <button onClick={() => handleFilter("type" , "rugged")} className={`p-1 px-4 clip-van text-white text-sm ${typeFilter === "rugged" ? typeColor('rugged') : `bg-neutral-600`}`}>
                    rugged
                </button>
                <button onClick={() => handleFilter("type" , "luxury")} className={`p-1 px-4 clip-van text-white text-sm ${typeFilter === "luxury" ? typeColor('luxury') : `bg-neutral-600`}`}>
                    luxury
                </button>
            </div>
            {
                vans ? (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {vanElements}
            </div>
            ):(
                <div className="w-full flex items-center justify-center h-[60vh]">
                    <p className="text-xl text-orange-500">Loading...</p>
                </div>
            )
            }
        </div>
    );
}
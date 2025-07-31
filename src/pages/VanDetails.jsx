import { useState,useEffect } from "react";
import { useParams, Link } from "react-router-dom";
export default function VanDetails(){
    
    const {id} = useParams();
    const numericId = parseInt(id, 10) - 1;
    const [van, setVan] = useState([])
    useEffect(() => {
    fetch("/server.json")
        .then(res => res.json())
        .then(data => setVan(data[numericId]));
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


    return(
        <section className="w-full flex flex-col gap-8 p-8 md:p-16">
            <p>
               <Link to="/vans" className="underline hover:text-orange-7 transition ease-in duration-300">Back to all vans</Link>
            </p>
            <div className="w-full flex flex-col md:flex-row gap-16">
                <div className="w-full md:w-2/5 relative">
                    <img alt={van.van} src={van.imageUrl} className="w-full aspect-square object-cover object-bottom clip-van border-1 border-orange-200"/>
                    <i className={`absolute top-0 ${typeColor(van.type)} p-2 px-4 clip-van van-type ${van.type} selected text-white`}>{van.type}</i>
                </div>
                <div className="w-full md:w-3/5 flex flex-col gap-8 md:py-8">
                    <h3 className="font-bold text-5xl">{van.van}</h3>
                    <h4 className="text-5xl">${van.price}<small className="font-normal text-xl">/day</small></h4>
                    <p className="text-xl">{van.description}</p>
                    <div className="h-auto w-full flex flex-col gap-4 bg-orange-300 rounded-md p-4 px-8 mt-8">
                        <h2 className="text-2xl font-extrabold">Your destination is waiting.<br />Your van is ready.</h2>
                        <Link className="block w-fit bg-neutral-900 p-2 px-8 text-white rounded-md clip-van" to="/vans">Explore our vans</Link>
                    </div>
                        
                </div>
            </div>

        </section>
    );
}
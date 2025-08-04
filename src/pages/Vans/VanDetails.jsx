import { useState,useEffect } from "react";
import { useParams, Link } from "react-router-dom";
export default function VanDetails(){
    
    const {id} = useParams();
    const numericId = parseInt(id, 10) - 1;
    const [van, setVan] = useState(null)
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
            {van ? (
                <>
                    <p>
                    <Link to="/vans" className="hover:text-orange-7 transition ease-in duration-300">&larr; Back to all vans</Link>
                    </p>
                    <div className="w-full flex flex-col md:flex-row gap-16">
                        <div className="w-full md:w-2/5 relative">
                            <img alt={van.van} src={van.imageUrl} className="w-full aspect-square object-cover object-bottom clip-van border-1 border-orange-200"/>
                        </div>
                        <div className="w-full md:w-3/5 flex flex-col gap-8 md:py-8">
                            <i className={`w-fit ${typeColor(van.type)} p-2 px-4 clip-van van-type ${van.type} selected text-white`}>{van.type}</i>
                            <h3 className="font-bold text-5xl">{van.van}</h3>
                            <h4 className="text-5xl">${van.price}<small className="font-normal text-xl">/day</small></h4>
                            <p className="text-xl">{van.description}</p>
                            <Link className="block w-fit bg-neutral-900 hover:bg-neutral-950 transition ease-in duration-300 p-2 px-8 text-white clip-van" to="/vans">Rent Van</Link>
                        </div>
                    </div>
                </>
            ) : (
                <div className="w-full flex items-center justify-center h-[60vh]">
                    <p className="text-xl text-orange-400">Loading...</p>
                </div>
            )}

        </section>
    );
}
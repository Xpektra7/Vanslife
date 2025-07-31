import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
export default function VanDetails(){
    
    const {id} = useParams();
    const numericId = parseInt(id, 10);
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
        <section className="p-8 md:p-16 flex flex-col md:flex-row gap-8">
            <div className="m-8 w-1/2 relative">
                <img alt={van.van} src={van.imageUrl} className="w-full aspect-square object-cover object-bottom clip-van border-1 border-orange-200"/>
                <i className={`absolute top-0 ${typeColor(van.type)} p-2 px-4 clip-van van-type ${van.type} selected text-white`}>{van.type}</i>
            </div>
            <div className="w-full flex flex-col gap-8 md:py-8">
                <h3 className="font-bold text-5xl">{van.van}</h3>
                <h4 className="text-5xl">${van.price}<small className="font-normal text-xl">/day</small></h4>
                <p className="text-xl">{van.description}</p>
            </div>

        </section>
    );
}
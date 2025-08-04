import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Photos(){
    const { id } = useParams();
    const numericId = parseInt(id, 10) - 1;
    const [van, setVan] = useState([]);
    useEffect(() => {
    fetch("/server.json")
        .then((res) => res.json())
        .then((data) => setVan(data[numericId]));
    }, []);
    return(
       <img src={van.imageUrl} alt={van.van} className="w-[100px] aspect-square border border-orange-300 clip-van" />
    )
}
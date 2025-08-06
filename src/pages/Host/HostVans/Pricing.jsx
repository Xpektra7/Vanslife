import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Pricing(){
    const { id } = useParams();
    const numericId = parseInt(id, 10) - 1;
    const [van, setVan] = useState([]);
    useEffect(() => {
    fetch("/server.json")
        .then((res) => res.json())
        .then((data) => setVan(data[numericId]));
    }, []);
    return(
       <p className="h-[20vh]"><span className="font-bold text-2xl">${van.price}.00</span>/day</p>
    )
}
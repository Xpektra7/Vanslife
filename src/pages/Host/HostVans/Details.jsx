import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Details(){
    const { id } = useParams();
    const numericId = parseInt(id, 10) - 1;
    const [van, setVan] = useState([]);
    useEffect(() => {
    fetch("/server.json")
        .then((res) => res.json())
        .then((data) => setVan(data[numericId]));
    }, []);
    return(
       <ul className="w-full md:w-3/5 flex flex-col gap-4 ">
            <p className=""><span className="font-bold">Name:</span> {van.van}</p>
            <p className="capitalize"><span className="font-bold">Category:</span> {van.type}</p>
            <p className=""><span className="font-bold">Description:</span> {van.description}</p>
            <p className=""><span className="font-bold">Visibility:</span> Public</p>
       </ul>
    )
}
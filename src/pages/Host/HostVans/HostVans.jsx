import { Link, useLoaderData } from "react-router-dom";
import { loader } from "../../../api";

export function hostVansLoader(){
    return loader();
}

export default function HostVans(){

    const vans = useLoaderData();

    const vanElements = vans.map(van => (
         <div key={van.id} className="w-full flex gap-4 relative p-4 bg-white clip-van border border-orange-100">
            <Link to={van.id} className="h-full aspect-square object-cover object-center">
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
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-8 auto-rows-[100px]">
                {vanElements}
            </div>
        </div>
    );
}
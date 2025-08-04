import { useState,useEffect } from "react";
import { useParams, Link } from "react-router-dom";
export default function HostVanDetails(){
    
    const {id} = useParams();
    const numericId = parseInt(id, 10) - 1;
    const [van, setVan] = useState(null)
    useEffect(() => {
    fetch("/server.json")
        .then(res => res.json())
        .then(data => setVan(data[numericId]));
    }, []);
    

    return(
        <section className="w-full flex flex-col gap-8 p-8 md:p-16">
            {van ? (
                <>
                    <p>
                    <Link to="/host/vans" className="underline hover:text-orange-7 transition ease-in duration-300">Back to all vans</Link>
                    </p>
                    <div className="w-full flex flex-col md:flex-row gap-16">
                        <div className="w-full md:w-2/5 relative">
                            <img alt={van.van} src={van.imageUrl} className="w-full aspect-square object-cover object-bottom clip-van border-1 border-orange-200"/>
                        </div>
                        <div className="w-full md:w-3/5 flex flex-col gap-8 md:py-8">
                            <h3 className="font-bold text-5xl">{van.van}</h3>
                            <h4 className="text-5xl">${van.price}<small className="font-normal text-xl">/day</small></h4>
                            <p className="text-xl">{van.description}</p>
                            <div className="h-auto w-full clip-van flex flex-col gap-4 bg-orange-300 rounded-md p-4 px-8 mt-8">
                                <h2 className="text-2xl font-extrabold">Your destination is waiting.<br />Your van is ready.</h2>
                                <Link className="block w-fit bg-neutral-900 p-2 px-8 text-white rounded-md clip-van" to="/vans">Explore our vans</Link>
                            </div>
                                
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
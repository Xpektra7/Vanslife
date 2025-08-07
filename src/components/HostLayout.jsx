import { Outlet, Link } from "react-router-dom";
import HostNav from "./HostNav";


export default function HostLayout(){
    return(
        <section className="flex flex-col gap-8 px-8 md:px-16 py-4 md:py-8"> 
            <HostNav/>
            <Outlet/>
        </section>
    );
}
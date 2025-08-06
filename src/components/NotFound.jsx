import {Link} from 'react-router-dom';
export default function NotFound(){
    return(
        <section className="flex  flex-col items-center justify-center gap-4 h-[80vh]">
            <h1 className="text-9xl text-orange-500 font-extrabold font-stretch-extra-expanded">404</h1>
            <p className="text-xl">Sorry, the page you were looking for was not found.</p>
            <Link to="/" className='p-2 px-4 clip-van text-white bg-orange-500'>Back to Home</Link>
            </section>
    );
}
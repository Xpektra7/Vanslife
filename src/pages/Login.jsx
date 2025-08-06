import { Link } from "react-router-dom"
export default function Login(){
    return(
        <section className="flex flex-col items-center justify-center min-h-[80vh] gap-8 p-4 md:p-8 px:8 md:px-16">
            <h1 className="text-3xl font-bold">Sign in to your account</h1>
            <form className=" w-full items-center flex flex-col gap-2">
                <input type="email" name="email" id="email" className="w-full md:w-[30vw] bg-white p-1 border border-orange-500  " placeholder="Email Address"/>
                <input type="password" name="password" id="password" className="w-full md:w-[30vw] bg-white p-1 border border-orange-500 outline-none " placeholder="Password"/>
            </form>
            <div className="flex flex-col items-center gap-2">
                <Link className="p-2 flex flex-col items-center w-full md:w-[30vw] clip-van text-white bg-neutral-900 hover:bg-orange-500 transition ease-in duration-300 cursor-pointer">Sign in</Link>
                <p className="">Don't have an account? <span className="text-orange-500">Create new one</span></p>
            </div>
        </section>
    )
}
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { login } from "../api";

export async function loginLoader({ request }){
    return new URL(request.url).searchParams.get("message")
}


export default function Login(){

    const message = useLoaderData();

    const [loginFormData, setLoginFormData] = useState({email: "", password: ""});
    const [status,setStatus] = useState("idle")
    const [error,setError] = useState(null)


    function handleSubmit(e){
        setError(null)
        setStatus("submitting")
        e.preventDefault()
        setTimeout(() => {
            login(loginFormData).then(
                data => console.log(data))
                .catch(err => {
                    setError(err)
                })
                .finally(() => {
                    setStatus("idle");
                })
        }, 2000);
    }

    function handleChange(e){
        const {name, value} = e.target;
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return(
        <section className="flex flex-col items-center justify-center min-h-[80vh] gap-8 p-4 md:p-8 px:8 md:px-16">
            { message ? (
                <div className="p-2 text-red-500 font-bold text-center text-sm w-full md:w-[50vw] max-w-[540px]">
                    {message}
                </div>
            ) : null}
            <h1 className="text-3xl font-bold">Sign in to your account </h1>
            { error ? (
                <div className="p-2 text-red-500 font-bold text-center text-sm w-full md:w-[50vw] max-w-[540px]">
                    {error.message}
                </div>
            ) : null}
            <form className=" w-full items-center flex flex-col gap-2" onSubmit={handleSubmit}>
                <input type="email" name="email" id="email" className="w-full md:w-[50vw] max-w-[540px] bg-whie p-1 border border-orange-500 outline-none" placeholder="Email Address" onChange={handleChange} />
                <input type="password" name="password" id="password" className="w-full md:w-[50vw] max-w-[540px] bg-whie p-1 border border-orange-500 outline-none" placeholder="Password" onChange={handleChange} />
                <button type="submit" disabled={status === "submitting"} className="p-2 flex flex-col w-full md:w-[50vw] max-w-[540px] items-center  clip-van text-white bg-neutral-900 hover:bg-orange-500 transition ease-in duration-300 cursor-pointer">
                    {status === "submitting" ? "Signing in..." : "Sign in" }
                    </button>
            </form>
            <div className="flex flex-col items-center gap-2">
                <p className="">Don't have an account? <span className="text-orange-500">Create new one</span></p>
            </div>
        </section>
    )
}   
export async function loader(id) {
    const res = await fetch("/server.json")
    const data = await res.json()

    if(id){
        const numeric = parseInt(id)
        console.log(numeric);
        
        return data[numeric]
    }

    return data
}

export async function login({email,password}){
    if(email === "b@b.com" && password === "garri"){
        localStorage.setItem("isLoggedIn",true)
        return {
            user:{
                name: "Imran",
                email: email,
                password: password,
            },
            token: "Enjoy your ride"
        }
    }else{
        throw{
             message: "No user with those credentials found."
        }
    }
}
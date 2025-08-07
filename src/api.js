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


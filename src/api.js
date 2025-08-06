export async function loader() {
    const res = await fetch("./server.json")
    const data = await res.json()

    return data;
}
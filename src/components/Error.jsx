import { useRouteError } from "react-router-dom"
export default function Error(){

    const error = useRouteError()
    return (
        <p>{error.message}</p>
    )
}
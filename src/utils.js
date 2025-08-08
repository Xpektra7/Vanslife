import { redirect } from "react-router-dom";

export async function requiredAuth(request) {
  const pathname = new URL(request.url).pathname;
  console.log(pathname);
  
  const isLoggedIn = localStorage.getItem("isLoggedIn") ? true : false;

  if (!isLoggedIn) {
    throw redirect(`/login?message=You must login first!&redirectTo=${pathname}`);
  }
}

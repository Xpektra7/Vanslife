import { redirect } from "react-router-dom";

export async function requiredAuth() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") ? true : false;

  if (!isLoggedIn) {
    throw redirect("/login?message=You must login first!");
  }
}

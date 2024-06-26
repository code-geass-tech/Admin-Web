import AuthNav from "./Navbar/AuthNav"
import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <main className="min-h-screen dark:bg-zinc-950">
      <AuthNav />
      <div className="container">
        <Outlet />
      </div>
    </main>
  )
}
export default AuthLayout
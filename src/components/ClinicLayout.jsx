import ClinicNav from "./Navbar/ClinicNav"
import { Outlet } from "react-router-dom"

const ClinicLayout = () => {
  return (
    <main className="min-h-screen dark:bg-zinc-950">
      <ClinicNav />
      <div className="container">
        <Outlet />
      </div>
    </main>
  )
}
export default ClinicLayout
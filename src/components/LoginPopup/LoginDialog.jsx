import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import Login from "./Login"
import Signin from "./Signin"
import { useState } from "react"

export default function LoginDialog() {
  const [showSignIn, setShowSignIn] = useState(false)
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-0">
        { showSignIn ? (
          <Signin handleSignIn={setShowSignIn} />
        ) : (
          <Login handleSignIn={setShowSignIn} />
        )}
      </DialogContent>
    </Dialog>
  )
}

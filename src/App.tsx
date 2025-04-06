import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import "./App.css"

export default function App() {
  return (
    <header>
      <SignedOut>
        <SignInButton className="sign-btn" />
      </SignedOut>
      <SignedIn>
        <div className="userbtn">
          < UserButton />
        </div>
      </SignedIn>
    </header>
  )
}
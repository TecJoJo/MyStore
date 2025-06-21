import LoadingSpinner from "./components/LoadingSpinner"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useState } from "react"
import { registerApiRequest } from "../../api/authentication/registerApiRequest"
function Register() {
  const navigate = useNavigate()

  type RegisterState = "idle" | "pending" | "succeeded" | "rejected"

  const [registerSate, setRegisterState] = useState<RegisterState>("idle")

  useEffect(() => {
    // Reset the register state when the component mounts
    setRegisterState("idle")
  }, [])

  useEffect(() => {
    if (registerSate === "succeeded") {
      // Redirect to login page after successful registration after a short delay
      setTimeout(() => {
        navigate("/login")
      }, 2000)
    }
  })

  const failedOnRegistering = registerSate === "rejected" && (
    <div
      data-cy="register-failed-status"
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-center"
    >
      Failed to register. Please check your email and password.
    </div>
  )

  const succeededOnRegistering = registerSate === "succeeded" && (
    <div data-cy="register-succeeded-status">
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 text-center">
        Registration successful! You can now log in.
      </div>
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 text-center">
        Redirecting to login page...
      </div>
    </div>
  )

  interface RegisterFormFields extends HTMLFormControlsCollection {
    email: HTMLInputElement
    password: HTMLInputElement
  }
  interface RegisterFormElement extends HTMLFormElement {
    readonly elements: RegisterFormFields
  }

  const handleSubmit = (e: React.FormEvent<RegisterFormElement>): void => {
    e.preventDefault()

    const email = e.currentTarget.elements.email.value
    const password = e.currentTarget.elements.password.value

    setRegisterState("pending")

    registerApiRequest({ email, password })
      .then(() => {
        setRegisterState("succeeded")
      })
      .catch((error: unknown) => {
        console.error("Registration failed:", error)
        setRegisterState("rejected")
      })
  }

  const isRegistering = registerSate === "pending"

  return (
    <div className="flex h-screen w-full md:w-10/12 mx-auto">
      {/* Left: Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-50 p-8">
        <div className="w-full max-w-sm">
          {failedOnRegistering}
          {succeededOnRegistering}
          <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm mb-1">Email Address</label>
              <input
                type="email"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-black py-1"
                name="email"
                data-cy="register-email"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full border-b border-gray-400 focus:outline-none focus:border-black py-1 pr-8"
                  name="password"
                  data-cy="register-password"
                />
              </div>
              {/* loading indicator */}
              {isRegistering && <LoadingSpinner />}
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:opacity-90"
              data-cy="register-submit"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center text-sm">
            Already Have An Account?{" "}
            <a
              href="/login"
              data-cy="register-anchor-login"
              className="text-[#c5a880] hover:underline"
            >
              Login in here
            </a>
          </p>
        </div>
      </div>

      {/* Right: Branding */}
      <div className="w-1/2 md:flex bg-gradient-to-br from-zinc-600 to-black hidden items-center justify-center ">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#c5a880] tracking-widest">
            Welcome
          </h1>
          <h1 className="text-5xl font-bold text-[#c5a880] tracking-widest flex items-center justify-center">
            It is nice to see you here
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Register

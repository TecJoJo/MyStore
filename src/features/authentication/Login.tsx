import { login } from "./authenticationSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import LoadingSpinner from "./components/LoadingSpinner"
import { useEffect } from "react"
import { useNavigate } from "react-router"
function Login() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const loginState = useAppSelector(state => state.authentication.loginState)

  interface LoginFormFields extends HTMLFormControlsCollection {
    email: HTMLInputElement
    password: HTMLInputElement
  }
  interface LoginFormElement extends HTMLFormElement {
    readonly elements: LoginFormFields
  }

  useEffect(() => {
    if (loginState === "succeeded") {
      navigate("/")
    }
  }, [loginState, navigate, dispatch])

  const handleSubmit = (e: React.FormEvent<LoginFormElement>) => {
    e.preventDefault()

    const email = e.currentTarget.elements.email.value

    const password = e.currentTarget.elements.password.value
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(login({ email, password }))
  }

  const FailedOnLoggingIn = loginState === "rejected" && (
    <div
      data-cy="login-failed-status"
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-center"
    >
      Failed to log in. Please check your email and password.
    </div>
  )

  const isLoggingIn = !!(loginState === "pending")
  return (
    <div className="flex h-screen w-full md:w-10/12 mx-auto">
      {/* Left: Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-50 p-8">
        <div className="w-full max-w-sm">
          {FailedOnLoggingIn}
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm mb-1">Email Address</label>
              <input
                type="email"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-black py-1"
                name="email"
                data-cy="login-email"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full border-b border-gray-400 focus:outline-none focus:border-black py-1 pr-8"
                  name="password"
                  data-cy="login-password"
                />
              </div>
              {/* loading indicator */}
              {isLoggingIn && <LoadingSpinner />}
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:opacity-90"
              data-cy="login-submit"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-sm">
            Don’t Have An Account?{" "}
            <a
              data-cy="login-anchor-signUp"
              href="register"
              className="text-[#c5a880] hover:underline"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>

      {/* Right: Branding */}
      <div className="w-1/2 md:flex bg-gradient-to-br from-zinc-600 to-black hidden items-center justify-center ">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#c5a880] tracking-widest">
            HEY
          </h1>
          <h1 className="text-5xl font-bold text-[#c5a880] tracking-widest flex items-center justify-center">
            HOW ARE YOU DOING TODAY?
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Login

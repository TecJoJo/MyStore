import { login } from "./authenticationSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"

function Login() {
  const dispatch = useAppDispatch()
  const loginState = useAppSelector(state => state.authentication.loginState)

  interface LoginFormFields extends HTMLFormControlsCollection {
    email: HTMLInputElement
    password: HTMLInputElement
  }
  interface LoginFormElement extends HTMLFormElement {
    readonly elements: LoginFormFields
  }

  const handleSubmit = (e: React.FormEvent<LoginFormElement>) => {
    e.preventDefault()
    console.log("form submitted")

    const email = e.currentTarget.elements.email.value
    console.log("email", email)

    const password = e.currentTarget.elements.password.value
    console.log("password", password)
    dispatch(login({ email, password }))
  }

  const loginIndicator = (state: typeof loginState) => {
    if (state === "pending") return <p>Loading...</p>
    if (state === "succeeded") return <p>Welcome!</p>
    if (state === "rejected")
      return <p>Oops! Something went wrong, we failed to log you in</p>
  }

  return (
    <form onSubmit={handleSubmit}>
      {loginIndicator(loginState)}
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <button type="submit">Login</button>
    </form>
  )
}

export default Login

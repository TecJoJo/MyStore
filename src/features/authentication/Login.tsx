import { login } from "./authenticationSlice"
import { useAppDispatch } from "../../app/hooks"

function Login() {
  const dispatch = useAppDispatch()

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

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <button type="submit">Login</button>
    </form>
  )
}

export default Login

function Register() {
  return (

<div className="auth-container">

<h1>Create Account</h1>

<form>

<input
type="text"
placeholder="Full Name"
/>

<input
type="email"
placeholder="Email"
/>

<input
type="password"
placeholder="Password"
/>

<input
type="password"
placeholder="Confirm Password"
/>

<button>
Register
</button>

</form>

</div>

  );
}

export default Register;
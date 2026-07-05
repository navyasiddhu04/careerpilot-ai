function Login() {
  return (
    <div className="auth-container">

      <h1>Login</h1>

      <form>

        <input
          type="email"
          placeholder="Enter Email"
        />

        <input
          type="password"
          placeholder="Enter Password"
        />

        <button>
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;
const LoginForm = ({ onLogin }) => {
  const handeleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;

    const { login, password } = form.elements;
    onLogin({
      login: login.value,
      password: password.value,
    });

    form.reset();
  };

  return (
    <form onSubmit={handeleSubmit}>
      <input type="text" name="login" />
      <input type="password" name="password" />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;

import "./styles.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
interface SignupProps {
  signupType: "login" | "signup" | undefined;
}

function Signup({ signupType }: SignupProps) {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  

  const handleChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    console.log(login);
  }, [login, password]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Username:", login);
    console.log("Password:", password);
    setLogin("");
    setPassword("");

  };

  return (
    <>
      <div className="signup-container">
        {signupType === "signup" ? <h1>Criar conta</h1> : <h1>Criar conta</h1>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Login"
            value={login}
            onChange={handleChangeLogin}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={handleChangePassword}
          />
          <input
            type="submit"
            value={signupType === "login" ? "Entrar" : "Criar"}
          />
        </form>
        {signupType === "login" ? (
          <NavLink to="/signup">Criar </NavLink>
        ) :  null}
      </div>
    </>
  );
}

export default Signup;
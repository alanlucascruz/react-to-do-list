import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setStatus, signIn } from "../../../store/slices/authSlice";

import Card from "../../../components/Card";
import Input from "../../../components/FormControl/Input";
import Button from "../../../components/Button";

import "./style.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [triedToSubmit, setTriedToSubmit] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);

  const onSubmit = (e) => {
    e.preventDefault();

    setTriedToSubmit(true);

    if (!(email && password)) return;

    dispatch(signIn({ email, password }));
  };

  useEffect(() => {
    if (status === "succeeded") {
      navigate("/", { replace: true });

      dispatch(setStatus("idle"));
    }
  }, [status, navigate, dispatch]);

  return (
    <div id="login">
      <Card>
        <h2 className="logo">
          <i className="bi bi-ui-checks-grid"></i>
          tasks.
        </h2>

        <form onSubmit={(e) => onSubmit(e)}>
          <h2 className="title">Bem-vindo(a)</h2>
          <h4 className="subtitle">Por favor, entre com os seus dados.</h4>

          {status === "failed" && <div className="error">{error}</div>}

          <Input
            label="E-mail"
            placeholder="Insira o seu e-mail"
            type="email"
            value={email}
            setValue={(e) => setEmail(e.target.value)}
            showError={triedToSubmit && email === ""}
            errorMessage="Campo obrigatório"
          />

          <Input
            label="Senha"
            placeholder="Insira a sua senha"
            type="password"
            value={password}
            setValue={(e) => setPassword(e.target.value)}
            showError={triedToSubmit && password === ""}
            errorMessage="Campo obrigatório"
          />

          <Button
            type="submit"
            text={status === "loading" ? "Aguarde..." : "Entrar"}
            disabled={status === "loading"}
          />

          <div className="sign-up">
            Não possui uma conta? <Link to="/auth/register">Registre-se</Link>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Login;

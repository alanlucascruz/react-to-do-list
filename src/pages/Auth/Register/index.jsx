import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setError, setStatus, signUp } from "../../../store/slices/authSlice";

import Card from "../../../components/Card";
import Input from "../../../components/FormControl/Input";
import Button from "../../../components/Button";

import "./style.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [triedToSubmit, setTriedToSubmit] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);

  const onSubmit = (e) => {
    e.preventDefault();

    setTriedToSubmit(true);

    if (!(name && email && password && confirmPassword)) return;

    if (!(password === confirmPassword)) {
      return dispatch(setError("A senha é diferente da sua confirmação."));
    }

    dispatch(signUp({ name, email, password }));
  };

  useEffect(() => {
    if (status === "succeeded") {
      navigate("/", { replace: true });

      dispatch(setStatus("idle"));
    }
  }, [status, navigate, dispatch]);

  return (
    <div id="register">
      <Card>
        <h2 className="logo">
          <i className="bi bi-ui-checks-grid"></i>
          tasks.
        </h2>

        <form onSubmit={(e) => onSubmit(e)}>
          <h2 className="title">Registre-se</h2>
          <h4 className="subtitle">Por favor, preencha o formulário.</h4>

          {error && <div className="error">{error}</div>}

          <Input
            label="Nome"
            placeholder="Insira o seu nome"
            value={name}
            setValue={(e) => setName(e.target.value)}
            showError={triedToSubmit && name === ""}
            errorMessage="Campo obrigatório"
          />

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

          <Input
            label="Confirmação da Senha"
            placeholder="Confirme a sua senha"
            type="password"
            value={confirmPassword}
            setValue={(e) => setConfirmPassword(e.target.value)}
            showError={triedToSubmit && confirmPassword === ""}
            errorMessage="Campo obrigatório"
          />

          <Button
            type="submit"
            text={status === "loading" ? "Aguarde..." : "Salvar"}
            disabled={status === "loading"}
          />

          <div className="sign-up">
            Já possui uma conta? <Link to="/auth">Faça Login</Link>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Register;

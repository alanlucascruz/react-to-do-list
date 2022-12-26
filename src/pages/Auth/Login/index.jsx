import { Link, useNavigate } from "react-router-dom";
import Card from "../../../components/Card";
import Input from "../../../components/FormControl/Input";
import Button from "../../../components/Button";
import "./style.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div id="login">
      <Card>
        <h2 className="logo">
          <i className="bi bi-ui-checks-grid"></i>
          tasks.
        </h2>

        <form onSubmit={() => navigate("/")}>
          <h2 className="title">Bem-vindo(a)</h2>
          <h4 className="subtitle">Por favor, entre com os seus dados.</h4>

          <Input
            label="E-mail"
            placeholder="Insira o seu e-mail"
            type="email"
          />
          <Input
            label="Senha"
            placeholder="Insira a sua senha"
            type="password"
          />

          <Button text="Entrar" />

          <div className="sign-up">
            Não possui uma conta? <Link to="/auth/register">Registre-se</Link>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Login;

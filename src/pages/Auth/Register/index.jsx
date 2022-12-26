import { Link, useNavigate } from "react-router-dom";
import Card from "../../../components/Card";
import Input from "../../../components/FormControl/Input";
import Button from "../../../components/Button";
import "./style.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div id="register">
      <Card>
        <h2 className="logo">
          <i className="bi bi-ui-checks-grid"></i>
          tasks.
        </h2>

        <form onSubmit={() => navigate("/")}>
          <h2 className="title">Registre-se</h2>
          <h4 className="subtitle">Por favor, preencha o formulário.</h4>

          <Input label="Nome" placeholder="Insira o seu nome" />
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
          <Input
            label="Confirmação da Senha"
            placeholder="Confirme a sua senha"
            type="password"
          />

          <Button text="Salvar" />

          <div className="sign-up">
            Já possui uma conta? <Link to="/auth">Faça Login</Link>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Login;

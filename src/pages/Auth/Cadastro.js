import "./Auth.css";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      nome,
      sobrenome,
      email,
      senha,
      confirmacaoSenha,
    };

    console.log(user);
  };

  return (
    <div id="register">
      <h2 className="logo">veetask</h2>
      <p className="subtitle">
        Cadastre-se para começar a gerenciar as suas tarefas.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          onChange={(e) => setNome(e.target.value)}
          value={nome || ''}
        />
        <input
          type="text"
          placeholder="Sobrenome"
          onChange={(e) => setSobrenome(e.target.value)}
          value={sobrenome || ''}
        />
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email || ''}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setSenha(e.target.value)}
          value={senha || ''}
        />
        <input
          type="password"
          placeholder="Confirme a senha"
          onChange={(e) => setConfirmacaoSenha(e.target.value)}
          value={confirmacaoSenha || ''}
        />
        <input type="submit" placeholder="Cadastrar" />
      </form>
      <p>
        Já tem conta? <Link to="/login">Entrar.</Link>
      </p>
    </div>
  );
};

export default Cadastro;

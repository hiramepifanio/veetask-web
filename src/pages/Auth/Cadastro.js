import './Auth.css'

import { Link } from 'react-router-dom'

const Cadastro = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div id='register'>
      <h2 className='logo'>veetask</h2>
      <p className='subtitle'>Cadastre-se para começar a gerenciar as suas tarefas.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Nome' />
        <input type="email" placeholder='E-mail' />
        <input type="password" placeholder='Senha' />
        <input type="password" placeholder='Confirme a senha' />
        <input type="submit" placeholder='Cadastrar' />
      </form>
      <p>
        Já tem conta? <Link to='/login'>Entrar.</Link>
      </p>
    </div>
  )
}

export default Cadastro
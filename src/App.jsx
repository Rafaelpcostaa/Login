import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Input from './Components/input';
import Titulo from './Components/titulo';
import Botao from './Components/botao';
import { faLock, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [count, setCount] = useState(0);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='App'>
      <div className="caixa-login">
        <form action="">
          <Titulo Icone={faUserCircle}/>
          <br/>
          <Input nome={"Usuário:"} tipo={"Text"} Icone={faUser}/>
          <br/>
          <Input nome={"Senha:"} tipo={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} Icone={faLock}/>
          <br/>
          <div className="mostrar_senha">
            <label htmlFor="">
              <input type="checkbox" checked={showPassword} onChange={togglePasswordVisibility} />Mostrar Senha
            </label>
          </div>
          <Botao/>
        </form>
      </div>
    </div>
  )
}

export default App

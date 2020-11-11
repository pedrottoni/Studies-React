import { useState } from "react";

function Home() {
  return (
    <div>
      <h1>Gatoooona</h1>
      <CapsLock texto="Eu esqueci do nosso dia esse mês" />
      <CapsLockII>Só que um textinho na minha agenda me fez lembrar</CapsLockII>
      <h3>
      <CapsLockII>E o sorriso</CapsLockII> no meu rosto que se abriu.. agora não quer mais fechar
      </h3>
      <Contador />
    </div>
  );
}

function CapsLock(props) {
  const textoInserido = props.texto;
  const textoEmCaixaAlta = textoInserido.toUpperCase();

  return <div>{textoEmCaixaAlta}</div>;
}

function CapsLockII(props) {
  const textoInserido = props.children;
  const textoEmCaixaAlta = textoInserido.toUpperCase();

  return <div>{textoEmCaixaAlta}</div>;
}

function Contador() {
  const [contador, setContador] = useState(10);

  function adicionarContador() {
    setContador(contador * 2);
  }

  return (
    <div>
      <h2>Sua beleza é maior do que <span style={{color: 'red'}}>{contador}</span> milhões de estrelas juntas iluminando o Nilo</h2>
      <button onClick={adicionarContador}>É mais?</button>
    </div>
  );
}

export default Home;

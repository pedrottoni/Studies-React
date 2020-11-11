import { useState } from "react";

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <CapsLock texto="Me deixe em caixa alta, por favor" />
            <CapsLockII>Me deixe em caixa alta também, por favor</CapsLockII>
            <Contador />
        </div>
    )
}

function CapsLock(props) {
    const textoInserido = props.texto;
    const textoEmCaixaAlta = textoInserido.toUpperCase();

    return <div>{textoEmCaixaAlta}</div>;
};

function CapsLockII(props) {
    const textoInserido = props.children;
    const textoEmCaixaAlta = textoInserido.toUpperCase();

    return <div>{textoEmCaixaAlta}</div>;
};

function Contador() {
    const [contador, setContador] = useState(0);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <h2>{contador}</h2>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    );
};

export default Home
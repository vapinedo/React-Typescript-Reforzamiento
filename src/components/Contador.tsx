import { useState } from "react";

export const Contador = () => {

  const [valor, setValor] = useState(10);

  const decrementar = (numero: number) => {
    setValor(valor - numero);
  };

  const incrementar = (numero: number) => {
    setValor(valor + numero);
  };

  return (
    <>
      <h3>
        Contador <small>{valor}</small>
      </h3>

      <button onClick={() => decrementar(1)} className="btn btn-primary">-1</button>
      <button onClick={() => incrementar(1)} className="btn btn-danger mx-2">+1</button>
    </>
  );
};

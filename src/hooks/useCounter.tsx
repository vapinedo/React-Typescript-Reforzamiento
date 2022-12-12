import { useState } from 'react';

export const useCounter = (initialValue: number = 10) => {
    const [valor, setValor] = useState(initialValue);

    const decrementar = (numero: number) => {
      setValor(valor - numero);
    };
  
    const incrementar = (numero: number) => {
      setValor(valor + numero);
    };

    return { decrementar, incrementar, valor };
}

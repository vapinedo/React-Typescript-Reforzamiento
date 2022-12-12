import { useCounter } from '../hooks/useCounter';

export const ContadorConHook = () => {
  const { decrementar, incrementar, valor } = useCounter();

  return (
    <>
      <h3>
        Contador con Hook: <small>{valor}</small>
      </h3>

      <button onClick={() => decrementar(1)} className="btn btn-primary">-1</button>
      <button onClick={() => incrementar(1)} className="btn btn-danger mx-2">+1</button>
    </>
  );
};

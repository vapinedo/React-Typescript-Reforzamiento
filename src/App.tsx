
// import { TiposBasicos } from "./typescript/TiposBasicos";
// import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
// import { Funciones } from "./typescript/Funciones";
// import { Contador } from "./components/Contador";
import { ContadorConHook } from "./components/ContadorConHook";

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introducción a TS con React</h1>
      <hr />
      {/* <TiposBasicos /> */}
      {/* <ObjetosLiterales /> */}
      {/* <Funciones /> */}
      <ContadorConHook />
    </div>
  )
}

export default App;
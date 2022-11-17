export const TiposBasicos = () => {

    const nombre: string = 'Victor';
    const edad: number = 22;
    const estaActivo = true;
    const listaPoderes = ['Volar', 'Velocidad'];

  return (
    <>
        <h3>Tipos Básicos</h3>
        {nombre}, {edad}, {estaActivo.toString()}
        <br />
        {listaPoderes.join(', ')}
    </>
  )
}

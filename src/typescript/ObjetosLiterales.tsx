
interface Persona {
    nombre: string,
    edad: number,
    direccion: Direccion
}

interface Direccion {
    pais: string;
    casaNo: number;
}

export const ObjetosLiterales = () => {
    const persona: Persona = {
        nombre: 'Victor',
        edad: 20,
        direccion: {
            pais: 'Colombia',
            casaNo: 400
        }
    };

  return (
    <>
        <h3>Objetos Literales</h3>
        <code>
            <pre>{JSON.stringify(persona, null, 3)}</pre>
        </code>
    </>
  )
}

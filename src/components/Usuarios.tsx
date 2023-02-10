import { useEffect } from 'react';
import { reqRestApi } from '../api/reqRes';

export const Usuarios = () => {

    useEffect(() => {
        reqRestApi.get('/users')
            .then(res => {
                console.log(res.data.data);
            })
            .catch(console.log)
    }, []);    

  return (
    <>
        <h3>Usuarios</h3>

        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>

            <tbody></tbody>
        </table>
    </>
  )
}
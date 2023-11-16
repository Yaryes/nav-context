import { useContext } from "react"
import { UsuarioContext } from "../context/UsuarioContext"

export const AboutScreen = () => {

  const {usuario} = useContext(UsuarioContext)
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Tecnologia</th>
            <th scope="col">Redes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
           <th>{usuario.nombre}</th>
           <th>{usuario.tecnologia}</th>
           <th>{usuario.redes}</th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

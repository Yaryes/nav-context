import { useForm } from "../hook/useForm"
import { useContext } from "react"
import { UsuarioContext } from "../context/UsuarioContext"

export const LoginScreen = () => {
  
  const initialForm = {
    nombre: '',
    tecnologia: '',
    redes: ''
  }
  
  const { formState, nombre, tecnologia, redes, onInputChange } = useForm(initialForm)
  
  const { setUsuario } = useContext(UsuarioContext)

  const onSubmit = (e) => {
    e.preventDefault()
    setUsuario(formState)
  }
  
  return (
    <>
      <form className="container p-2" onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input 
            type="text" 
            className="form-control" 
            name="nombre"
            value={nombre}
            onChange={onInputChange}>  
          </input>
        </div>
        <div className="mb-3">
          <label htmlFor="tecnologia" className="form-label">Tecnologia</label>
          <input 
            type="text" 
            className="form-control" 
            name="tecnologia"
            value={tecnologia}
            onChange={onInputChange}>
          </input>
        </div>
        <div className="mb-3">
          <label htmlFor="redes" className="form-label">Redes</label>
          <input 
            type="text" 
            className="form-control" 
            name="redes"
            value={redes}
            onChange={onInputChange}>
          </input>
        </div>
        <button type="submit" className="btn btn-primary">Ingresar Usuario </button>
      </form>
    </>
  )
}

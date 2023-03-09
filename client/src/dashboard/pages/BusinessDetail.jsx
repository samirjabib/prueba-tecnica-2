import { useParams } from "react-router-dom"

export const BusinessDetail = () => {
  const { id } = useParams()
  console.log(id)
  return (
    <div>hola soy el negocio con {id}</div>
  )
}

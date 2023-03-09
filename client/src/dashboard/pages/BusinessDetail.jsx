import { useParams } from "react-router-dom"
import { useGetCompaniesByNitQuery } from "../../store/api/businessApi"

export const BusinessDetail = () => {
  const { id } = useParams()

  const { data, isLoading, error } = useGetCompaniesByNitQuery(id)
  console.log(data)

  return (
    <div>hola soy el negocio cona {id}</div>
  )
}

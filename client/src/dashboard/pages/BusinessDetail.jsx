import { useParams } from "react-router-dom"

export const BusinessDetail = () => {
  const { id } = useParams()
  console.log(id)
  return (
    <div>BusinessDetail</div>
  )
}

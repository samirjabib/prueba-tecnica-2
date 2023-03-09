import { useParams } from "react-router-dom";
import { useGetCompaniesByNitQuery } from "../../store/api/businessApi";
import { ProductList } from "../components";
import { CompanyDetail } from "../components/CompanyDetail";

export const BusinessDetail = ({user}) => {
  const { id } = useParams();

  const { data, isLoading, error } = useGetCompaniesByNitQuery(id);

  if (isLoading) {
    return <div>Cargando</div>;
  }

  const { name, address, inventary, phone } = data;
  const { products } = inventary;
  console.log(products);

  return (
    <div className="mt-20">
      <CompanyDetail name={name} address={address} phone={phone} />
      <ProductList products={products} user={user} />
    </div>
  );
};

import { useNavigation, useParams, useNavigate } from "react-router-dom";
import { useGetCompaniesByNitQuery } from "../../store/api/businessApi";
import { ProductList } from "../components";
import { CompanyDetail } from "../components/CompanyDetail";
import { MdOutlineArrowBack } from "react-icons/md";

export const BusinessDetail = ({ user }) => {
  const { id } = useParams();
  const navigate = useNavigate()

  const { data, isLoading, error } = useGetCompaniesByNitQuery(id);

  if (isLoading) {
    return <div>Cargando</div>;
  }

  const backRoute = () => {
    navigate(-1)
  }

  const { name, address, inventary, phone } = data;
  const { products } = inventary;

  return (
    <div className="mt-20">
      <div className="mb-16 relative bottom-16 ml-4 cursor-pointer"
      onClick={backRoute}
      >
        <MdOutlineArrowBack size={30} color='white'/>
      </div>
      <CompanyDetail name={name} address={address} phone={phone} />
      <ProductList products={products} user={user} />
    </div>
  );
};

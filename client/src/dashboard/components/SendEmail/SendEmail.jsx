import { InputCustom, Loading } from "../../../components";
import { useForm } from "../../../hooks";
import { useCreateProductCompanyMutation } from "../../../store/api/businessApi";

export const SendEmail = ({handleModal, inventoryId}) => {
  const { formState, isFormValid, onInputChange, onResetForm, } = useForm({
    email: "",
  });

  const { email } = formState

  const [sendEmail, {isLoading, error}] = useCreateProductCompanyMutation()

  const onSubmit = async(e) => {
    e.preventDefault()
    onResetForm()
    handleModal()
  }

  return (
    <form className="" onSubmit={onSubmit}>
      <InputCustom
        onChange={onInputChange}
        type="text"
        name="email"
        label="Email"
        value={email}
      />


      <div className="flex gap-4">
        <button
          className=" mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="submit"
        >
          {isLoading ? (
              <Loading color="#36d7b7" size={18} />
            ) : (
              "Send"
            )}
        </button>
        <button
          className=" mt-4 text-gray-400  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all shadow hover:scale-95"
          type="button"
          onClick={handleModal}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

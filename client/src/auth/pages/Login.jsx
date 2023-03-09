import { CiDark } from "react-icons/ci";
import { BsSun } from "react-icons/BS";

import { useForm } from "../../hooks/useFormHook";
import { InputCustom } from "../components";

import { useAuthStore, useProviderTheme } from "../../hooks";

const formValidations = {
  email: [(value) => value.includes("@"), "The email must contain a @"],
  password: [
    (value) => value.length >= 6,
    "Password must contain 6 letters or more.",
  ],
};

const formFields = {
  email: "",
  password: "",
};

export const Login = () => {
  const { onInputChange, formState, isFormValid, onResetForm } = useForm(
    formFields,
    formValidations
  );
  const { email, password } = formState;
  const { onLoginEmailAndPassword } = useAuthStore();

  const onSubmit = () => {};

  return (
    <div className=" mx-auto  h-screen items-center justify-center flex flex-col bg-gray-500 dark:bg-black  p-4">
      <div className=" shadow-md border border-gray-200 rounded-lg w-full max-w-md p-4  lg:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto  h-96">
        <form className="space-y-6 " onSubmit={onSubmit}>
          <div className="flex flex-row gap-4 items-center">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-8 py-4">
              Sign in to our platform
            </h3>
            {/* <div
              onClick={setTheme}
              className=" flex justify-end relative cursor-pointer border border-dark dark:border-white rounded-full p-2 transition-all hover:bg-gray-700"
            >
              {theme === "dark" ? (
                <CiDark size={18} color="white" />
              ) : (
                <BsSun size={18} color="white" />
              )}
            </div> */}
          </div>
          <div>
            <InputCustom
              onChange={onInputChange}
              name="email"
              value={email}
              type="email"
              label="Email"
              placeholder=" "
            />
            <InputCustom
              onChange={onInputChange}
              name="password"
              value={formFields.password}
              type="password"
              label="Password"
              placeholder=" "
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          >
            Login to your account
          </button>
        </form>
      </div>
    </div>
  );
};

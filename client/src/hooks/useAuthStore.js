import { onLogin, onLogout } from "../store/slices/auth/authSlice";

import { useDispatch, useSelector } from "react-redux";

export const useAuthStore = () => {
  const { status, user, token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const onLoginEmailAndPassword = (payload) => {
    console.log(payload);
    dispatch(onLogin(data));
  };

  const onLogoutHandle = () => {
    dispatch();
  };

  return {
    onLoginEmailAndPassword,
  };
};

import { onLogin, onLogout } from "../store/slices/auth/authSlice";

import { useDispatch, useSelector } from "react-redux";

export const useAuthStore = () => {
  const { status, user, token } = useSelector((state) => state.auth);
  
  console.log(status, user, token)
  
  const dispatch = useDispatch();

  const onLoginEmailAndPassword = (payload) => {
    const { token, user } = payload
    
    dispatch(onLogin({ user, token}));
  };

  const onLogoutHandle = () => {
    dispatch();
  };

  return {
    onLoginEmailAndPassword,
  };
};

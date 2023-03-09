import { onLogin, onLogout } from "../store/slices/auth/authSlice";


import { useDispatch, useSelector } from "react-redux";


export const useAuthStore = () => {

    const dispatch = useDispatch();


    const onLoginEmailAndPassword = (data) => {
        dispatch(onLogin(data));
    }


    const onLogoutHandle = () => {
        dispatch();
    }

    return{

        onLoginEmailAndPassword,
    }

}
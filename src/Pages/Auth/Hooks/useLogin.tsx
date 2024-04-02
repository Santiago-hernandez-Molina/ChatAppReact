import { useState } from "react";
import { User } from "../../../Models/User.model";
import { login } from "../Services/Auth.services";
import { useDispatch } from "react-redux";
import { setUser } from "../../../Store/Slices/UserSlice";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const initialErr: string | null = null;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(initialErr);

  const fetchReq = async (email: string, password: string) => {
    setIsLoading(true);
    setErr(null);

    await new Promise((resolve, _) => {
      setTimeout(() => {
        resolve(console.log("Hola"));
      }, 500);
    });


    login({
      email: email,
      password: password,
    })
      .then((user: User | null) => {
        if (user == null) {
          return;
        }
        user.authorized = true;
        dispatch(setUser(user));
        setIsLoading(false);
        navigate("/");
      })
      .catch((reqErr) => {
        setIsLoading(false);
        setErr(reqErr.toString());
      });
  };

  return {
    err,
    isLoading,
    fetchReq,
  };
};

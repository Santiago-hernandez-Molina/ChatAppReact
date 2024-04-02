import { AuthLayout } from "./Layout/AuthLayout";
import { useLogin } from "./Hooks/useLogin";
import { useField } from "../../Shared/Hooks/useForm";
import style from "./Login.module.css";
import * as feather from "feather-icons";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store";
import { User } from "../../Models/User.model";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const LoginIndex = () => {
  const { reset: resetEmail, ...email } = useField("text");
  const { reset: resetPassword, ...password } = useField("password");
  const { fetchReq, isLoading, err } = useLogin();
  const user: User = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  const onLogin = (event: any) => {
    event.preventDefault();
    fetchReq(email.value.toString(), password.value.toString());
  };

  useEffect(() => {
    if (user.authorized) {
      navigate("/");
    }
  }, []);

  const loadingIcon = feather.icons["loader"].toSvg({});

  return (
    <AuthLayout>
      <div className={style["container"]}>
        <h1>Login</h1>
        <form onSubmit={onLogin}>
          <label htmlFor="email">Email</label>
          <input
            {...email}
            id="email"
            autoComplete="off"
            placeholder="foo.bar@gmail.com"
          />

          <label htmlFor="password">Password</label>
          <input
            {...password}
            id="password"
            autoComplete="off"
            placeholder="password"
          />

          <button type="submit" disabled={isLoading}>
            Submit
          </button>
        </form>

        {err ? (
          <p style={{ color: "var(--c-red)", fontWeight: "bold" }}>{err}</p>
        ) : (
          <></>
        )}
        {isLoading ? (
          <p className={style.loading}>
            <span dangerouslySetInnerHTML={{ __html: loadingIcon }}></span>
          </p>
        ) : (
          <></>
        )}
      </div>
    </AuthLayout>
  );
};

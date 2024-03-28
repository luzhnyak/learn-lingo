import { Navigate } from "react-router-dom";
import { FC } from "react";
import { useLocal } from "../store";

interface IProps {
  component: any;
  redirectTo: string;
}

export const PrivateRoute: FC<IProps> = ({
  component: Component,
  redirectTo = "/signin",
}) => {
  const { isLogin } = useLocal((state) => ({
    isLogin: state.isLogin,
  }));

  return !isLogin ? <Navigate to={redirectTo} /> : Component;
};

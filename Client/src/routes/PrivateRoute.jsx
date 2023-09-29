import { Navigate, useLocation } from "react-router";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/features/users/userSlice";

const PrivateRoute = ({ children }) => {
  //   const { user, loading } = useContext(AuthContext)
  const user = useSelector(selectUser);

  const location = useLocation();

  //   if (loading) {
  //     return <Loader></Loader>
  //   }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;

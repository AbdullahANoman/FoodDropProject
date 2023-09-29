import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../redux/features/users/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useEffect, useState } from "react";
import { checkUserRole } from "../api/user/user";

export const checkUser = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [role, setRole] = useState("client");

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in, send the user's details to redux, store the current user in the state
        dispatch(
          login({
            userEmail: userAuth.email,
            userRole: role,
            userName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch, role]);

  useEffect(() => {
    checkUserRole(user?.userEmail).then((data) => {
      if (data?.userRole == "admin") {
        setRole("admin");
      } else if (data?.userRole == "seller") {
        setRole("seller");
      }
    });
  }, [user]);
};

export const categories = [
  {
    label: "Select Category",
  },
  {
    label: "Appetizers",
  },
  {
    label: "Desserts",
  },
  {
    label: "Hot Dishes",
  },
  {
    label: "Meat",
  },
  {
    label: "Pasta",
  },
  {
    label: "Sandwiches",
  },
  {
    label: "Sides",
  },
];

export const tags = [
  {
    label : 'Select Tags'
  },
  {
    label: "Bread",
  },
  {
    label: "Dessert",
  },
  {
    label: "Fish",
  },
  {
    label: "Hot",
  },
  {
    label: "Meat",
  },
  {
    label: "Pasta",
  },
  {
    label: "Salad",
  },
  {
    label: "Starter",
  },
  {
    label: "Sweet",
  },
];

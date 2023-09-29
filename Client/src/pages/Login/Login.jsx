import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TbFidgetSpinner } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";
import { set, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../../redux/features/users/userSlice";
import { auth, googleProvider } from "../../firebase/firebase.config";
import { saveUser } from "../../api/user/user";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const from = location?.state?.pathname || "/";
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //   with google signIn
  const handelGoogleRegister = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((user) => {
        dispatch(
          login({
            userEmail: user?.user.email,
            userName: user?.user.displayName,
            role: "client",
            photoURL: user?.user.photoURL,
          })
        );

        setLoading(false);
        saveUser(user?.user.email, {
          userEmail: user?.user.email,
          userName: user?.user.displayName,
          userImage: user?.user.photoURL,
        });
        toast.success("User created successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoading(false);
        toast.success(error.message);
      });
  };

  //   with button sign in
  const onSubmit = (data) => {
    setLoading(true);
    const { email, password } = data || {};
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            userEmail: userAuth.user.email,
            userName: userAuth.user.displayName,
            role: "client",
            photoURL: userAuth.user.photoURL,
          })
        );
        setLoading(false);
        toast.success("Login Successfully");
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        reset();
        setLoading(false);
        toast.success(error.message);
      });
  };
  const handleReset = () => {
    console.log("reset");
  };
  return (
    <div className="backgroundImage ">
      <Link to="/">
        <div className="px-3 md:px-10 md:pt-10 pt-4">
          <img
            src="https://food-drop.themerex.net/wp-content/uploads/2016/12/home-logo.png"
            alt="home page image"
            className="md:w-[200px] w-[180px] fixed"
          />
        </div>
      </Link>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white shadow-2xl  text-gray-900">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Log In</h1>
            <p className="text-sm text-gray-400">Sign in to access FoodDrop</p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter  Email Address"
                  className="w-full px-3 py-2 border rounded-3xl border-gray-300 focus:outline-rose-500 bg-[#FAFAFC] text-gray-900"
                  data-temp-mail-org="0"
                  defaultValue={"abdullahnoman4537@gmail.com"}
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-400">This field is required</span>
                )}
              </div>
              <div>
                <div className="flex justify-between"></div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="Password"
                  defaultValue={"123456"}
                  className="w-full px-3 py-2 border rounded-3xl border-gray-300 focus:outline-rose-500 bg-[#FAFAFC] text-gray-900"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-400">This field is required</span>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-rose-500 w-full rounded-3xl py-3 text-white"
              >
                {loading ? (
                  <TbFidgetSpinner
                    className="animate-spin text-white mx-auto"
                    size={24}
                  ></TbFidgetSpinner>
                ) : (
                  <p>Continue</p>
                )}
              </button>
              <div className="mt-0 pt-0 space-y-0">
                <button
                  onClick={handleReset}
                  className="text-xs hover:underline hover:text-rose-500 text-gray-400"
                >
                  Forgot password?
                </button>
              </div>
            </div>
          </form>

          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div
            onClick={handelGoogleRegister}
            className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
          >
            <FcGoogle size={32} />

            <p>Continue with Google</p>
          </div>
          <p className="px-6 text-sm text-center text-gray-400">
            Don't have an account yet?{" "}
            <Link
              to="/signup"
              className="hover:underline hover:text-rose-500 text-gray-600"
            >
              Sign up
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

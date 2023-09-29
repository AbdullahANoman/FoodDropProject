import { Link, useLocation, useNavigate } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

import { TbFidgetSpinner } from "react-icons/tb";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "../../firebase/firebase.config";
import { login } from "../../redux/features/users/userSlice";
import { saveUser } from "../../api/user/user";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const from = location?.state?.pathname || "/";
  // const {  updateUserProfile, signInWithGoogle } =
  //   useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //   with google sign up
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

  //   with button sign up
  const onSubmit = (data) => {
    setLoading(true);
    const { name, email, password } = data || {};

    // upload image in imgBB
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    console.log(import.meta.env.VITE_IMGBB_API_KEY);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_API_KEY
    }`;
    console.log(name);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((photoData) => {
        const profilePic = photoData?.data?.display_url;
        const userData = {
          userName: name,
          userEmail: email,
          userImage: profilePic,
          userRole: "client",
        };

        createUserWithEmailAndPassword(auth, email, password)
          .then((userAuth) => {
            setLoading(false);
            reset();
            saveUser(email, userData).then((data) => console.log(data));
            toast.success("User Created Successfully");
            navigate(from, { replace: true });
            updateProfile(userAuth.user, {
              displayName: name,
              photoURL: profilePic,
            })
              .then(
                dispatch(
                  login({
                    userEmail: email,
                    userName: name,
                    role: "client",
                    photoURL: profilePic,
                  })
                )
              )
              .catch((error) => {
                setLoading(false);
                toast.success(error.message);
              });
          })
          .catch((error) => {
            setLoading(false);
            reset();
            toast.success(error.message);
          });
      });
  };

  return (
    <>
      <Link to="/">
        <div className="px-3 md:px-10 md:pt-10 pt-4">
          <img
            src="https://food-drop.themerex.net/wp-content/uploads/2016/12/home-logo.png"
            alt="home page image"
            className="md:w-[200px] w-[180px] fixed"
          />
        </div>
      </Link>
      <div className="flex justify-evenly items-center ">
        <div>
          <img
            className="hidden md:block w-[600px]"
            src="https://i.ibb.co/X2R0ZmT/signup.png"
            alt="signUp"
          />
        </div>
        <div className="flex items-center min-h-screen    ">
          <div className="flex flex-col max-w-md p-6 rounded-md  bg-white shadow-2xl   text-gray-900">
            <div className="mb-8 text-center">
              <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
              <p className="text-sm text-gray-400">Welcome to Food Drop</p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate=""
              action=""
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="w-full px-3 py-2 border rounded-3xl border-gray-300 focus:outline-rose-500 bg-[#FAFAFC] text-gray-900"
                    data-temp-mail-org="0"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-red-400">This field is required</span>
                  )}
                </div>
                <div>
                  <label>
                    <input
                      // onChange={(e) => handleImageChange(e.target.files[0])}
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      hidden
                      {...register("image", { required: true })}
                    />
                    {errors.image && (
                      <span className="text-red-400">
                        This field is required
                      </span>
                    )}
                    <div
                      // onClick={() => handleImageChange()}
                      className="w-full px-3 py-2 border rounded-3xl border-gray-300 focus:outline-rose-500 bg-[#FAFAFC] text-gray-400"
                    >
                      {/* {uploadButtonText
                      ? `${uploadButtonText.slice(0, 20)}`
                      : "Upload Image"} */}
                      Select Your Image
                    </div>
                  </label>
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Enter Your Email Here"
                    className="w-full px-3 py-2 border rounded-3xl border-gray-300 focus:outline-rose-500 bg-[#FAFAFC] text-gray-400"
                    data-temp-mail-org="0"
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
                    className="w-full px-3 py-2 border rounded-3xl border-gray-300 focus:outline-rose-500 bg-[#FAFAFC] text-gray-400"
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
                    <p>Create Account</p>
                  )}
                </button>
              </div>
            </form>
            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
              <p className="px-3 text-sm dark:text-gray-400">
                Signup with social accounts
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
              Already have an account?{" "}
              <Link
                to="/login"
                className="hover:underline hover:text-rose-500 text-gray-600"
              >
                Login
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

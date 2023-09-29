import { RiseLoader, SyncLoader } from "react-spinners";
const Loader = () => {
  return (
    <div
      className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <RiseLoader size={15} color="#BAC64A" />
    </div>
  );
};

export default Loader;

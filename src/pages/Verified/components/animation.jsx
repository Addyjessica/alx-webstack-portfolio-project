import Lottie from "lottie-react";
import animateData from "../../../assets/loading.json";

const Animation = () => {
  return (
    <div>
      <Lottie animationData={animateData} />
    </div>
  );
};

export default Animation;

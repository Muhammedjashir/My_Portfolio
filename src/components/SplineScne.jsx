// import "./SplineScene.css";
import Spline from "@splinetool/react-spline";
import Header from "./Header";

export default function SplineScene() {
  return (
    <>
    <div className="bg-gray-200 sticky top-0 z-1 ">
      <div className="spline-scene h-screen w-full relative overflow-hidden  ">
       
        <Header />

        {/* Spline Background */}
        <div className="w-full h-full ">
          <Spline scene="https://prod.spline.design/nTt1vJNseGytwBln/scene.splinecode" />
        </div>
      </div> 
      </div>
    </>
  );
}

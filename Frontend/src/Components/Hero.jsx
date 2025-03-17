import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border      border-gray-400 ">
    {/* <div className="w-full h-[60%] border border-gray-400 flex "> */}
      
      <img src={assets.hero_img} alt="" className="w-[100%]  h-full   " />
    </div>

    
  );
};

export default Hero;

import { TypeAnimation } from "react-type-animation";
import person from '../../../assets/Image1.png'

const Banner = () => {
  return (
    <div className=" bg-[#f99f1c] w-10/12 rounded-2xl px-10 flex justify-center items-center">
      <div className=" flex items-center w-full px-5">
        {/* banner text */}
        <div className=" w-3/5 flex flex-col gap-1">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            `Deliver Food To Your Door Step`
          ]}
          speed={50}
          style={{ fontSize: "2.5em", color: '#ffefe7', fontWeight: 600 }}
        />
        <br />
        <h3 style={{ fontSize: "1em", color: '#ecd3b0', fontWeight: 500 }}>  
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            ` Authentic Food`,
            2000,
            'Fresh Vagitable',
            2000,
            ''

          ]}
          speed={20}
          style={{ fontSize: "1em", color: '#ecd3b0' }}
          repeat={Infinity}
        />,
         Quick Service, Fast Delivery</h3>
        </div>
        {/* banner image */}
        <div className=" w-3/5">
            <img src="/src/assets/Image1.png" alt="" className=" w-full"/>
        </div> 
      </div>
      <div></div>
    </div>
  );
};

export default Banner;

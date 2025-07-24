import { Map } from "@/assets/effects/Banner";
import Text from "@/components/Text";
import { officeLocations } from "@/data/office-location";
import { MapPin, PhoneCall } from "lucide-react";

const Section2 = () => {
  return (
    <section
      className="text-black relative w-full overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(to bottom, #D9E5FB 0%, #FFFFFF 50%)",
      }}>
      <div className="w-full h-full items-center -mt-15 ">
        <img src={Map.src} alt="LeftGlobe" className="w-full h-full " />
        <Text className="font-semibold text-6xl !text-center w-full" tag="p">
          Office Locations
        </Text>
      </div>
      <div className="w-full mt-10 flex flex-col md:flex-row justify-center md:gap-30 items-center pb-15">
        {officeLocations.map((item, idx) => (
          <div
            key={idx}
            className=" max-w-sm p-6 rounded-lg space-y-4 md:mx-20">
            <div className="flex items-center gap-2 text-2xl font-bold">
              {item.country}
            </div>
            <div className="flex items-center gap-2 font-semibold text-[#333333]">
              <span>{item.tagline}</span>
            </div>
            <div className="flex items-start gap-2 text-gray-700">
              <span className="mt-1">
                <MapPin className="w-5 h-5 text-[#888888]" />
              </span>
              <span>{item.address}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <PhoneCall className="w-5 h-5 text-[#888888]" />
              <span>{item.phone}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;

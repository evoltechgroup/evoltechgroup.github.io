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
      <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 grid-rows-1 gap-5 max-w-7xl mx-auto px-4 lg:px-0 pb-10 md:pb-0">
        <div className="w-full h-full col-span-4 col-start-1 lg:col-span-12 lg:col-start-1 items-center lg:-mt-15 ">
          <img src={Map.src} alt="LeftGlobe" className="w-full h-full " />
          <Text
            className="font-semibold text-4xl lg:text-6xl -mt-10 !text-center w-full"
            tag="p">
            Office Locations
          </Text>
        </div>
        <div className="w-full col-span-4 col-start-1 lg:col-span-10 lg:col-start-2 mt-5 lg:mt-10 flex flex-col md:flex-row justify-between gap-10 md:gap-30 items-center pbg-15 lg:pb-20">
          {officeLocations.map((item, idx) => (
            <div key={idx} className=" max-w-sm rounded-lg space-y-4">
              <div className="flex flex-col">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-8">
                    <img src={item.icon.src} />
                  </div>
                  <div className="flex items-center gap-2 text-[32px] font-bold">
                    {item.country}
                  </div>
                </div>
                <div className="flex items-center gap-2 font-semibold text-[#333333]">
                  <span dangerouslySetInnerHTML={{ __html: item.tagline }} />
                </div>
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
      </div>
    </section>
  );
};

export default Section2;

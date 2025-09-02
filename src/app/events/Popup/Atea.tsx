import { growAtlPanelists } from "@/data/eventData";
import Atea from "@/assets/images/Events/atea/Atea.png";
import AteaBg from "@/assets/images/Events/atea/Atea-Bg.png";
const GrowAtlPopup = () => {
  const panelists = growAtlPanelists;

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <img src={Atea.src} alt="GrowATL Event" className="h-16 mx-auto" />

      <div className="flex justify-center">
        <img src={AteaBg.src} alt="GrowATL Logo" className="h-10" />
      </div>

      <h2 className="text-2xl font-bold text-center">GrowATL: The Future of Tech in Atlanta</h2>
      <p className="text-center text-gray-600">September 15, 2025 • 6:00 PM – 9:00 PM</p>
      <p className="text-center text-gray-500">Tech Square, Atlanta, GA</p>
      <p className="text-lg text-gray-700 leading-relaxed">
        Join industry leaders and innovators for an evening of insights, networking, and collaboration. Explore how Atlanta is shaping the future of technology and entrepreneurship.
      </p>

      <div>
        <h3 className="text-xl font-semibold mb-3">The Panelists</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {panelists.map((panelist, index) => (
            <div key={index} className="text-center">
              <img
                src={panelist.image}
                alt={panelist.name}
                className="w-20 h-20 rounded-full mx-auto mb-2"
              />
              <p className="font-medium">{panelist.name}</p>
              <p className="text-sm text-gray-500">{panelist.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <a
          href="/contact?source=ATEA"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
        >
          More Details
        </a>
      </div>
    </div>
  );
};

export default GrowAtlPopup;

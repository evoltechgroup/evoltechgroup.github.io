interface SiiaPopupProps {
  event: any;
}

const SiiaPopup = ({ event }: SiiaPopupProps) => {
  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <img src={event.logo} alt={event.title} className="h-16 mx-auto" />
      <div className="flex justify-center">
        <img src="/innov8-logo.png" alt="INNOV8 Logo" className="h-10" />
      </div>

      <h2 className="text-2xl font-bold text-center">{event.title}</h2>
      <p className="text-center text-gray-600">{event.date}</p>

      <div className="bg-gray-100 p-4 rounded-lg text-center">
        <div className="grid grid-cols-4 gap-4 text-center">
          <div><span className="text-blue-600">🌐</span><br />Transform operations</div>
          <div><span className="text-blue-600">💰</span><br />Cut costs</div>
          <div><span className="text-blue-600">🛠️</span><br />Build Smarter with Cutting-Edge Tech</div>
          <div><span className="text-blue-600">😊</span><br />Delight Customers Seamlessly</div>
        </div>
      </div>

      <p className="text-lg text-gray-700 leading-relaxed text-center">
        {event.details}
      </p>

      <button className="bg-orange-500 text-white px-6 py-2 rounded-full mx-auto block hover:bg-orange-600">
        Schedule call
      </button>
    </div>
  );
};

export default SiiaPopup;
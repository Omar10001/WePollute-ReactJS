
const AirPollution = ({ data }) => {
    
  return (
    <div
      className={`animate__animated animate__fadeIn animate__faster	 mt-8 w-80 md:w-96 h-auto shadow-xl rounded-lg flex flex-col mx-auto gap-10 px-9 py-10 transition-all duration-300 
      ${
        data.list[0].main.aqi === 1 ? 'bg-emerald-900' :
        data.list[0].main.aqi === 2 ? 'bg-cyan-900' :
        data.list[0].main.aqi === 3 ? 'bg-blue-300' :
        data.list[0].main.aqi === 4 ? 'bg-orange-900' :
        data.list[0].main.aqi === 5 ? 'bg-red-900' :
        'UNDEFINED'
      }
      `}>
        <span className="text-white">Air Quality</span>
        <span className={` text-4xl font-bold ${
            data.list[0].main.aqi === 1 ? 'text-emerald-400' :
            data.list[0].main.aqi === 2 ? 'text-cyan-400' :
            data.list[0].main.aqi === 3 ? 'text-white' :
            data.list[0].main.aqi === 4 ? 'text-orange-500' :
            data.list[0].main.aqi === 5 ? 'text-red-700' :
            'UNDEFINED'
        }`}>
        { 
            data.list[0].main.aqi === 1 ? 'Good' :
            data.list[0].main.aqi === 2 ? 'Fair' :
            data.list[0].main.aqi === 3 ? 'Moderate' :
            data.list[0].main.aqi === 4 ? 'Poor' :
            data.list[0].main.aqi === 5 ? 'Very Poor' :
            'UNDEFINED'
        }
        </span>
        <div className="flex justify-between">
            <span className="text-white">CO</span><span className="text-white">{ data.list[0].components.co } μg/m3</span>
        </div>
        <div className="flex justify-between">
            <span className="text-white">NO₂</span><span className="text-white">{ data.list[0].components.no2 } μg/m3</span>
        </div>
        <div className="flex justify-between">
            <span className="text-white">O₃</span><span className="text-white">{ data.list[0].components.o3 } μg/m3</span>
        </div>
        <div className="flex justify-between">
            <span className="text-white">PM10</span><span className="text-white">{ data.list[0].components.pm10 } μg/m3</span>
        </div>
        <div className="flex justify-between">
            <span className="text-white">PM2.5</span><span className="text-white">{ data.list[0].components.pm2_5 } μg/m3</span>
        </div>
    </div>
  );
};
export default AirPollution;
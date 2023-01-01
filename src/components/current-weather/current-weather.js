import 'animate.css';

const CurrentWeather = ({ data }) => {
  return (
    <div
      className={`animate__animated animate__fadeIn animate__faster	 mt-8 md:w-96 h-auto shadow-xl rounded-lg flex flex-col mx-auto gap-10 p-7 transition-all duration-300
         ${
           data.weather[0].icon.includes("d") &&
           data.weather[0].description.includes("clouds")
             ? "bg-gray-300"
             : data.weather[0].icon.includes("n") &&
               data.weather[0].description.includes("clouds")
             ? "bg-gray-700"
             : data.weather[0].icon.includes("d") &&
               data.weather[0].description.includes("clear")
             ? "bg-blue-400"
             : data.weather[0].icon.includes("n") &&
               data.weather[0].description.includes("clear")
             ? "bg-blue-800"
             : "bg-slate-500"
         }`}>
      <div className="TOP flex justify-between w-full items-center">
        <div className=" flex flex-col ">
          <p className=" text-start font-bold text-2xl text-white">
            {data.city}
          </p>
          <p
            className={`capitalize text-start font-semibold text-xl transition-all duration-300
          ${
            data.weather[0].icon.includes("d") &&
            data.weather[0].description.includes("clouds")
              ? "text-gray-200"
              : data.weather[0].icon.includes("n") &&
                data.weather[0].description.includes("clouds")
              ? "text-gray-200"
              : data.weather[0].icon.includes("d") &&
                data.weather[0].description.includes("clear")
              ? "text-yellow-400"
              : data.weather[0].icon.includes("n") &&
                data.weather[0].description.includes("clear")
              ? "text-blue-200"
              : "text-white"
          }`}
          >
            {data.weather[0].description}
          </p>
        </div>
        <img
          alt={data.weather[0].main}
          className="w-32 p-4 md:p-0"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="BOTTOM flex justify-between w-full items-center ">
        <p className="text-6xl text-white font-bold ">
          {Math.round(data.main.temp)}°
        </p>
        <div>
          <div className="flex ">
            <span className="text-white font-semibold text-base">Details</span>
          </div>
          <div className="flex justify-between w-36">
            <span className="text-white font-light text-base">Feels like</span>
            <span className="text-white font-light text-base">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="flex justify-between w-36">
            <span className="text-white font-light text-base">Wind</span>
            <span className="text-white font-light text-base">
              {data.wind.speed} m/s
            </span>
          </div>
          <div className="flex justify-between w-36">
            <span className="text-white font-light text-base">Humidity</span>
            <span className="text-white font-light text-base">
              {data.main.humidity}%
            </span>
          </div>
          <div className="flex justify-between w-36">
            <span className="text-white font-light text-base">Pressure</span>
            <span className="text-white font-light text-base">
              {data.main.pressure} hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;

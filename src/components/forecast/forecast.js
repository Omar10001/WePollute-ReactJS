import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );
  return (
    <>
      <h1 className="mx-auto text-xl text-center w-80 md:w-96 font-normal bg-white py-1 rounded-md mt-8">Forecast</h1>

      <Accordion allowZeroExpanded className="mt-8 mx-auto flex flex-wrap justify-center gap-4 w-full">
        {data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton >
                <div
                  className={`animate__animated animate__fadeIn  flex justify-between items-center w-80 md:w-96 px-6 rounded-2xl shadow-lg transition-all duration-1000
                            ${
                              item.weather[0].icon.includes("d") &&
                              item.weather[0].description.includes("clouds")
                                ? "bg-gray-400"
                                : item.weather[0].icon.includes("n") &&
                                  item.weather[0].description.includes("clouds")
                                ? "bg-gray-700"
                                : item.weather[0].icon.includes("d") &&
                                  item.weather[0].description.includes("clear")
                                ? "bg-blue-400"
                                : item.weather[0].icon.includes("n") &&
                                  item.weather[0].description.includes("clear")
                                ? "bg-blue-900"
                                : "bg-slate-500"
                            }`}>
                  <img
                    className="w-20 p-4"
                    alt="weather"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <h1 className="text-normal md:text-xl font-semibold text-white">
                    {forecastDays[idx]}
                  </h1>
                  
                  <span className="text-xl font-semibold text-white">
                    {Math.round(item.main.temp)}°
                  </span>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};
export default Forecast;

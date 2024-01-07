import React, { useEffect, useState } from "react";
import { useStateContext } from "../Context";
import Clear from "../assets/images/clear.jpg";
import Cloudy from "../assets/images/cloud.jpg";
import Fog from "../assets/images/fog.jpg";
import Rain from "../assets/images/raining.jpg";
import Snow from "../assets/images/snow.jpg";
import Strom from "../assets/images/strom.jpg";
import Sunny from "../assets/images/sunny.jpg";

function BackgroundLayout() {
  const { weather } = useStateContext();
  const [image, setImage] = useState("Clear");
  useEffect(() => {
    if (weather.conditions) {
      let weatherCondition = weather.conditions;

      if (weatherCondition.toLowerCase().includes("clear")) {
        setImage(Clear);
      } else if (weatherCondition.toLowerCase().includes("cloud")) {
        setImage(Cloudy);
      } else if (weatherCondition.toLowerCase().includes("fog")) {
        setImage(Fog);
      } else if (
        weatherCondition.toLowerCase().includes("strom") ||
        weatherCondition.toLowerCase().includes("thunder")
      ) {
        setImage(Strom);
      } else if (
        weatherCondition.toLowerCase().includes("rain") ||
        weatherCondition.toLowerCase().includes("shower")
      ) {
        setImage(Rain);
      } else if (weatherCondition.toLowerCase().includes("snow")) {
        setImage(Snow);
      } else if (weatherCondition.toLowerCase().includes("sunny")) {
        setImage(Sunny);
      }
    }
  }, [weather]);
  console.log(weather);
  return (
    <img
      src={image}
      alt="weather_img"
      className="h-screen w-full fixed left-0 top-0 -z-[10]"
    />
  );
}

export default BackgroundLayout;

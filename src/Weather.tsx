import React, { useEffect, useState } from 'react';
import { useAxios } from './useAxios';

const Weather: React.FC = () => {
  const { axiosFunction } = useAxios();
  //   const [weather, setWeather] = useState({});
  const token = '378gh78hrj934uf94öj';
  const [latitude, steLatitude] = useState<number>(46.9481);
  const [longitude, setLongitude] = useState<number>(7.4474);
  const method = 'GET';
  const urlHourly = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation_probability,weather_code`;
  const urlCurrent = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,rain,weather_code`;
  const [url, setUrl] = useState<string>('');
  const data = '';
  const query = { latitude: latitude, longitude: longitude };
  const onAxios = async () => {
    //gombal onAxiost hivni
    try {
      const response = await axiosFunction({ method: method, url: url, data: data, query: query });
      //     setWeather(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <input className="inp1" type="value"></input>
      </div>
      <div>
        <input className="inp2" type="value"></input>
        <button className="btn mr-{20px}" type="submit">
          Generálás
        </button>
      </div>
    </>
  );
};
export default Weather;

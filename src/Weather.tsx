import React, { useEffect, useMemo, useState } from 'react';
import { useAxios } from './useAxios';

export type DataColumnsProp = {
  id: string;
  label: string;
  type: string;
  hidden?: boolean;
  component?: (row: any) => JSX.Element;
};
export type RowProp = {
  rain: number;
  relative_humidity_2m: number;
  temperature_2m: number;
  time: string;
};

const Weather: React.FC = () => {
  const { axiosFunction } = useAxios();
  //   const [weather, setWeather] = useState({});
  const token = '378gh78hrj934uf94öj';
  const [latitude, setLatitude] = useState<number>(46.9481);
  const [longitude, setLongitude] = useState<number>(7.4474);
  const method = 'GET';
  const urlHourly = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation_probability,weather_code`;
  const urlCurrent = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,rain,weather_code`;
  const [url, setUrl] = useState<any>(urlCurrent);
  const [urlIsCurrent, setUrlIsCurrent] = useState<boolean>(true);
  const data = '';
  const query = { latitude: latitude, longitude: longitude };
  const [response, setResponse] = useState();
  const [columnsA, setColumnsA] = useState(['temperature_2m', 'rain', 'relative_humidity_2m', 'time']);
  const [rows, setRows] = useState<RowProp[]>([]);
  const [isCelsius, setIsCelsius] = useState<boolean[]>([]);

  const onSwitchTemperature = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, row: any) => {
    row.isCelsius = !row.isCelsius;
    // if (isCelsius) {
    //   setIsCelsius(false);
    // } else {
    //   setIsCelsius(true);
    // }
  };

  const getTemperature = (value: number, celsius: boolean) => {
    // return isCelsius ? value : value + 1;
    return celsius ? <span> {`${value} C`}</span> : <span> {`${value + 1} F`}</span>;
  };

  const dataColumns: DataColumnsProp[] = [
    {
      id: 'temperature_2m',
      label: 'Temperature',
      type: 'number',
      component: (row) => {
        if (row['temperature_2m']) {
          return (
            <button className="border-2 text-red-500 p-1" onClick={(e) => onSwitchTemperature(e, row)}>
              {getTemperature(row['temperature_2m'], row.isCelsius)}
            </button>
          );
        } else {
          return <></>;
        }
      },
    },
    {
      id: 'rain',
      label: 'Rain',
      type: 'number',
    },
    {
      id: 'relative_humidity_2m',
      label: 'Humidity',
      type: 'number',
    },
    {
      id: 'time',
      label: 'Time',
      type: 'string',
    },
    {
      id: 'isCelsius',
      label: 'Is Celsius',
      type: 'boolean',
      hidden: true,
    },
  ];

  const onAxios = async () => {
    try {
      // const response = await axiosFunction({ method: method, url: url, data: data, query: query });
      const resp = await axiosFunction({ method: method, url: urlIsCurrent ? urlCurrent : urlHourly, data: data, query: query });
      if (urlIsCurrent) {
        const arrayOfDict = [];

        const dict = {
          rain: resp.current.rain,
          relative_humidity_2m: resp.current.relative_humidity_2m,
          temperature_2m: resp.current.temperature_2m,
          time: resp.current.time,
          isCelsius: true,
        };
        arrayOfDict.push(dict);
        arrayOfDict.push(dict);
        setRows(arrayOfDict);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'latitude') {
      const latitudevalue = parseInt(value);
      setLatitude(isNaN(latitudevalue) ? 0 : latitudevalue);
    } else {
      const longitudevalue = parseInt(value);
      setLongitude(isNaN(longitudevalue) ? 0 : longitudevalue);
    }
  };
  // const handleLatitudeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   const latitudevalue = parseInt(value);
  //   setLatitude(isNaN(latitudevalue) ? 0 : latitudevalue);
  // };

  // const handleLongitudeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = parseInt(e.target.value);
  //   setLongitude(isNaN(value) ? 0 : value);
  // };

  return (
    <>
      <div>
        <input className="inp1 border" type="number" name="latitude" placeholder="latitude" onChange={handleChange}></input>
      </div>
      <div>
        <input className="inp2 border" type="number" name="longitude" placeholder="longitude" onChange={handleChange}></input>

        <button className="btn mr-{50px} border-2" type="submit" onClick={onAxios}>
          {urlIsCurrent ? 'Generate Current' : 'Generate Forecast'}
        </button>
      </div>
      <div>
        <button className="btn mr-{50px} border-3" type="submit" onClick={() => setUrlIsCurrent((prev) => !prev)}>
          {urlIsCurrent ? 'Change To Hourly' : 'Change To Current'}
        </button>
      </div>
      {/* <div className="">{response}</div> */}
      {urlIsCurrent ? (
        <>
          <table className="table-auto">
            <thead>
              <tr>
                {dataColumns.map((item, index) => {
                  const labelName = item.label;
                  return (
                    !item.hidden && (
                      <th key={index} className="px-5">
                        {labelName}
                      </th>
                    )
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {rows.length > 0 ? (
                rows.map((row, index) => {
                  return (
                    <tr key={index}>
                      {dataColumns.map((item, sIndex) => {
                        if (!item.hidden) {
                          const value = row[item.id as keyof typeof row];
                          return (
                            <td key={sIndex} className="px-5">
                              {item.component ? item.component(row) : value}
                            </td>
                          );
                        }
                      })}
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td>No Data</td>
                </tr>
              )}
            </tbody>
          </table>
        </>
      ) : (
        <>
          <table>
            <tr>
              <th>temperature_2m</th>
              <th>rain</th>
              <th>relative_humidity_2m</th>
              <th>time</th>
            </tr>
            <tr>
              <td>28.6</td>
              <td>0</td>
              <td>18</td>
              <td>2024-11-12T12:30</td>
            </tr>
          </table>
        </>
      )}
    </>
  );
};
export default Weather;

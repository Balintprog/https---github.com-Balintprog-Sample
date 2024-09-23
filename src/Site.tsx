import React, { useEffect, useMemo, useState } from 'react';
import './App.css';

export type Button1Props = {
  text: string;
  changeValue: string;
  color: string;
  fontSize?: string;
};

export type Button2Props = {
  text: string;
  changeValue: string;
  divideValue: any;
  color: string;
  fontSize?: string;
  box?: string;
};

const Site: React.FC = () => {
  const [value, setValue] = useState(6);
  const [showInfo, setShowInfo] = useState(false);
  const INFO = 'Az érték nem lehet kisebb mint 0';

  const even = useMemo(() => {
    if (value % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }, [value]);

  const onChangeValue = (cond: string | number) => {
    if (cond === 'asc') {
      // if (value === 0) {
      //   setShowInfo(false);
      // }
      setValue(value + 1);
    } else {
      if (value > 0) {
        setValue(value - 1);
      }
      // else {
      //   setShowInfo(true);
      // }
    }
    // setValue(cond ? value + 1 : value > 0 ? value - 1 : value);
  };

  useEffect(() => {
    if (value === 0) {
      setShowInfo(true);
    } else {
      if (showInfo) setShowInfo(false);
    }
  }, [value, setShowInfo, showInfo]);

  const Button2: React.FC<Button2Props> = ({ fontSize, color, text, divideValue }) => {
    return (
      <button className={`${color} ${fontSize}`} onClick={() => onChangeValue(divideValue)}>
        {text}
      </button>
    );
  };

  const Button1: React.FC<Button1Props> = ({ fontSize, color, text, changeValue }) => {
    return (
      <button className={`${color} ${fontSize}`} onClick={() => onChangeValue(changeValue)}>
        {text}
      </button>
    );
  };

  const divideValue = value / 2;

  return (
    <>
      <div className="App">
        <span className="mr-[50px]">{value}</span>
        <Button1 text="Push me +" changeValue="asc" color="text-yellow-500" />
        {!showInfo && <Button1 text="Push me -" changeValue="decr" color="text-blue-500" />}

        {/* {showInfo ? <div>{INFO}</div> : <></>} */}
        {showInfo && <div>{INFO}</div>}
        <div>{`${even ? 'Páros szám' : 'Páratlan szám'}`}</div>
      </div>
      <div className="App">
        <span className='box-sizing="border-box'></span>
        <Button2 text="Push to divide" changeValue="divide" divideValue color="text-red-500" box="border-box" />
      </div>
    </>
  );
};

export default Site;

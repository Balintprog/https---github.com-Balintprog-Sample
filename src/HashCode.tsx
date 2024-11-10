import React, { useState } from 'react';

export type HashCodesTypes = { [key: string]: string };
export type RecCountsTypes = { [key: string]: number };
export type invalidHashesTypes = { [key: string]: string[] };

const HashCode: React.FC = () => {
  const [length, setLength] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [error, setError] = useState<string>('');
  const [hashCodes, setHashCodes] = useState<HashCodesTypes>({});
  const [recCounts, setRecCounts] = useState<RecCountsTypes>({});
  const [invalidHashes, setInvalidHashes] = useState<invalidHashesTypes>({});
  const characters = 'abc';
  // const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

  const generateHash = (len: number, generatedHashes: HashCodesTypes, n: number, inv: string[]): any => {
    let result = '';
    for (let i = 0; i < len; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }

    if (!Object.values(generatedHashes).includes(result)) {
      setRecCounts((prev) => ({ ...prev, [result]: n }));
      setInvalidHashes((prev) => ({ ...prev, [result]: inv }));
      return result;
    } else {
      const x = inv.concat(result);
      return generateHash(len, generatedHashes, n + 1, x);
    }
  };

  const handleGenerate = () => {
    setError('');
    if (length <= 0 || count <= 0) {
      setError('A hossz és a darabszám pozitív kell hogy legyen!');
      return;
    }
    if (count > Math.pow(characters.length, length)) {
      setError('túl magas az érték');
      return;
    }

    const generatedHashes: HashCodesTypes = {}; // Egyediség

    while (Object.keys(generatedHashes).length < count) {
      const hash = generateHash(length, generatedHashes, 0, []);
      generatedHashes[hash] = hash;
    }

    setHashCodes(generatedHashes); // Hash kódok beállítása
  };

  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setLength(isNaN(value) ? 0 : value);
  };

  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setCount(isNaN(value) ? 0 : value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Hash Code Generátor</h1>

      <div style={{ marginBottom: '10px' }}>
        <label>
          Hash code karaktereinek hossza:
          <input className="border-2" type="value" value={length} onChange={handleLengthChange} min="1" />
        </label>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>
          Hash code (-ok) száma:
          <input className="border-2" type="value" value={count} onChange={handleCountChange} min="1" />
        </label>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button className=" border-2" onClick={handleGenerate}>
        Generálás
      </button>

      {Object.keys(hashCodes).length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h2>Generált hash kódok:</h2>
          <ul>
            {Object.keys(hashCodes).map((key) => (
              <li key={key}>
                <span className="mr-[20px]">{hashCodes[key]}</span>
                <span className="mr-[20px]">{recCounts[key]}</span>
                <span className="mr-[20px]">
                  {(invalidHashes[key] || []).map((subCode, subIndex) => (
                    <span className="mr-[20px]" key={subIndex}>
                      {subCode}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HashCode;

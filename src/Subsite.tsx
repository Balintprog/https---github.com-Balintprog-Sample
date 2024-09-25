import React, { useState } from 'react';
import './App.css';

export type UserType = {
  name?: string;
  password?: string;
  age?: number;
};

const Subsite: React.FC = () => {
  // const [userName, setUserName] = useState('');
  // const [userPw, setUserPw] = useState('');
  // const [userAge, setUserAge] = useState<number>();

  // const [user, setUser]= useState(
  //   {
  //     name:'',
  //     password:'',
  //     age: 0 ,
  //   }
  // )
  const [user, setUser] = useState<UserType>({});

  const [users, setUsers] = useState<UserType[]>([]);

  const onSubmit = (e: any) => {
    e.preventDefault();
    setUsers(users?.concat(user));
  };

  // const changeUserName = (e: React.ChangeEvent<HTMLInputElement>, color: string) => {
  //   setUserName(e.target.value);
  // };
  // const changeUserPw = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setUserPw(e.target.value);
  // };
  // const changeUserAge = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setUserAge(e.target.value as any);
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setUser({[e.target.name]:e.target.value});
    const { name, value } = e.target; //destructuring
    setUser((previousUser) => ({ ...previousUser, [name]: value }));
  };
  // console.log(parseInt('1')+parseInt('2'))
  // console.log(1 .toString()+2 .toString())
  return (
    <>
      <div className="App">
        {/* beviteli képernyő */}
        <form onSubmit={onSubmit}>
          {/* <label htmlFor="name">enter your name </label>
          <input className="border ml-[20px]" type="text" id="name" name="username" placeholder="please enter your name" value={userName} onChange={(e) => changeUserName(e, 'red')} />
          <label htmlFor="Pw">enter your password </label>
          <input className="border ml-[20px]" type="text" id="pw" name="password" value={userPw} onChange={(e) => changeUserPw(e)} />

          <label htmlFor="age">enter your age </label>
          <input className="border ml-[20px]" type="number" id="age" name="age" placeholder="enter your age" value={userAge} onChange={handleChange} /> */}

          <label htmlFor="name">enter your name </label>
          <input className="border ml-[20px]" type="text" id="name" name="name" placeholder="please enter your name" value={user.name} onChange={handleChange} />

          <label htmlFor="Pw">enter your password </label>
          <input className="border ml-[20px]" type="text" id="pw" name="password" value={user.password} onChange={handleChange} />

          <label htmlFor="age">enter your age </label>
          <input className="border ml-[20px]" type="number" id="age" name="age" placeholder="enter your age" value={user.age} onChange={handleChange} />
          <button className="border ml-[50px]" type="submit">
            {' '}
            submit
          </button>
        </form>
      </div>
      <div className="mr-10">
        username: <span className="mr-2">{user.name} </span>{' '}
      </div>
      <div className="mr-10">
        {' '}
        userpassword: <span className="mr-2">{user.password} </span>{' '}
      </div>
      <div className="mr-10">
        {' '}
        userage: <span className="mr-2">{user.age} </span>
      </div>

      <div>
        {users &&
          Object.keys(users).map((key, index) =>
            Object.keys(users[key as any]).map((y, i) => (
              <div key={i}>
                {key} : {y}
              </div>
            )),
          )}
      </div>
    </>
  );
};

export default Subsite;

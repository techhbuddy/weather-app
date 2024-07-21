// import React ,{useEffect, useState} from 'react'
// import './style.css'
// import Card from './card'
// const Temp = () => {
//     const [searchvalue,setsearchvalue] = useState("Udaipur")
//     const [tempdata,settempdata] = useState({})
//     const getinfo = async() => {
//         try{
//             let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=metric&appid=100e2cff08476ec956318d6bff0f2d4`;

//             const res = await fetch(url) 
//             const data = await res.json()

//             const {temp , humidity , pressure} = data.main
//             const {main : weathermood} = data.weather[0];
//             const {name} = data;
//             const {speed} = data.wind
//             const {country,sunset} = data.sys

//             const myweather = {
//                 temp,humidity,pressure,weathermood,name,speed,country,sunset,
//             }
//             settempdata(myweather)
//             // console.log(data)
//         }catch(error){
//             console.log(error)
//         }
//     }

//     useEffect(() => {
//         getinfo();
//     },[])
//   return (

//     <>
//         <div className='search'>
//             <div className='search'>
//                     <input type="search" placeholder='search...' autoFocus id='search' className='searchTerm' value={searchvalue} onChange={(event) => {setsearchvalue(event.target.value)}}/>
//                     <button className='searchButton' type='button' onClick={getinfo}>Search It!</button>
//             </div>
//         </div>
//         <br />
//         <Card tempdata={tempdata}/>
//     </>
//   )
// }

// export default Temp


import React, { useEffect, useState } from 'react';
import './style.css';
import Card from './card';

const Temp = () => {
    const [searchValue, setSearchValue] = useState("Udaipur");
    const [tempData, setTempData] = useState({});

    const getInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=100e2cff08476ec956318d6bff0f2d47`;

            const res = await fetch(url);
            const data = await res.json();

            const { temp, humidity, pressure } = data.main;
            const { main: weatherMood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            const myWeather = {
                temp,
                humidity,
                pressure,
                weatherMood,
                name,
                speed,
                country,
                sunset,
            };
            setTempData(myWeather);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getInfo();
    }, []);

    return (
        <>
            <div className='search'>
                <input
                    type="search"
                    placeholder='search...'
                    autoFocus
                    id='search'
                    className='searchTerm'
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                />
                <button className='searchButton' type='button' onClick={getInfo}>Search It!</button>
            </div>
            <br />
            <Card tempData={tempData} />
        </>
    );
};

export default Temp;



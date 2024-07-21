// import React from 'react'

// const Card = ({tempdata}) => {
//     const {
//         temp,humidity,pressure,weathermood,name,speed,country,sunset
//     } = tempdata

//     let sec = sunset
//     let date = new Date(sec*1000)
//     let timeStr = `${date.getHours()}:${date.getMinutes()}`
//   return (
//     <>
//       <div className='widget'>
//             <div className='weatherIcon'>
//                 <i className={'wi wi-day-sunny'}></i>
//             </div>
//             <div className='weatherInfo'>
//                 <div className='temperature'>
//                     <span>{temp}&deg;</span>
//                 </div>
//                 <div className='description'>
//                     <div className='weatherCondition'>
//                         sunny
//                     </div>
//                     <div className='place'>
//                         {name},{country}
//                     </div>

//                 </div>
                
//             </div>
//             <div className='date'> { new Date().toLocaleString()}</div>
//             <div className='extra-temp'>
//                 <div className='temp-info-minmax'>
//                     <div className='two-sided-section'>
//                         <p><i className='wi wi-sunset'></i></p>
//                         <p className='extra-info-leftside'>{timeStr}<br />Sunset</p>
//                     </div>

//                     <div className='two-sided-section'>
//                         <p><i className='wi wi-humidity'></i></p>
//                         <p className='extra-info-leftside'>{humidity} <br />humidity</p>
//                     </div>

                    
//                 </div>
//                 <div className='weather-extra-info'>
//                     <div className='two-sided-section'>
//                         <p><i className='wi wi-rain'></i></p>
//                         <p className='extra-info-leftside'>{pressure}<br />Pressure</p>
//                     </div>

//                     <div className='two-sided-section'>
//                         <p><i className='wi wi-strong-wind'></i></p>
//                         <p className='extra-info-leftside'>{speed}<br />Speed</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }

// export default Card


import React from 'react';

const Card = ({ tempData }) => {
    const [weatherstate , setweatherstate] = React.useState("")
    const {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        country,
        sunset
    } = tempData;

    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;

    let weatherIcon = 'wi-day-sunny'; // default icon
    switch (weatherMood) {
        case 'Clouds':
            weatherIcon = 'wi-day-cloudy';
            break;
        case 'Haze':
            weatherIcon = 'wi-fog';
            break;
        case 'Clear':
            weatherIcon = 'wi-day-sunny';
            break;
        case 'Mist':
            weatherIcon = 'wi-dust';
            break;
        default:
            weatherIcon = 'wi-day-sunny';
            break;
    }

    return (
        <>
            <div className='widget'>
                <div className='weatherIcon'>
                    <i className={`wi ${weatherIcon}`}></i>
                </div>
                <div className='weatherInfo'>
                    <div className='temperature'>
                        <span>{temp}&deg;</span>
                    </div>
                    <div className='description'>
                        <div className='weatherCondition'>
                            {weatherMood}
                        </div>
                        <div className='place'>
                            {name}, {country}
                        </div>
                    </div>
                </div>
                <div className='date'> {new Date().toLocaleString()}</div>
                <div className='extra-temp'>
                    <div className='temp-info-minmax'>
                        <div className='two-sided-section'>
                            <p><i className='wi wi-sunset'></i></p>
                            <p className='extra-info-leftside'>{timeStr}<br />Sunset</p>
                        </div>
                        <div className='two-sided-section'>
                            <p><i className='wi wi-humidity'></i></p>
                            <p className='extra-info-leftside'>{humidity}%<br />Humidity</p>
                        </div>
                    </div>
                    <div className='weather-extra-info'>
                        <div className='two-sided-section'>
                            <p><i className='wi wi-rain'></i></p>
                            <p className='extra-info-leftside'>{pressure} hPa<br />Pressure</p>
                        </div>
                        <div className='two-sided-section'>
                            <p><i className='wi wi-strong-wind'></i></p>
                            <p className='extra-info-leftside'>{speed} m/s<br />Speed</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;

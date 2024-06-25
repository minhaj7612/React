import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import "./weath.css"
import img2 from "../img/cloud-vector-icon-png_261806-removebg-preview.png"



function Weather() {
  const [weatherData, setWeatherData] = useState([]);
  // const [getInput,setGetInput]=useState("");
  // const [newInput,setNewInput]=useState([]);
  // console.log(newInput);  

//  console.log(getInput)
  console.log(weatherData, "weatherData");

//  function handleInput(e){
//   e.preventDefault();
//   setGetInput(e.target.value)
//  }
//  function handlSearch(){

//   if(getInput === ""){
//     alert("You must write something!")
//   }else{
//     setNewInput([getInput])
//     setGetInput("")
//   }
 
//  }



//    async function callingApi() {
//     // const axios = require('axios');

//      const options = {
//       method: 'GET',
//       url: 'https://yahoo-weather5.p.rapidapi.com/weather',
//       params: {
//         location: "Mumbai",
//         format: 'json',
//         u: 'f'
//       },
//       headers: {
//         'x-rapidapi-key':'68b8b7ecd9msh4f7402a44bc35ddp1511fcjsnee2ccc77e0ba',
//         'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
//       }
//     };  

//     try {
//       const response = await axios.request(options);
//       setWeatherData([response.data]);
//     } catch (error) {
//       console.error(error);
//     }
//   }


//   useEffect(() => {
//     callingApi();
//   })
  
  return (
    <div>
       


       {
        <div>
        {weatherData.map((response)=>(
                <div style={{backgroundImage:"URL(https://static.vecteezy.com/system/resources/thumbnails/026/365/937/small_2x/beautiful-blurred-green-nature-background-ai-generated-photo.jpg)",
                backgroundRepeat:"no-repeat", backgroundSize:"cover",
                }} className="weather_bdy">
                    <div className='Location'>
                        <h2>{response.location.city}</h2>
                    </div>
                    <div className='temp'>
                    <div className='sky_weather'>
                        <span>{response.current_observation.condition.text} </span>
                    </div>
        
                    <div className='degrCelc'>
                      <h1 className='celc'>{response.current_observation.condition.temperature}<span>c</span></h1>
                    </div>
                
                    </div>
                <div style={{ display: "flex",alignItems:"center",justifyContent:"space-around",paddingBottom:"40px"}} className="foreCaste">
                <div style={{display:"flex",alignItems:"center", background:"#b7b3b366",padding:"25px"}}  className='OtherData_Detail'>
                 <img style={{width:"200px"}} src={img2} alt="" />
                 <div>
                    <div className='dtlBox'>
                        <span>RealFeel®</span>
                        <span>{response.current_observation.wind.direction}</span>
                    </div>
                    <div className='dtlBox'>
                        <span>Humidity</span>
                        <span>{response.current_observation.atmosphere.humidity}</span>
                    </div>
                    <div className='dtlBox'>
                        <span>Visibility</span>
                        <span>{response.current_observation.atmosphere.visibility}</span>
                    </div>
                    <div className='dtlBox'>
                        <span>Pressure</span>
                        <span>{response.current_observation.atmosphere.pressure}</span>
                    </div>
                 </div>
                </div>
                <div className='Main_table'>
                <p>Forecaste</p>
                <table class="styled-table">
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Date</th>
                        <th>High</th>
                        <th>Low</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{response.forecasts[0].day}</td>
                        <td>{response.forecasts[0].date}</td>
                        <td>{response.forecasts[0].high}</td>
                        <td>{response.forecasts[0].low}</td>
                        
                    </tr>
                    <tr>
                        <td>{response.forecasts[1].day}</td>
                        <td>{response.forecasts[1].date}</td>
                        <td>{response.forecasts[1].high}</td>
                        <td>{response.forecasts[1].low}</td>
                    </tr>
                    <tr>
                       <td>{response.forecasts[2].day}</td>
                        <td>{response.forecasts[2].date}</td>
                        <td>{response.forecasts[2].high}</td>
                        <td>{response.forecasts[2].low}</td>
                    </tr>
                    <tr>
                    <td>{response.forecasts[3].day}</td>
                        <td>{response.forecasts[3].date}</td>
                        <td>{response.forecasts[3].high}</td>
                        <td>{response.forecasts[3].low}</td>
                    </tr>
                    <tr>
                    <td>{response.forecasts[4].day}</td>
                        <td>{response.forecasts[4].date}</td>
                        <td>{response.forecasts[4].high}</td>
                        <td>{response.forecasts[4].low}</td>
                    </tr>
                </tbody>
               </table>
               </div>
                </div>
                </div>
                 ))}
           
        </div>
       }
     
  

    </div>
  )
}

export default Weather
import React from 'react'
import "./weath.css"
import img2 from "../img/cloud-vector-icon-png_261806-removebg-preview.png"

function Weathhtm() {
    return (
        <div style={{backgroundImage:"URL(https://static.vecteezy.com/system/resources/thumbnails/026/365/937/small_2x/beautiful-blurred-green-nature-background-ai-generated-photo.jpg)",
        backgroundRepeat:"no-repeat", backgroundSize:"cover",
        }} className="weather_bdy">
            <div className='Location'>
                <h2>Mumbai</h2>
            </div>
            <div className='temp'>
            <div className='sky_weather'>
                <span>cloudy</span>
            </div>

            <div className='degrCelc'>
              <h1 className='celc'>76°<span>c</span></h1>
            </div>
        
            </div>
        <div style={{ display: "flex",alignItems:"center",justifyContent:"space-around"}} className="foreCaste">
        <div style={{display:"flex",alignItems:"center", background:"#2521215e",padding:"25px"}}  className='OtherData_Detail'>
         <img style={{width:"200px"}} src={img2} alt="" />
         <div>
            <div className='dtlBox'>
                <span>RealFeel®</span>
                <span>81°</span>
            </div>
            <div className='dtlBox'>
                <span>Humidity</span>
                <span>81%</span>
            </div>
            <div className='dtlBox'>
                <span>Visibility</span>
                <span>4.97 miles</span>
            </div>
            <div className='dtlBox'>
                <span>UV Index</span>
                <span>0 (Low)</span>
            </div>
         </div>
        </div>
        <div className='Main_table'>
                
        <table class="styled-table">
        <thead>
            <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
                <th>Column 4</th>
                <th>Column 5</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Row 1, Col 1</td>
                <td>Row 1, Col 2</td>
                <td>Row 1, Col 3</td>
                <td>Row 1, Col 4</td>
                <td>Row 1, Col 5</td>
            </tr>
            <tr>
                <td>Row 2, Col 1</td>
                <td>Row 2, Col 2</td>
                <td>Row 2, Col 3</td>
                <td>Row 2, Col 4</td>
                <td>Row 2, Col 5</td>
            </tr>
            <tr>
                <td>Row 3, Col 1</td>
                <td>Row 3, Col 2</td>
                <td>Row 3, Col 3</td>
                <td>Row 3, Col 4</td>
                <td>Row 3, Col 5</td>
            </tr>
            <tr>
                <td>Row 4, Col 1</td>
                <td>Row 4, Col 2</td>
                <td>Row 4, Col 3</td>
                <td>Row 4, Col 4</td>
                <td>Row 4, Col 5</td>
            </tr>
            <tr>
                <td>Row 5, Col 1</td>
                <td>Row 5, Col 2</td>
                <td>Row 5, Col 3</td>
                <td>Row 5, Col 4</td>
                <td>Row 5, Col 5</td>
            </tr>
        </tbody>
       </table>
       </div>
        </div>
    </div>
    )
}

export default Weathhtm;

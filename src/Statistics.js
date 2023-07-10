import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Statistics.css";
import CurrentTime from "./CurrentTime";
import CurrentDate from './CurrentDate';
import { DonutChart } from './DonutChart';
import { AiFillCaretRight } from "react-icons/ai";

const Statistics = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleChartHover = () => {
    setIsHovered(true);
  };

  const handleChartLeave = () => {
    setIsHovered(false);
  };


  return (
    <>
    
      <div className='row'>
        <div className='col-md-3'>
          {/* <h3 className='head'>Project Name</h3> */}
        </div>
        <div className='col-md-1'>
          
           
              <h3><select className='dr'>
                {/* <option hidden value=""></option> */}
                <option value="option1">PROJECT NAME</option>
                <option value="option2">PROJECT A</option>
                <option value="option3">PROJECT B</option>
                <option value="option4">PROJECT C</option>
                <option value="option5">PROJECT D</option>
                
              </select></h3>
           
          
        </div>

        <div className='col-md-1'>
          <div className='d-flex flex-column'>
            <p className='par1'>Last Accessed</p>
            <div className='d-flex spa'>
              <CurrentTime />
              <CurrentDate />
            </div>
          </div>
        </div>
      </div>
      <br/>

      {/* <div className='d-flex ti'>
        <div className='circle'>
        </div>
        Total Images
        
      </div> */}

<div className='d-flex ti'>
  <div className='circle'></div>
  <span className="text">Total Images</span>
  <p type='type' class="timg"  id="timg"><b>456</b></p>
</div>


<div className='d-flex submi'>
  <div className='circle'></div>
  <span className="text">Submitted</span>
  <p type='type' class="subm"  id="subm"><b>56</b></p>
</div>
<br/>

<div className='d-flex ts'>
  <div className='circle'></div>
  <span className="text">Test Status</span>
  <p type='type' class="tst"  id="tst">Nill</p>
</div>


<div className='d-flex rm'>
  <div className='circle'></div>
  <span className="text">Remaining</span>
  <p type='type' class="rem"  id="rem"><b>400</b></p>
</div>
<br/>
<br/>
<br/>



  <div className='d-flex cont'>
  <div className='circle'></div>
  <span className="text1">Contributors</span> 
<select id="contri" className="contri">
  <option value="FireBirds">All</option>
  <option value="hc">Harish Challa</option>
  <option value="sl">Shivani Lakkakula</option>
  <option value="sk">Sneha Kallam</option>
  <option value="od">Olipilli Dinesh</option>
  <option value="my">Mekala YOgeshwar</option>
  <option value="scs">Samudrala Chandra Sekhar</option>
  <option value="nb">Nikhil Bathala</option>
</select>
  </div>
 
  <br/>
  <br/>
  <br/>
  {/* <input type="button" className='btn' id="btn" value="Project Details"></input> */}
  {/* <select id="btn" className="btn">
  <option value="volvo">Project</option>
  </select> */}

  

   <div className='d-flex btn'>
        Project Details<AiFillCaretRight className='arbtn' id="arbtn"/>
   </div>
    
   <div className='don' style={{ width: '400px', height: '350px' ,marginLeft:"60%",marginTop:"-30%"}}>
        <DonutChart />
      </div>

{/* <div className='don' style={{ width: '250px', height: '250px', marginLeft: "60%", marginTop: "-27%" }}>
        <div
          className={`donut-chart ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={handleChartHover}
          onMouseLeave={handleChartLeave}
        >
          <DonutChart />
        </div>
      </div> */}

<div className='d-flex'>
<div className='circle poly' id="poly"></div>
<span >Polygon</span>
</div><br/>
<div className='d-flex'>
<div className='circle lin' id="lin"></div>
<span >Line</span>
</div>

<div className='d-flex rec'>
<div className='circle ' id="rec"></div>
<span >Rectangle</span>
</div>
<div className='d-flex cir'>
<div className='circle ' id="cir"></div>
<span >Circle</span>
</div>

<div className='d-flex bru'>
<div className='circle ' id="bru"></div>
<span >Brush</span>
</div>

<div className='d-flex dot'>
<div className='circle ' id="do"></div>
<span >Dot</span>
</div>



    </>
  );
};

export default Statistics;

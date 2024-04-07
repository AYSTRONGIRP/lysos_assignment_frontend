import React from 'react'
import Current_tournament from './Current_tournament';
import Previous_tournment from './Previous_tournment';
import { useState, useEffect , useMemo } from 'react';
import { useDispatch , useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Wheel from './Wheel';

const Tournament = () => {

  
  const navigate = useNavigate();

  const [currentTime, setCurrentTime] = useState(new Date());
  const name = useSelector((state)=>state.info.name)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    if(!name)
    {
      navigate('/');
    }

    return () => clearInterval(intervalId);
    

  }, []);

  const options = { hour12: false };

  const currentTimeFormatted = useMemo(() => currentTime.toLocaleTimeString([], options), [currentTime, options]);

  return (
    <div className="container mt-1">
      <div className="row">
    <div className="col-md-4"> {/* Left column for name */}
      <h2>Current Time: {currentTime.toLocaleTimeString([], options)}</h2>
    </div>
    <div className="col-md-6 text-end"> {/* Right column for clock */}
    <h2>{name}</h2>
    </div>
              {/* <Wheel /> */}
        
  </div>

      <div className="row">
        <div className="col-md-8">
          <Current_tournament />
        </div>
        <div className="col-md-4">
          <Previous_tournment />
        </div>
      </div>
    </div>

  // <div className="container mt-1">
  //     <div className="row">
  //       <div className="col-md-4"> {/* Left column for name */}
  //         <h2>Current Time: {currentTime.toLocaleTimeString([], options)}</h2>
  //       </div>
  //       <div className="col-md-6 text-end"> {/* Right column for clock */}
  //         <h2>{name}</h2>
  //       </div>
  //       <div className="col-md-2 d-flex justify-content-center align-items-center"> {/* Center column for wheel */}
  //         <Wheel />
  //       </div>
  //     </div>

  //     <div className="row">
  //       <div className="col-md-8">
  //         <Current_tournament />
  //       </div>
  //       <div className="col-md-4">
  //         <Previous_tournment />
  //       </div>
  //     </div>
  //   </div>
  )
}

export default Tournament

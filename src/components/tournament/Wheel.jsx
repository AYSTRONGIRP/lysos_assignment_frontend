import React from 'react'
import './wheel.css'
import wheel_img from './wheel.png'
import { useState , useEffect} from 'react'
import axios from 'axios';
import API_URL from '../../config';
import { useDispatch , useSelector } from 'react-redux'


const Wheel = (tournament) => {
    const prev = useSelector((state)=>state.info.prev)
    const [stopAngle, setStopAngle] = useState(36);
    const [animationDuration, setAnimationDuration] = useState("spin 3s linear infinite");
    const [rotation, setRotation] = useState(0);

    // "NO one participated"
    // console.log(tournament.tournament.name , "no one")
    
   

    async function getResult() {
        console.log(prev , "prev")
        try {
            // Make a GET request to the backend endpoint
            // if(typeof prev === undefined )
            // prev = tournament.tournament.name
            const response = await axios.get(`https://lysos-assignmennt-backend.onrender.com/result`,{
                params: {
                    name: prev // Replace 'desiredName' with the actual name you want to query
                }
            });
            // Assuming the response data contains the winner
            console.log(response.data , "response");
            if(response.data!=0)
            {
                const angle = rotatedArray.indexOf(response.data)*36
                console.log(angle)
                handleStop(angle)
            }

        } catch (error) {
            // Handle errors here
            console.error('Error fetching result:', error);
        }
    }

    useEffect(() => {
        const intervalId = setInterval(getResult, 10000); // Call getResult every 2 seconds
        return () => clearInterval(intervalId); // Cleanup function to clear interval on unmount
    }, []);


    const rotatedArray = [6, 5, 4, 3, 2, 1, 10, 9, 8, 7];


// console.log(rotatedArray);

    

    const handleStop = (angle) => {
        console.log(angle,'stop')
        // Stop the animation at the desired angle
        setAnimationDuration('0s'); // Set animation duration to 0 to stop animation instantly
        setRotation(angle) // Set rotation to stop angle
    };
  return (
    // <div className="wheel">
    // <img src={wheel_img} alt="Spinning Wheel" height="1000" width="1000" />
    // </div>  
    

    <div className="wheel-container">
            <div className="wheel d-flex justify-content-center align-items-center"> {/* Center the image */}
                <img className="spinning-wheel" src={wheel_img} alt="Spinning Wheel" style={{ transform: `rotate(${rotation}deg)` , animation: animationDuration}} />
                <div className="arrow"></div>
                
            </div>
            <div>result of {prev}</div>
            <button onClick={()=>handleStop(330)}>Stop at stopAngle°</button>
        </div>
  )
}

export default Wheel

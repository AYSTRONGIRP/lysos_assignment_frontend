import React from 'react'
import Main_content from './Main_content'

import API_URL from '../../config';
import { useState, useEffect , useMemo } from 'react';
import { setPrev} from '../../slices/login_info'

import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import Wheel from './Wheel';
const Current_tournament = () => {
  const id = useSelector((state) => state.info.id);
  const [tournaments, setTournaments] = useState([]);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   // Make an Axios request to fetch tournament data
  //   axios.get(`${API_URL}/tournament`)
  //     .then(response => {
  //       // Update the tournaments state with the fetched data
  //       setTournaments(response.data[0]);
  //       console.log(response.data[0])
  //     })
  //     .catch(error => {
  //       console.error('Error fetching tournaments:', error);
  //     });
  // }, []); // Run this effect only once on component mount

  useEffect(() => {
    let response;
    let count = 1 ;
    const fetchTournament = async () => {
      
        try {
          response = await axios.get(`${API_URL}/tournament`);
            setTournaments(response.data[0]);
            if(count==1)
            value_to_prev(response.data[0].name)
          count++
            // console.log(response.data[0]);
            
        } catch (error) {
            console.error('Error fetching tournament:', error);
        }
    };
    const value_to_prev = (val) => {
      console.log(val, "prev store")
      dispatch(setPrev(val))

    }
    if(response){
    
    }
    fetchTournament(); // Initial fetch
    
    // Fetch tournament every second
    const intervalId = setInterval(fetchTournament, 10000);

    // Cleanup function to clear interval on unmount or when component is re-rendered
    return () => clearInterval(intervalId);
}, []); // Run this effect only once on component mount

const memoizedTournaments = useMemo(() => tournaments, [tournaments]);


  return (
    <div className="card" style={{ maxHeight: '1800px', overflowY: 'auto' }}>
      <Wheel tournament={memoizedTournaments}/>
      <div className="card-body">
        <h2 className="mb-4">Current Tournament : {tournaments.name}</h2>
        {/* <h2 className="mb-4">Main Content Heading: {tournaments.name}</h2> */}
        <Main_content tournaments={memoizedTournaments} />
      </div>
    </div>  
  )
}   

export default Current_tournament

import React from 'react'
import Main_content from './Main_content'

import API_URL from '../../config';
import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const Current_tournament = () => {
  const id = useSelector((state) => state.info.id);
  const [tournaments, setTournaments] = useState([]);

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
    const fetchTournament = async () => {
        try {
            const response = await axios.get(`${API_URL}/tournament`);
            setTournaments(response.data[0]);
            // console.log(response.data[0]);
        } catch (error) {
            console.error('Error fetching tournament:', error);
        }
    };

    fetchTournament(); // Initial fetch

    // Fetch tournament every second
    const intervalId = setInterval(fetchTournament, 1000);

    // Cleanup function to clear interval on unmount or when component is re-rendered
    return () => clearInterval(intervalId);
}, []); // Run this effect only once on component mount

  return (
    <div className="card" style={{ maxHeight: '1800px', overflowY: 'auto' }}>
      <div className="card-body">
        <h2 className="mb-4">Current Tournament : {tournaments.name}</h2>
        {/* <h2 className="mb-4">Main Content Heading: {tournaments.name}</h2> */}
        <Main_content tournaments={tournaments} />
      </div>
    </div>  
  )
}   

export default Current_tournament

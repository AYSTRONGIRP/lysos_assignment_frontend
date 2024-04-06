import React from 'react'
import Tournament_card from './Tournament_card';
import { useState, useEffect } from 'react';

import API_URL from '../../config';
import axios from 'axios';

const Previous_tournment = () => {
    const [tournaments, setTournaments] = useState([]);

  // useEffect(() => {
  //   // Make an Axios request to fetch tournament data
  //   axios.get(`${API_URL}/tournament`)
  //     .then(response => {
  //       // Update the tournaments state with the fetched data
  //       setTournaments(response.data);
  //       console.log(response.data[0].name , "previous")
  //     })
  //     .catch(error => {
  //       console.error('Error fetching tournaments:', error);
  //     });
  // }, []); // Run this effect only once on component mount


  useEffect(() => {
    const fetchTournaments = async () => {
        try {
            const response = await axios.get(`${API_URL}/tournament`);
            setTournaments(response.data.slice(1));
            // console.log(response.data[0].name, "previous");
        } catch (error) {
            console.error('Error fetching tournaments:', error);
        }
    };

    fetchTournaments(); // Initial fetch

    // Fetch tournaments every second
    const intervalId = setInterval(fetchTournaments, 1000);

    // Cleanup function to clear interval on unmount or when component is re-rendered
    return () => clearInterval(intervalId);
}, []); // Run this effect only once on component mount


//   {
//     "_id": "661128616f2ea635401bc822",
//     "name": "Apr 06 2024 16:18",
//     "id": 107,
//     "__v": 0
// }
  return (
    <div style={{ maxHeight: '1800px', overflowY: 'auto' }}>
      {tournaments.map(tournament => (
        <Tournament_card
          key={tournament.name}
          name={tournament.name}
          pid={tournament.id}
          winner={tournament.winner}
        />
      ))}
    </div>
  )
}

export default Previous_tournment

import React from 'react'
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import API_URL from '../../config';

const Number_card = ({ number , tournaments}) => {
    const [money, setMoney] = useState(0);
    // console.log(prop ,"prop number card")
    const id = useSelector((state) => state.info.id);

    const fetchMoney = async () => {
      try {
        const response = await axios.get(`${API_URL}/money`, {
          params: {
            number: number,
            pid:id,
            tname:tournaments.name
          }});
          console.log(response.data);
        setMoney(response.data[0].money);
      } catch (error) {
        console.error('Error fetching money:', error);
      }
    };

    useEffect(() => {
      fetchMoney();
    }, []);

    const handleButtonClick = async (increment) => {
      try {
        console.log(id,"id")

          const response = await axios.put(`${API_URL}/money/add`, {
              money :increment,
              pid: id,
              num:number,
              tname:tournaments.name ,
          });
          fetchMoney();
          // Handle response as needed
      } catch (error) {
          console.error('Error:', error);
          // Handle error as needed
      }
  };

  return (
    <div className="container mt-5">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{number}</h5>
                            <p>Money: {money}</p>

                            <div className="btn-group-vertical">
                                <button type="button" className="btn btn-primary" onClick={() => handleButtonClick(10)}>+10</button>
                                <button type="button" className="btn btn-secondary" onClick={() => handleButtonClick(100)}>+100</button>
                                <button type="button" className="btn btn-success" onClick={() => handleButtonClick(1000)}>+1000</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Number_card

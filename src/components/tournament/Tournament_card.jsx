import React from 'react'
import { useState, useEffect } from 'react';

const Tournament_card = ({ name, pid, winner }) => {
  // console.log('Tournament',{ name, pid, winner })
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Tournament Details</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Name:</strong> {name}</li>
          <li className="list-group-item"><strong>ID:</strong> {pid}</li>
          <li className="list-group-item"><strong>Winner:</strong> {winner}</li>
        </ul>
      </div>
    </div>
    
  )
}

export default Tournament_card

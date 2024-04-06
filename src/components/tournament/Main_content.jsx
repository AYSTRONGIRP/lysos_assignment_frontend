import React from 'react'
import Number_card from './Number_card'

import { useDispatch, useSelector } from 'react-redux';

const Main_content = ({tournaments}) => {

  const id = useSelector((state) => state.info.id);

  return (
      <div className="container mt-5">
      
      <div className="row">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="col-md-6 mb-4">
            <Number_card number={index + 1} tournaments={tournaments}/>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Main_content

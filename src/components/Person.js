import React from 'react'
import './Person.css'

function Person(props) {

  return (
    <div className="Person">
        <p onClick={props.click}>This is {props.Name} and Possition is {props.Model_Possition}</p>
        <input type='text' onChange={props.changed} />
    </div>
  )
}

export default Person;
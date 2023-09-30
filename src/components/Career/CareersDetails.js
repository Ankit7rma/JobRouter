import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CareersDetails = () => {
    const { id } = useParams() 
    const [careers, setCrs] = useState([]);
useEffect(() => {
  const getCareers = async () => {
    const data = await fetch("http://localhost:4000/careers");
    const json = await data?.json();
    setCrs(json);
    if(!data.ok){
      throw Error("Could not find that error")
    }
};
getCareers();
}, []);
console.log(careers);
const career = careers
    return (
        <div className="career-details">
          <h2>Career Details for {career?.title}</h2>
          <p>Starting salary: {career?.salary}</p>
          <p>Location: {career?.location}</p>
          <div className="details">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!</p>
          </div>
        </div>
      )
    }

export default CareersDetails

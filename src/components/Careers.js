import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Careers() {
  const [careers, setCrs] = useState([]);
  useEffect(() => {
    const getCareers = async () => {
      const data = await fetch("http://localhost:4000/careers");
      const json = await data?.json();
      setCrs(json);
    };
    getCareers();
  }, []);
  // console.log(careers);

  return (
    <div className="careers">
      {careers?.map((career) => (
       <> <Link  to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
        
          {/* <p>Salary: {career.salary}</sp> */}
          <p>Location: {career.location}</p></Link></>
      ))}
      <Outlet/>
    </div>
  );
}

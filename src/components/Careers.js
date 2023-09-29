import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Careers() {
  const [careers, setCrs] = useState([]);
  useEffect(() => {
    const getCareers = async () => {
      const data = await fetch("http://localhost:4000/careers");
      const json = await data?.json();
      setCrs(json);
      console.log(careers);
    };
    getCareers();
  }, []);

  return (
    <div className="careers">
      {careers?.map((career) => (
       <> <Link to="/" key={career.id}>
          <p>{career.title}</p>
        </Link>
          <p>Salary: {career.salary}</p>
          <p>Location: {career.location}</p></>
      ))}
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Admission = () => {
      const [colleges, setColleges] = useState([]);
      useEffect(() => {
            fetch('https://college-server-tofail-ahmed.vercel.app/colleges/').then(res => res.json()).then(data => {
                  setColleges(data)
            })
      }, [])
      console.log(colleges);
      return (
            <div>
                  <h2 className='text-4xl text-center'>{colleges.length===0?'Loading...':""}</h2>
                  <div className='md:grid grid-cols-2'>
                        {colleges.map(college => (
                              <div className='flex mx-auto gap-12 my-12' key={college._id}>
                                    <img className='w-[200px] h-[200px] rounded-md ms-8 border-y-4 border-slate-800' src={college.college_image} alt="" />
                                    <div className='flex flex-col  justify-center'>
                                          <Link className='hover:font-bold text-xl text-slate-900 font-semibold' to={`/admissionForm/${college._id}`}>{college.college_name}</Link>
                                          <h1>Admission Date: {college.admission_date}</h1>
                                          <Link className="btn btn-outline border-b-4 bg-slate-400 w-[150px] my-4" to={`/collegedetails/${college._id}`}>
                                                More Detail
                                          </Link>
                                    </div>
                              </div>
                        ))}
                  </div>
            </div>
      );
};

export default Admission;
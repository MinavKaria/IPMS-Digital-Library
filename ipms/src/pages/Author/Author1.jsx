import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Author1() {
  const [formData, setFormData] = useState({
    title: '',
    abstract: '',
    keywords: '',
    subject: '',
    citation: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  return (
    <>
      <div className='w-full mx-auto'>
        <div className='w-full container mx-auto px-5 m-2'>
          <h1 className='text-black text-center text-4xl'>
            Paper Details
          </h1>
          <form className="container flex flex-col gap-8 opacity-110 w-3/5 rounded-3xl p-6 m-2">
            <div className='input flex flex-col'>
              <label htmlFor='title'>Title</label>
              <input
                placeholder='Enter Title'
                type='text'
                id='title'
                value={formData.title}
                onChange={handleChange}
                className='form-control border-2 border-gray-300 rounded-md p-2 bg-slate-200'
              />
            </div>
            <div className='input flex flex-col'>
              <label htmlFor='abstract'>Abstract</label>
              <input
                placeholder='Enter Abstract'
                type='text'
                id='abstract'
                value={formData.abstract}
                onChange={handleChange}
                className='form-control border-2 border-gray-300 rounded-md bg-slate-200 p-2 h-20 w-15'
              />
            </div>
            <div className='input flex flex-col'>
              <label htmlFor='keywords'>Keywords</label>
              <input
                placeholder='Enter Keywords'
                type='text'
                id='keywords'
                value={formData.keywords}
                onChange={handleChange}
                className='form-control border-2 border-gray-300 rounded-md p-2 bg-slate-200'
              />
            </div>
            <div className='input flex flex-col'>
              <label htmlFor='subject'>Subject</label>
              <input
                placeholder='Enter Subject'
                type='text'
                id='subject'
                value={formData.subject}
                onChange={handleChange}
                className='form-control border-2 border-gray-300 rounded-md p-2 bg-slate-200'
              />
            </div>
            <div className='input flex flex-col'>
              <label htmlFor='citation'>Citation</label>
              <input
                placeholder='Enter Citation'
                type='text'
                id='citation'
                value={formData.citation}
                onChange={handleChange}
                className='form-control border-2 border-gray-300 rounded-md p-2 bg-slate-200'
              />
            </div>
          </form>
          <div className="flex items-center justify-center mt-4">
            <span className="mr-2">Page 1 of 3</span>
          </div>
          <div className="flex items-center justify-center gap-10 mt-4">
            <Link className="btn btn-primary cursor-not-allowed" to="/author/paperdetails/1" > {"<"} Back</Link>
            <Link className="btn btn-primary" to="/author/paperdetails/2">Next {">"}</Link>
          
          </div>
        </div>
      </div>
    </>
  );
}

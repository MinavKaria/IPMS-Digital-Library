import React from 'react'
import AuthorSubmissionCard from '../../components/AuthorSubmissionCard'

function CE1() {
  return (
    <>
        <div className='w-full'>
        <div className='container mx-auto px-5'>
            <div className=''>
                <div className='text-6xl font-bold mt-5'>Dashboard</div>
                <div className='text-2xl mt-5'>Chief Editor</div>
            </div>

            <div>
                <AuthorSubmissionCard/>
                <AuthorSubmissionCard/>
                <AuthorSubmissionCard/>
                <AuthorSubmissionCard/>
            </div>
        </div>
            
        </div>
    </>
  )
}

export default CE1
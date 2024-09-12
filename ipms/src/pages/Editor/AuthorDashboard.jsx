import React from 'react'
import AuthorSubmissionFinal from '../../components/AuthorSubmissionFinal'


function AuthorSubmission() {
  return (
    <>
      <div className='w-full'>
        <div className='container mx-auto'>

          <div>
            <div className='text-6xl font-bold mt-5'>Dashboard</div>
            <div className='text-2xl mt-5'>Author Submissions</div>
          </div>

          <div>
              <AuthorSubmissionFinal/>
          </div>
          
        </div>

      </div>
    </>
  )
}

export default AuthorSubmission
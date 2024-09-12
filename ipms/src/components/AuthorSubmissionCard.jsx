import React from 'react'
import { Link } from 'react-router-dom'

function AuthorSubmissionCard() {
  return (
    <>
        <div className=' flex flex-row mt-5 bg-amber-200 p-5 justify-between rounded-lg'>
            <div className='flex flex-col justify-between'>
              <div>Paper ID</div>
              <div className=' bg-yellow-50 p-2 rounded-xl mb-2'>Date</div>
              <div className='bg-yellow-50 p-2 rounded-xl mb-2'>Author: Minav Karia</div>
            </div>
            <div className='flex flex-col justify-between'>
              <div>Status</div>
              <div className='bg-yellow-50 p-2 rounded-xl mb-2 text-red-600'>Under Review</div>
              <div></div>
            </div>
            <div className='flex flex-col justify-between'>
              <div>Due Date</div>
              <div className='bg-yellow-50 p-2 rounded-xl mb-2'>20/10/2024</div>
              <div></div>
            </div>
            <div className='flex flex-col justify-between'>
              <div>New Due Date</div>
              <div className='bg-yellow-50 p-2 rounded-xl mb-2'>25/12/2024</div>
              <div></div>
            </div>
            <div className='flex flex-col justify-between'>
              <div>Revisions</div>
              <div className='bg-yellow-50 p-2 rounded-xl mb-2'>2</div>
              <div></div>
            </div>
            <div>
              <div>
              <Link className='bg-yellow-50 p-2 rounded-xl mb-2' to="/editor/reviewerdetails">Assign Reviewer</Link>
              </div>
              <br />
              <div className='bg-yellow-50 p-2 rounded-xl mb-2'>View Reviewers</div>
              <div className='flex gap-5'>
                <Link className='bg-yellow-50 p-2 rounded-xl mb-2' to='/editor/reviewerdetails/1' >View</Link>
                <div className='bg-yellow-50 p-2 rounded-xl mb-2'>More</div>
              </div>
            </div>
          </div>
    </>
  )
}

export default AuthorSubmissionCard
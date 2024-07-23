import React from 'react'

function Footer() {
  return (
    <>
        <div className='footer'>
            <div>
                <p>© {new Date().getFullYear()} IPMS. All rights reserved.</p>
            </div>
        </div>
    </>
  )
}

export default Footer
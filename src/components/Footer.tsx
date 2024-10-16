import React from 'react'

const Footer = () => {
  return (
    <div className='mt-16 py-6 text-center bg-accent'>
        <p>�� 2024 Noureen. All rights reserved.</p>
        <div className='flex gap-4'>
            <a href='#' className='text-gray-500 hover:text-gray-600'>Privacy Policy</a>
            <a href='#' className='text-gray-500 hover:text-gray-600'>Terms & Conditions</a>
        </div>
        <p>Built with Next.js and Tailwind CSS</p>
    </div>
  )
}

export default Footer

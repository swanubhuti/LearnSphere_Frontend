import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold text-center mt-24">404 Not Found</h1>
        <p className="text-center mt-4">The page you are looking for does not exist.</p>
        <div className="flex justify-center mt-8">
            <img src="/path/to/your/image.png" alt="Not Found" className="w-1/2" />
        </div>
    </div>
  )
}

export default NotFound
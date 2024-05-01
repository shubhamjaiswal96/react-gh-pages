import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container mt-4">
      <h1>Welcome to Product Management System</h1>
      <p>Here you can manage your products easily.</p>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-warning" onClick={() => navigate('/products')}>
          Show All Products
        </button>
        <button type="button" className="btn btn-warning" onClick={() => navigate('/new_product')}>
          Add New Product
        </button>
      </div>
    </div>
  )
}

export default Home

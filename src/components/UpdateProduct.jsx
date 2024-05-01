import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({});
  const [updatedProduct, setUpdatedProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const result = await response.json();
        setProduct(result);
        const { title, description, price, rating } = result;
        const formDataToUpdate = { title, description, price, rating };        
        setFormData(prevFormData => ({ ...prevFormData, ...formDataToUpdate }));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      setUpdatedProduct(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">

      {updatedProduct ? (
        <div>
          <h2>Product Updated Successfully</h2>
          <p>Updated Product Details:</p>
          <p>Title: {updatedProduct.title}</p>
          <p>Description: {updatedProduct.description}</p>
          <p>Price: ${updatedProduct.price}</p>
          <p>Rating: {updatedProduct.rating}</p>
          {/* Display other product details as needed */}
        </div>
      ) : (
        <div>
          <h1 className="mb-4">Update Product</h1>
          {product ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input type="number" className="form-control" id="price" name="price" value={formData.price} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="rating" className="form-label">Rating</label>
                <input type="number" className="form-control" id="rating" name="rating" value={formData.rating} onChange={handleChange} />
              </div>
              {/* Add input fields for other product details as needed */}
              <button type="submit" className="btn btn-primary">Update</button>
            </form>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default UpdateProduct;

import React, { useState } from 'react';

const NewProduct = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
  });
  const [newProduct, setNewProduct] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      setNewProduct(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      {!newProduct && (
        <div>
          <h1 className="mb-4">Add New Product</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">Add Product</button>
          </form>
        </div>
      )}
      {newProduct && (
        <div className="mt-4">
          <h2>Product Added Successfully</h2>
          <p>ID: {newProduct.id}</p>
          <p>Title: {newProduct.title}</p>
        </div>
      )}
    </div>
  );
};

export default NewProduct;

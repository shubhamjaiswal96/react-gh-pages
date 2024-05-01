import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Product = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const result = await response.json();
        setProduct(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`, {
        method: 'DELETE'
      });
      const deletedProduct = await response.json();
      if (deletedProduct.isDeleted) {
        console.log('Product deleted:', deletedProduct);
        navigate('/');
        window.alert('Product deleted successfully.');
      } else {
        console.log('Failed to delete product');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Product Details</h1>
      {product ? (
        <div className="card">
          <img src={product.thumbnail} className="card-img-top img-fluid" alt={product.title} style={{ width: '500px', height: '400px' }} />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text"><strong>Description:</strong> {product.description}</p>
            <p className="card-text"><strong>Price:</strong> ${product.price}</p>
            <p className="card-text"><strong>Rating:</strong> {product.rating}</p>
            <p className="card-text"><strong>Stock:</strong> {product.stock}</p>
            <p className="card-text"><strong>Brand:</strong> {product.brand}</p>
            <p className="card-text"><strong>Category:</strong> {product.category}</p>
            <button className="btn btn-primary btn-sm" onClick={() => navigate(`/update_product/${product.id}`)} >Update</button>
            <button className="btn btn-danger btn-sm" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Product;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const Products = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const result = await response.json();
        setData(result.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center">Products</h1>
      {data.length > 0 ? ( // Check if data is present
        <table className="table table-hover">
          <thead>
            <tr className="table-info">
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Stock</th>
              <th>Show</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => (
              <tr key={product.id} className="table-secondary">
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>${product.price}</td>
                <td>{product.rating}</td>
                <td>{product.stock}</td>
                <td>
                  <div>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      Show
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Products;

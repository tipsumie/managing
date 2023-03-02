import React,{useEffect, useState} from 'react'
import { MainContent, ProductCard } from '../../../components'
import { Row, Col } from 'antd';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_BASE_URL;

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/products`, {
        headers: {
          authtoken: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div>
      <h1 style={{textAlign:'center'}}>All Products</h1>
    <MainContent>
      <Row gutter={[12, 10]}>
        {products.map((product) => (
          <Col xs={24} sm={12} lg={8} xl={6} key={product?._id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </MainContent>
  </div>

  )
}

export default Home
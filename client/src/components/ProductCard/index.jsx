import React from 'react';
import { Card, Image, Row } from 'antd';
import AddToCartBtn from '../AddToCartBtn';
import styled from 'styled-components';

const apiUrl = import.meta.env.VITE_BASE_IMAGE_URL;

const ProductCard = ({ product }) => {
  return (
    <CardContainer
      key={product?._id}
      cover={
        <ImageContainer>
          <Image
            style={{
              height: '150px',
              marginTop: '15px',
            }}
            src={`${apiUrl}/images/${product?.image}`}
            preview={false}
          />
        </ImageContainer>
      }
      style={{ width: '100%' }}
    >
      <Row>
        <ProductTitle>{product?.name}</ProductTitle>
      </Row>
      <Row>
        <span style={{minHeight:'70px'}}>{product?.description}</span>
      </Row>
      <Row justify='space-between'>
        <h4>{`Price $ ${product?.price}`}</h4>
        <AddToCartBtn onClick={() => {}} />
      </Row>
    </CardContainer>
  );
};

export default ProductCard;

const ProductTitle = styled.h2`
  font-size: 14px;
  color: #000;
  &:hover {
    color: #0080fe;
  }
`;

const ImageContainer = styled.div`
text-align: center;
 
`;

const CardContainer = styled(Card)`
  min-height: 350px;
`;

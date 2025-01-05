import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Col, Row, Button, Typography} from "antd";
import { HeartOutlined, ShoppingCartOutlined , HeartFilled , EyeOutlined } from '@ant-design/icons';
import { getAllDataById } from "../../../services/helpers";  
import { endpoints } from "../../../services/contest"; 

const { Title, Text } = Typography;

const ProductDetail = () => {
  const [prod, setProd] = useState([]);
  const { id } = useParams(); 
  const back = useNavigate()

  const getAllProd = async () => {
    try {
      const data = await getAllDataById(endpoints.products, id); 
      setProd(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllProd(); 
  }, [id]); 


  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={16}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            cover={<img alt="product" src={prod.image} style={{ height: '300px', objectFit: 'contain' }} />}
            actions={[
              <HeartOutlined />,
              <ShoppingCartOutlined />,
              <EyeOutlined onClick={()=> detailIcon(product.id) }/>,
            ]}
          >
            <div style={{ marginTop: '20px' }}>
              
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={16} lg={18}>
          <div >
          <Title level={3}>{prod.title}</Title>
            <Text type="secondary">{prod.category}</Text>
            <Title strong style={{ fontSize: '18px' }}>
                ${prod.price}
              </Title>
            <Title level={2}>Product Description</Title>
            <Text>{prod.description}</Text>
            <Title>
            <Button onClick={()=>{back(-1)}}>Back</Button>
            </Title>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;

import { useState, useEffect,useContext } from "react";
import { Card, Row, Col, Typography, Space, Rate } from "antd";
import { HeartOutlined, ShoppingCartOutlined , HeartFilled , EyeOutlined } from '@ant-design/icons';
import { getAllData } from '../../../services/helpers';
import { endpoints } from "../../../services/contest";
import styles from './index.module.scss'
import { useNavigate } from "react-router-dom";
import {FavoritestContext } from "../../../context/FavoriteContext";


const Products = () => {
  const { Title } = Typography;
  const [products,setProducts] = useState([])
  const [search , setSearch] = useState("")
  const [sort,setSort] = useState('default')
  const {fav,favToggle} = useContext(FavoritestContext)
  const navigate = useNavigate(); 
  

  const filtered = products.filter((p)=>{
   return  p.title.toLowerCase().includes(search.toLocaleLowerCase().trim())
  })

  const sortedProd = filtered.toSorted((a,b)=>{
    switch (sort) {
      case 'asc':
        return a.price - b.price
      case 'desc':
        return b.price - a.price
    }
  })

   console.log(filtered);

  const getAllProducts = async()=>{
    const data = await getAllData(endpoints.products)
    setProducts(data)
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  const detailIcon = (productId) => {
    navigate(`${productId}`); 
  };
  
  return (
    <>
    <div className="container">
    <div className={styles['search-bar']}>
      <input type="text" placeholder="Search Here" className="search" onChange={(e)=>{setSearch(e.target.value)}} />
      <select name="price" id="sorting" onChange={(e)=>{setSort(e.target.value)}}>
        <option value="default">Sort by Price Default</option>
        <option value="asc">Sort by Price ASC</option>
        <option value="desc">Sort by Price Desc</option>
      </select>
    </div>
    <div style={{ marginTop: '50px' }}>
    <Row gutter={[16, 24]} justify="center">
      { sortedProd.length > 0 && sortedProd.map((product) => (
        <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
          <Card
            hoverable
            cover={<img alt={product.title} src={product.image} style={{ width: '100%', height: '400px', objectFit: "contain" }} />}
            actions={[
              <ShoppingCartOutlined />,
              <EyeOutlined onClick={()=> detailIcon(product.id) }/>,
              
            ]}
            style={{
              width: '100%',
              maxWidth: '350px',   
              borderRadius: '8px',
              margin: '0 auto',     
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
              transition: 'transform 0.3s ease',  
            }}
          >
            {fav && fav.find((item) => item.id === product.id) 
              ? <HeartFilled onClick={() => favToggle(product)} style={{ color: 'red' }} />
              : <HeartOutlined onClick={() => favToggle(product)} />}
            <Title level={4}>{product.title}</Title>
            <Space direction="vertical" size={6}>
              <p>{product.description.length > 80 ? `${product.description.slice(0, 80)}...` : product.description}</p>
              <p><strong>${product.price}</strong></p>
              <Rate disabled value={product.rating.rate} />
              <p>{product.rating.count} reviews</p>
            </Space>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
    </div>
    </>
  );
}

export default Products;

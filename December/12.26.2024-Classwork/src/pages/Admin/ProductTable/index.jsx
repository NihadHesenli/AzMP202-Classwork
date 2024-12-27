import React, { useEffect, useState } from 'react';
import { Table, Tooltip } from 'antd';
import {endpoints} from '../../../services/constants/'
import getAllData from '../../../services/helpers';

const columns = [
  {title: 'id',
   dataIndex: 'id'},
  {
    title: 'Photo',
    dataIndex: 'image',
    render : (img)=>{
      return <img src={img} alt="" width={'100'}/>  
    }
  },
  {
    title: 'Title',
    dataIndex: 'title',
  },
  {
    title: 'Category',
    dataIndex: 'category',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    render: (text) => (
      <Tooltip title={text} color={"black"} key={"black"}>
        {text.slice(0, 50)}...
      </Tooltip>
    ),
  },
  {
    title: 'Count',
    dataIndex: 'rating',
    key: 'count',
    render : (r)=> r?.count,
    sorter: (a, b) => a.count - b.count,
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const ProductTable = () => {
  const [products , setProducts] = useState([])

  const getAllProducts = async()=>{
    const res = await getAllData(endpoints.products)
    setProducts(res)
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <div id="admin-products">
    <div className="container">
      <div className="admin-products">
        <Table
          columns={columns}
          dataSource={products}
          onChange={onChange}
          showSorterTooltip={{
            target: "sorter-icon",
          }}
          rowKey={"id"}
        />
      </div>
    </div>
  </div>
  );
}

export default ProductTable;

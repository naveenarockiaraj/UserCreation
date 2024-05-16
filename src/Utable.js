import React, { useEffect, useState } from 'react'
import { Avatar, Table } from 'antd';
import apiServices from './apiServices';

const Utable = () => {
  const [tableList, setTableList]=useState([])
  useEffect (()=>{
    apiServices.userGetList().then((data ) =>{
      console.log(data.data, 'Naveen1');
      setTableList(data.data)
    })
  },[])

  const tableColumns = [
    {
      title: 'Profile',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (img,index) => (
        <>
        <Avatar size={64} src={img} />
        </>
      ),},
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Number',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'Street',
      dataIndex: 'street',
      key: 'street',
    },
    {
      title: 'Pincode',
      dataIndex: 'pincode',
      key: 'pincode',
    },
  ];

  // Sample data for demonstration
  const tableData = [
    {
      key: '1',
      name: 'John Brown',
      email: 'john@example.com',
      number: 123456,
      country: 'India',
      state: 'Maharashtra',
      city: 'Mumbai',
      pincode: 400001,
    },
    // Add more sample data as needed...
  ];

  return (

    <div style={{height:'100%'}}>
      <div style={{height:'60vh'}}>
<Table
        columns={tableColumns}
        dataSource={tableList}
        pagination={false}
        style={{ margin: '20px', }}
      />
</div>
    </div>

  )
}

export default Utable
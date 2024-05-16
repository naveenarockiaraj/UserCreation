import React, { useEffect, useState } from 'react'
import { Avatar, Button, Table } from 'antd';
import apiServices from './apiServices';
import './App.css';


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


  return (

    <div style={{height:'100%'}}>
      <Button type='dashed' id='ant-r-btn' >Back to form</Button>
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
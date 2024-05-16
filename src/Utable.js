import React, { useEffect, useState } from 'react'
import { Avatar, Button, Table } from 'antd';
import apiServices from './apiServices';
import './App.css';
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Utable = ({isEdit, setEdit, editDataList, setEditDataList}) => {
  const navigate= useNavigate()
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
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (params) => {
        const handleEdit= ()=>{
          console.log(params, 'params')
          setEdit(true)
          setEditDataList(params)
          navigate('/')
        }
        return(
        <>
          <CiEdit onClick={()=>handleEdit()}/>
          <MdDeleteOutline/>
        </>
      )},
      // render: () => <a>Delete</a>,
    },
  ];

  return (

    <div style={{height:'100%'}}>
      <Button type='primary' id='ant-r-btn' >Back to form</Button>
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
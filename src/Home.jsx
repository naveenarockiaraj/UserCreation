import React from 'react'
import './App.css';
import { Button, Form, Input, InputNumber, Select, Upload, Image, message, Table } from 'antd';
import { FcAddImage } from "react-icons/fc";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  apiServices  from './apiServices';

const Home = ({isEdit, setEdit, editDataList, setEditDataList}) => {
    console.log(editDataList, "sssss")
    const [form] = Form.useForm();
const navigate = useNavigate();
const countriesList = [
{id: 1, name: "India"},    
{id: 2, name: "United States"},    
{id: 3, name: "United Kingdom"},    
{id: 4, name: "Canada"}
];
const statesList = [
{id: 1, name: "Maharashtra", country_id: 'India'},
{id: 2, name: "Karnataka", country_id: 'India'},
{id: 3,name: "New York", country_id: 'United States'},
{id: 4,name: "Indiana", country_id: 'United States'},
{id: 5,name: "London", country_id: 'United Kingdom'},
{id: 6,name: "Barca", country_id: 'United Kingdom'},
{id: 7,name: "Albert", country_id: 'Canada'},
{id: 8,name: "Quebec", country_id: 'Canada'},
];
const citiesLits = [
{id: 1, name: "Mumbai", state_id: 'Maharashtra'},
{id: 2, name: "Bangalore", state_id: 'Karnataka'},
{id: 3, name: "New York City", state_id: 'New York'},
{id: 4, name: "Hawkins", state_id: 'Indiana'},
{id: 5, name: "Bakers", state_id: 'London'},
{id: 6, name: "Barcelona", state_id: 'Barca'},
{id: 7, name: "Lethbridge", state_id: 'Alber'},
{id: 8, name: "Westlock", state_id: 'Quebec'},
];
//UseStates
const [countries, setCountries] = useState();
const [states, setStates] = useState();
const [cities, setCities] = useState();
const [previewImage, setPreviewImage] = useState();
const [name, setName]=useState('');  
console.log(name, 'name')
useEffect(() => {
    if (editDataList && editDataList.name) {
        setName(editDataList.name);
    }
}, [editDataList]);

// css for form layout
const layout = { labelCol: { span: 5,}, wrapperCol: { span: 15,}, };
//Upload image 
const handleUpload = (image) => {
const isImage = image.type.startsWith('image/');
if (!isImage) {
    message.error(`${image.name} is not an image file`);
} else {
const reader = new FileReader();
    reader.onloadend = () => {
    setPreviewImage(reader.result); };
    reader.readAsDataURL(image);
} return false;
};
const handleRemove = () => {
setPreviewImage();
};
//Country,state and city
const handleCountryChange = (value)=>{
console.log(value, "countryData");

setCountries(value)
setStates("")
setCities("")
};
const onStateChange = (value) => {
setStates(value);
setCities("")
};
const onSelectCities =(value) =>{
setCities(value)
}
const stateFilterList=statesList.filter((state) => (
state.country_id==countries
));
const cityFilterList=citiesLits.filter((state) => (
    state.state_id==states
));
//validation message
const validateMessages = {
required: '${label} is required!',
};
//form submit
const onFinish = (values) => {
    console.log(values, 'formdata');
    apiServices.addUserList(values)
        .then(() => {
            navigate("/userdetail");
        })
        .catch((error) => {
            console.error("Error adding user:", error);
        });
};

return (
<div className="App" id="div-1">
    {/* form */}
    <Form {...layout}
    id="form-new"
    form={form}
    initialValues={{ name: editDataList ? editDataList.name : '' ,
        email: editDataList ? editDataList.email : '' ,
        phone: editDataList ? editDataList.phone : '' ,
        country: editDataList ? editDataList.country : '' ,
        state: editDataList ? editDataList.state : '' ,
        city: editDataList ? editDataList.city : '' ,

     }}
    onFinish={onFinish} 
    style={{ maxWidth: 600, }}
    validateMessages={validateMessages} >
    <h1>User Form</h1>

<Form.Item
    name={['name']}
    label="Name"
    rules={[ { required: true, max:15, min:8, }, ]} >
    <Input  />
</Form.Item>

    <Form.Item 
    name={['avatar']}
    label="Photo">
    {!previewImage && (
    <Upload beforeUpload={handleUpload} >
        <Button id="ant-btn-1" icon={<FcAddImage />}>Upload </Button>
    </Upload>   )}
    {previewImage && (
    <div>
        <Image width={100} src={previewImage} />
        <Button id="ant-btn-2" onClick={handleRemove} > Remove </Button>
    </div> )}
    </Form.Item>

<Form.Item
    name={['email']}
    label="Email"
    rules={[ { required:'true', type: 'email', }, ]} >
    <Input />
</Form.Item>

<Form.Item name={['phone']}
label="Number"
rules={[ {  type: 'number',}, ]} >
    <InputNumber />
</Form.Item>

<Form.Item 
name={['country']}
label="Country" >
<Select
    onChange={handleCountryChange}
    options={countriesList.map((country) => ({
        label: country.name,
        value: country.name,
    }))}
    />
</Form.Item>

<Form.Item 
name={['state']}
label="State" >
<Select
    value={states}
    onChange={onStateChange}
    options={stateFilterList.map((state) => ({
        label: state.name,
        value: state.name,
    }))}
    />
</Form.Item>

<Form.Item
name={['city']} 
 label="Citie">
    <Select
    value={cities}
    onChange={onSelectCities}
    options={cityFilterList.map((city) => ({
        label: city.name,
        value: city.name,
        }))}      
    />
</Form.Item>

<Form.Item
    name={['street']}
    label="Street">
    <Input />
</Form.Item>

<Form.Item  
name={['pincode']}
label="Pincode" rules={[ {type:'number', }, ]}>
    <InputNumber/>
</Form.Item>

<Form.Item 
    wrapperCol={{...layout.wrapperCol, offset: 8, }} >
    <Button id="ant-btn" type="primary" htmlType="submit" >
    Submit
    </Button>
</Form.Item>
</Form>
</div>
)
}

export default Home
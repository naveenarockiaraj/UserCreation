import './App.css';
import { Button, Form, Input, InputNumber, Select, Upload, Image, message } from 'antd';
import { FcAddImage } from "react-icons/fc";
import { useEffect, useState } from 'react';
import { apiServices } from './apiServices';

function App() {
  const countriesList = [
    {id: 1, name: "India"},    
    {id: 2, name: "United States"},    
    {id: 3, name: "United Kingdom"},    
    {id: 4, name: "Canada"}
  ];
  const statesList = [
    {id: 1, name: "Maharashtra", country_id: 1},    
    {id: 2, name: "Karnataka", country_id: 1},    
    {id: 3,name: "New York", country_id: 2}
  ];
  const citiesLits = [{id: 1, name: "Mumbai", state_id: 1},
    {id: 2, name: "Bangalore", state_id: 2},
    {id: 3, name: "New York City", state_id: 3}
  ];
//UseStates
  const [countries, setCountries] = useState();
  const [states, setStates] = useState();
  const [cities, setCities] = useState();
  const [previewImage, setPreviewImage] = useState();
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
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="App" id="div-1">
      
{/* form */}
      <Form {...layout}
      id="form-new"
      onFinish={onFinish} 
      style={{ maxWidth: 600, }}
      validateMessages={validateMessages} >
        <h1>User Form</h1>
    <Form.Item
      name={[ 'User Name']}
      label="Name"
      rules={[ { required: true, max:15, min:8, }, ]} >
      <Input />
    </Form.Item>

      <Form.Item label="Photo">
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
      name={['User Email']}
      label="Email"
      rules={[ { required:'true', type: 'email', }, ]} >
      <Input />
    </Form.Item>

    <Form.Item name={['Number']}
    label="Number"
    rules={[ {  type: 'number', min:5, max:10, }, ]} >
      <InputNumber />
    </Form.Item>

    <Form.Item label="Country" >
    <Select
        onChange={handleCountryChange}
        options={countriesList.map((country) => ({
          label: country.name,
          value: country.id,
        }))}
      />
    </Form.Item>

    <Form.Item label="State" >
    <Select
        value={states}
        onChange={onStateChange}
        options={stateFilterList.map((state) => ({
          label: state.name,
          value: state.id,

        }))}
      />
    </Form.Item>

    <Form.Item label="Cities">
      <Select
        value={cities}
        onChange={onSelectCities}
        options={cityFilterList.map((city) => ({
          label: city.name,
          value: city.id,
          }))}      
      />
    </Form.Item>

    <Form.Item  label="Pincode" rules={[ {type:'number', }, ]}>
      <InputNumber/>
    </Form.Item>
    
    <Form.Item 
      wrapperCol={{...layout.wrapperCol, offset: 8, }} >
      <Button id="ant-btn" type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    
    </div>
  );
}

export default App;

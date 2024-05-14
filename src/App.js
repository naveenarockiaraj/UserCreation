import './App.css';
import { Button, Form, Input, InputNumber, Select, } from 'antd';
import { useEffect, useState } from 'react';
import { apiServices } from './apiServices';


const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};
const stateData = ['Zhejiang', 'Jiangsu'];

function App() {
  // useEffect(()=>{
  //   apiServices.userGetList().then ((data)=>
  //     {
  //       console.log(data, 'fffccfd');
  //     }
  // )
  // },[]
  // )


  // css for form layout
  const layout = { labelCol: { span: 5,}, wrapperCol: { span: 15,}, };

//validation message
  const validateMessages = {
    required: '${label} is required!',
  };

  //Country,state and city
  const [cities, setCities] = useState( 
    cityData
    [stateData[0]]
  );
  const [secondCity, setSecondCity] = useState(
    cityData
    [stateData[0]]
    [0]);
  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };
  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };

  const onFinish = (values) => {
    //
    console.log(values);
  };

  return (

    <div className="App">
{/* form */}
      <Form {...layout} name="nest-messages" onFinish={onFinish}
    style={{ maxWidth: 600, }}
    validateMessages={validateMessages} >

    <Form.Item
      name={[ 'User Name']}
      label="User Name"
      rules={[ { required: true, max:15, min:8, }, ]} >
      <Input />
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

    <Form.Item label="Country">
      <Select/>
    </Form.Item>

    <Form.Item label="State" >
    <Select
        defaultValue={stateData[0]}
        onChange={handleProvinceChange}
        options={stateData.map((province) => ({
          label: province,
          value: province,
        }))}
      />
    </Form.Item>

    <Form.Item label="City" >
    <Select
        value={secondCity}
        onChange={onSecondCityChange}
        options={cities.map((city) => ({
          label: city,
          value: city,
        }))}
      />
    </Form.Item>

    <Form.Item  label="Pincode" rules={[ {type:'number', }, ]}>
      <InputNumber/>
    </Form.Item>
    
    <Form.Item
      wrapperCol={{...layout.wrapperCol, offset: 8, }} >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    
    </div>
  );
}

export default App;

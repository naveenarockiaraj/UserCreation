import './App.css';
import { Button, Form, Input, InputNumber, Select, } from 'antd';
import { useEffect, useState } from 'react';
import { apiServices } from './apiServices';



// const countryData = ['India', 'USA', 'UK', 'Australia', 'Canada'];
// const stateData = {
//   India:['Kerala','Tamilnadu','Andhara','Karnataka'],
//   USA:['Indiana','Lasvegas','Sanfransisco','NYC'],
//   UK:['London','Manchester','Birmingham','Liverpool'],
//   Australia:['Sydney','Melbourne','Brisbane','Perth'],
//   Canada:['Toronto','Vancouver','Montreal','Calgary'],
// };
// const cityData = {
//   Kerala:['Kochi','Kozhikode','Thrissur','Kollam'],
//   Tamilnadu:['Chennai','Coimbatore','Madurai','Tiruchirappalli'],
//   Andhara:['Hyderabad','Visakhapatnam','Vijayawada','Warangal'],
//   Karnataka:['Bengaluru','Mysuru','Hubballi','Davangere'],
// };

function App() {
  const countriesList = [
    {
      id: 1,
      name: "India"
    },
    {
      id: 2,
      name: "United States"
    },
    {
      id: 3,
      name: "United Kingdom"
    },
    {
      id: 4,
      name: "Canada"
    }
  ];

  const statesList = [
    {
      id: 1,
      name: "Maharashtra",
      country_id: 1
    },
    {
      id: 2,
      name: "Karnataka",
      country_id: 1
    },
    {
      id: 3,
      name: "New York",
      country_id: 2
    }
  ];

  const citiesLits = [
    {
      id: 1,
      name: "Mumbai",
      state_id: 1
    },
    {
      id: 2,
      name: "Bangalore",
      state_id: 2
    },
    {
      id: 3,
      name: "New York City",
      state_id: 3
    }
  ];

  const [countries, setCountries] = useState();
  const [states, setStates] = useState();
  const [cities, setCities] = useState();

  // css for form layout
  const layout = { labelCol: { span: 5,}, wrapperCol: { span: 15,}, };

//validation message
  const validateMessages = {
    required: '${label} is required!',
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
      // console.log(stateFilterList, "stateFilterList");
  
  const cityFilterList=citiesLits.filter((state) => (
        state.state_id==states
    ));
        // console.log(cityFilterList, "cityFilterList");

  const onFinish = (values) => {
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

    <Form.Item label="Country" >
    <Select
        defaultValue=""
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
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    
    </div>
  );
}

export default App;

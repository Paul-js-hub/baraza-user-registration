import React, {useState} from 'react';
import axios from 'axios'

import "./register.css";

import {
    Form,
    Input,
    InputNumber,
    Cascader,
    Select,
    Row,
    Col,
    Card,
    Checkbox,
    Button,
    AutoComplete,
  } from 'antd';

import "./register.css";

const Register = () =>{
    const [form] = Form.useForm();
    const [firstname, setFirstName] = useState("");
    const [othernames, setOtherNames] = useState("");
    const [id, setID] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [gender, setGender] = useState(["Male", "Female", "Other"]);
    const [dateofbirth, setDateOfBirth] = useState("");
    const [county, setCounty] = useState(["Kisii", "Nairobi", "Kwale"]);
    const [constituencies, setConstituencies] = useState(["Bomachoge", "Bobasi", "Kajiado"]);
    const [ward, setWard] = useState(["Rongai", "Uthiru", "South B"]);
    const [pollingstation, setPollingStation] = useState(["Kenyenya", "Kabianga", "Tendere"]);


const onSubmit = (e) => {
    console.log("e>>>", e)
    //e.preventDefault();
    axios.post(process.env.REACT_APP_BASE_URL + "api/barazauser", {
        firstname,
        othernames,
        id,
        phonenumber,
        gender,
        dateofbirth,
        county,
        constituencies,
        ward, 
        pollingstation
    })
    .then((response)=>{
        console.log("Response>>>", response.data)
    })
    .catch((error)=>{
        console.log(error)
    })
}

const { Option } = Select;


return (
    <Card style={{width: 900}}>
        <Form form={form} name="register"
      onFinish={onSubmit}>
      <Row>
          <Col md={8}>
              <h3>Company Logo</h3>
              <img />
          </Col>
          <Col md={8}>
          <Form.Item
        name="firstname"
        label="First Name"
        rules={[
          {
            required: true,
            message: 'Please Input your firstname!',
          },
        ]}
      >
        <Input
          value={firstname}
          onChange={(e)=>setFirstName(e.target.value)} 
        />
      </Form.Item>
      <Form.Item
        name="othernames"
        label="Other Names"
        rules={[
          {
            required: true,
            message: 'Please input your other names!',
          },
        ]}
      >
        <Input
          value={othernames}
          onChange={(e) => setOtherNames(e.target.value)} 
        />
      </Form.Item>
      <Form.Item
        name="id"
        label="ID / Passport Number"
        rules={[
          {
            required: true,
            message: 'Please input your ID/Passport Number!',
          },
        ]}
      >
        <Input 
          value={id}
          onChange={(e)=> setID(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="phonenumber"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
            placeholder: "e.g 07xxxxxxxx" 
          },
        ]}
      >
        <Input 
          value={phonenumber}
          onChange={(e)=> setPhoneNumber(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: 'Please select gender!',
          },
        ]}
      >
        <Select placeholder="Add Gender">
            {gender.map((val, index)=> {
                console.log("GI>>>", gender[0].toLocaleLowerCase())
                return(
                    <Option key={index} value={gender[index]}>{val}</Option>
                );
            })}
        </Select>
      </Form.Item>
      </Col>
      <Col md={8}>
      <Form.Item
        name="dateofbirth"
        label="Date of Birth"
        rules={[
          {
            required: true,
            message: 'Please input your Date of Birth!',
          },
        ]}
      >
        <Input 
          value={dateofbirth}
          onChange={e => setDateOfBirth(e.target.value)}
        />
      </Form.Item>
    <Form.Item
        name="county"
        label="County"
        rules={[
          {
            required: true,
            message: 'Please select County!',
          },
        ]}
      >
        <Select placeholder="Add County">
            {county.map((value, index)=>{
                return(
                    <Option key={index} value={value}>{value}</Option>
                )
            })}
        </Select>
      </Form.Item>
      <Form.Item
        name="constituencies"
        label="Constituencies"
        rules={[
          {
            required: true,
            message: 'Please select constituencies!',
          },
        ]}
      >
        <Select placeholder="Add Constituencies">
           {constituencies.map((value, index)=>{
               return(
                   <Option key={index} value={value}>{value}</Option>
               )
           })}
        </Select>
      </Form.Item>
      <Form.Item
        name="ward"
        label="Ward"
        rules={[
          {
            required: true,
            message: 'Please select ward!',
          },
        ]}
      >
        <Select placeholder="Add Ward">
          {ward.map((value, index)=>{
              return(
                  <Option key={index} value={value}>{value}</Option>
              )
          })}
        </Select>
      </Form.Item>
      <Form.Item
        name="pollingstation"
        label="Polling Station"
        rules={[
          {
            required: true,
            message: 'Please select polling station!',
          },
        ]}
      >
        <Select placeholder="Add Polling Station">
          {pollingstation.map((value, index)=>{
              return(
                  <Option key={index} value={value}>{value}</Option>
              )
          })}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit Details
        </Button>
      </Form.Item>
      </Col>
      </Row>
    </Form>
    <Row>
      <Col md={24}>
        <Form.Item>
        <Button type="secondary" htmlType="submit">
          Verify Status
        </Button>
        </Form.Item>
      </Col>
    </Row>
    </Card>
  );

}

export default Register;
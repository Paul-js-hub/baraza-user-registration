import React, {useState} from 'react';
import axios from 'axios';
import { toast  } from 'react-toastify';
import { Link } from "react-router-dom"
import logo from '../../images/logo.jpg'

import "./register.css";

import {
    Form,
    Input,
    Select,
    Row,
    Col,
    Card,
    Button,
  } from 'antd';

import "./register.css";

const Register = () =>{
    const [form] = Form.useForm();
    const [firstname, setFirstName] = useState("");
    const [othernames, setOtherNames] = useState("");
    const [idorpassportnumber, setID] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [gender, setGender] = useState("");
    const [dateofbirth, setDateOfBirth] = useState("");
    const [county, setCounty] = useState("");
    const [constituencies, setConstituencies] = useState("");
    const [ward, setWard] = useState("");
    const [pollingstation, setPollingStation] = useState("");
    
    const genders = ["Male", "Female", "Other"]

const onSubmit = (e) => {
    axios.post(process.env.REACT_APP_BASE_URL + "api/barazauser", {
        firstname,
        othernames,
        idorpassportnumber,
        phonenumber,
        gender,
        dateofbirth,
        county,
        constituencies,
        ward, 
        pollingstation
    })
    .then((response)=>{
        const message = response.data.message;
        //reset()
        toast.success(message);
    })
    .catch((error)=>{
        console.log(error)
    })
}

const reset = ()=>{
  setFirstName("")
  setOtherNames("")
  setID("")
  setPhoneNumber("")
  setGender("")
  setDateOfBirth("")
  setCounty("")
  setConstituencies("")
  setWard("")
  setPollingStation("")
}
const { Option } = Select;

return (
    <div className="register-container">
      <Card style={{width: 900}}>
        <Form form={form} name="register"
      onFinish={onSubmit}>
      <Row className="register-row">
          <Col md={8}>
              <div className="company-logo">
              <img src={logo} alt="Company Logo" />
              </div>
          </Col>
          <Col md={8}>
          <Form.Item
        name="firstname"
        label="First Name"
        className="input-area"
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
        className="input-area"
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
        className="input-area"
        rules={[
          {
            required: true,
            message: 'Please input your ID/Passport Number!',
          },
        ]}
      >
        <Input 
          value={idorpassportnumber}
          onChange={(e)=> setID(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="phonenumber"
        label="Phone Number"
        className="input-area"
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
        className="input-area"
        rules={[
          {
            required: true,
            message: 'Please select gender!',
          },
        ]}
      >
        <Select placeholder="Add Gender" onChange={value => setGender(value)}>
        {genders.map((val, index)=> {
                return(
                    <Option key={index} value={val}>{val}</Option>
                );
            })}
        </Select>
      </Form.Item>
      </Col>
      <Col md={8}>
      <Form.Item
        name="dateofbirth"
        label="Date of Birth"
        className="input-area"
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
        className="input-area"
        rules={[
          {
            required: true,
            message: 'Please select County!',
          },
        ]}
      >
        <Select placeholder="Add County" onChange={value =>setCounty(value)}>
            {/* {county.map((value, index)=>{
                return(
                    <Option key={index} value={value}>{value}</Option>
                )
            })} */}
            <Option value="nairobi">Nairobi</Option>
          <Option value="kisii">Kisii</Option>
          <Option value="narok">Narok</Option> 
        </Select>
      </Form.Item>
      <Form.Item
        name="constituencies"
        label="Constituencies"
        className="input-area"
        rules={[
          {
            required: true,
            message: 'Please select constituencies!',
          },
        ]}
      >
        <Select placeholder="Add Constituencies" onChange={value =>{setConstituencies(value)}}>
           {/* {constituencies.map((value, index)=>{
               return(
                   <Option key={index} value={value}>{value}</Option>
               )
           })} */}
           <Option value="kajiado">Kajiado</Option>
          <Option value="kwale">Kwale</Option>
          <Option value="bomachoge">Bomachaoge</Option> 
        </Select>
      </Form.Item>
      <Form.Item
        name="ward"
        label="Ward"
        className="input-area"
        rules={[
          {
            required: true,
            message: 'Please select ward!',
          },
        ]}
      >
        <Select placeholder="Add Ward" onChange={value =>setWard(value)}>
          {/* {ward.map((value, index)=>{
              return(
                  <Option key={index} value={value}>{value}</Option>
              )
          })} */}
          <Option value="kenyenya">Kenyenya</Option>
          <Option value="tendere">Tendere</Option>
          <Option value="kabianga">Kabianga</Option> 
        </Select>
      </Form.Item>
      <Form.Item
        name="pollingstation"
        label="Polling Station"
        className="input-area"
        rules={[
          {
            required: true,
            message: 'Please select polling station!',
          },
        ]}
      >
        <Select placeholder="Add Polling Station" onChange={value =>setPollingStation(value)}>
          {/* {pollingstation.map((value, index)=>{
              return(
                  <Option key={index} value={value}>{value}</Option>
              )
          })} */}
          <Option value="rongai">Rongai</Option>
          <Option value="laiser">Laiser</Option>
          <Option value="kiserian">Kiserian</Option> 
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="ant-btn-primary-register">
          Submit Details
        </Button>
      </Form.Item>
      </Col>
      </Row>
    </Form>
    <Row>
      <Col md={24}>
        <Form.Item>
        <div className="verify-status">
        <Link to="/verify-status">
        <Button type="secondary" htmlType="submit" className="verify-status">
          Verify Status
        </Button>
        </Link>
        </div>
        </Form.Item>
      </Col>
    </Row>
    </Card>
    </div>
  );

}

export default Register;
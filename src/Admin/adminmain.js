import React from 'react';
import { Carousel, Layout, Space, List, Typography, Input, Alert, Modal, Button, Form } from "antd";
import { EditOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Footer } from "antd/lib/layout/layout";
import { useState } from 'react/cjs/react.production.min';

const { Title } = Typography;

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#C4C4C4",
};

const { Header, Content } = Layout;

var contact = "โทร. 038354580-4 ต่อ งานบริการการศึกษา 666531-7 งานทะเบียนฯ 666423-6 งานกิจการนิสิต 666600 email:oasknl@src.ku.ac.th";

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

//แก้ประกาศ1
class LocalizedModal1 extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <a onClick={this.showModal}><IconText icon={EditOutlined} text= "แก้ไข"/></a>
        <Modal
          title="แก้ไขประกาศ"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="ตกลง"
          cancelText="ยกเลิก"
        >
          <Input placeholder="หัวข้อ" />
          <br/>
          <br/>
          <Input placeholder="วันที่" />
        </Modal>
      </div>
    );
  }
}

//แก้ประกาศ2
class LocalizedModal2 extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <a onClick={this.showModal}><IconText icon={EditOutlined} text= "แก้ไข"/></a>
        <Modal
          title="แก้ไขประกาศ"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="ตกลง"
          cancelText="ยกเลิก"
        >
          <Input placeholder="หัวข้อ" />
          <br/>
          <br/>
          <Input placeholder="วันที่" />
        </Modal>
      </div>
    );
  }
}

//แก้ประกาศ3
class LocalizedModal3 extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <a onClick={this.showModal}><IconText icon={EditOutlined} text= "แก้ไข"/></a>
        <Modal
          title="แก้ไขประกาศ"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="ตกลง"
          cancelText="ยกเลิก"
        >
          <Input placeholder="หัวข้อ" />
          <br/>
          <br/>
          <Input placeholder="วันที่" />
        </Modal>
      </div>
    );
  }
}

//แก้ประกาศ4
class LocalizedModal4 extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <a onClick={this.showModal}><IconText icon={EditOutlined} text= "แก้ไข"/></a>
        <Modal
          title="แก้ไขประกาศ"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="ตกลง"
          cancelText="ยกเลิก"
        >
          <Input placeholder="หัวข้อ" />
          <br/>
          <br/>
          <Input placeholder="วันที่" />
        </Modal>
      </div>
    );
  }
}

//แก้ติดต่อ
class LocalizedModal5 extends React.Component {
  state = { visible: false };
  constructor(props) {
    super(props);
    this.state = { contactData: null }
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  submitModal = (event) => {
    this.setState({
      visible: false,
    });
    console.log(this.state.contactData);
    alert (`Hello ${this.state.contactData}`);
    event.preventDefault();
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  getInputValue = (event)=>{
    this.setState({ contactData: event.target.value })
    console.log(event.target.value);
  };
  
  render() {
    return (
      <div>
        <a onClick={this.showModal}><IconText icon={EditOutlined} text= "แก้ไข"/></a>
        <Modal
          title="แก้ไขข้อมูลติดต่อ"
          visible={this.state.visible}
          onOk={this.submitModal}
          onCancel={this.hideModal}
          okText="ตกลง"
          cancelText="ยกเลิก"
        >
          <Form onSubmitCapture={this.submitModal}>
              <input style={{ width: "400px" }} onChange={this.getInputValue} value={this.state.contactData} placeholder="ข้อมูลติดต่อ" allowClear/>
          </Form>
        </Modal>
      </div>
    );
  }
}

class AddImage extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.showModal} style={{ backgroundColor: "white", width: 170, height: 45, color: "black", fontSize: 18, fontWeight: "bold", borderRadius: 150, borderColor: "#FF7575", borderWidth:"3px" }}>อัพโหลดรูปภาพ</Button>
        <Modal
          title = "เพิ่มรูปภาพ"
          visible = {this.state.visible}
          onOk = {this.hideModal}
          onCancel = {this.hideModal}
          okText = "ตกลง"
          cancelText = "ยกเลิก"
        >
          <Content align="center">
            <Button style={{ backgroundColor: "white", width: 400, height: 60, color: "black", fontSize: 18, fontWeight: "bold", backgroundColor: "#C4C4C4", borderColor: "#C4C4C4", borderWidth:"3px" }}>เพิ่มรูปภาพ</Button>
          </Content>
        </Modal>
      </div>
    );
  }
}

function Adminmain() {
  
  return (
    <div className= "App">
      <Layout style={{ backgroundColor: "white" }}>
        <Header style={{ padding: 60 }}/>
          <Content align="left" style={{ margin: "50px", overflow: "initial" }}>
              <Carousel>
                <div>
                  <h3 style={contentStyle}><AddImage/></h3>
                </div>
              </Carousel>
              <Space>
                <Alert message= "ประกาศ" style={{ fontSize:30, backgroundColor: "#C4C4C4", borderColor: "#C4C4C4", textAlign: "center", color: "red"}}/>
              </Space>
              <br/>
              <br/>
              <List>
              <List.Item.Meta
                      title={<a>ประกาศที่ 1</a>}
                      description={<Title level={5} type="secondary">[วันที่]</Title>}
              />
              <LocalizedModal1/>
              <br/>
              <List.Item.Meta
                      title={<a>ประกาศที่ 2</a>}
                      description={<Title level={5} type="secondary">[วันที่]</Title>}
              />
              <LocalizedModal2/>
              <br/>
              <List.Item.Meta
                      title={<a>ประกาศที่ 3</a>}
                      description={<Title level={5} type="secondary">[วันที่]</Title>}
              />
              <LocalizedModal3/>
              <br/>
              <List.Item.Meta
                      title={<a>ประกาศที่ 4</a>}
                      description={<Title level={5} type="secondary">[วันที่]</Title>}
              />
              <LocalizedModal4/>
              </List>
          </Content>
          <Footer align="center">
            <div>
              <Title align="center" type="secondary" level={5}>มีปัญหาติดต่อ</Title>
              <Space>
                <Title type="secondary" level={5}>{contact}</Title>
                <LocalizedModal5/>
              </Space>
            </div>
          </Footer>
      </Layout>
    </div>
  );
}

export default Adminmain;
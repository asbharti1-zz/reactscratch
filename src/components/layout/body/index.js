import { Layout,Card} from "antd";

const {Content} = Layout;

import React from "react";

import LoginUi from "../../auth/login"
import Login from "../../auth"
import { Col, Row } from 'antd';
function AppContent() {
  return (
    
        <Content style={{overflow: 'auto',
        height: '80vh',
        overflow: 'auto',
        width: '88vw'}}>
          <div
          className="site-layout-background"
          style={{            
            textAlign: 'center',
          }}
        >
          <Row>
          <Col xs={{ span: 2, offset: 1 }} lg={{ span: 2, offset: 2 }}>
            &nbsp;
          </Col>
          <Col xs={{ span: 20, offset: 1 }} lg={{ span: 12, offset: 2 }}>
          &nbsp;
          </Col>
          <Col xs={{ span: 2, offset: 1 }} lg={{ span: 2, offset: 2 }}>
          &nbsp;
          </Col>
          </Row>
          <Row>
          <Col xs={{ span: 2, offset: 1 }} lg={{ span: 2, offset: 2 }}>
          &nbsp;
          </Col>
            <Col xs={{ span: 20, offset: 1 }} lg={{ span: 8, offset: 2 }}>
            <Card title="Login" bordered={true}>
                <Login/>
            </Card> 
            </Col>
            <Col xs={{ span: 2, offset: 1 }} lg={{ span: 2, offset: 2 }}>
            &nbsp;
          </Col>
          </Row>
                  
          </div>
        </Content>
  );
}

export default AppContent;
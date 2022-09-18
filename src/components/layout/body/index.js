/***
 *@depricated
 */

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
          <Col lg={{ span: 12, offset: 0 }}>
            <Card>
            <Login/>
            </Card>
          </Col>
         
          </Row>
                  
          </div>
        </Content>
  );
}

export default AppContent;
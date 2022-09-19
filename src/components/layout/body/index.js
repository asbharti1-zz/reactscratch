/***
 *@depricated
 */

import { Layout,Card} from "antd";

const {Content} = Layout;

import React from "react";
import Login from "../../auth"
import { Col, Row } from 'antd';
import Aboutus from "../../../pages/aboutus"
import Contactus from "../../../pages/contactus"
import DevelopmentPage from "../../../pages/development"
import DataAnalysis from "../../../pages/analysis";
import Consulting from "../../../pages/consulting";


import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Routes
} from "react-router-dom";
import Employee from "../../../pages/sampletable";

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
              
                <Routes>
                 
                  <Route path="/aboutus" element={<Aboutus />}></Route>
                  <Route path="/contactus" element={<Contactus />}></Route>
                  <Route exact path="/"  element={<Login />}></Route>
                  <Route exact path="/development"  element={<DevelopmentPage />}></Route>
                  <Route exact path="/analysis"  element={<DataAnalysis />}></Route>
                  <Route exact path="/consult"  element={<Consulting />}></Route>
                  <Route exact path="/employee"  element={<Employee />}></Route>
                </Routes>
             
            </Card>
          </Col>
         
          </Row>
                  
          </div>
        </Content>
  );
}

export default AppContent;
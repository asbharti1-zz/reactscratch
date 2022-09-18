import { Layout } from "antd";
import React from "react";
import AppContent from "../layout/body";
import AppFooter from "../layout/footer";
import AppHeader from "../layout/header";
import LeftSlider from "../layout/left-slider";



function AppLayout() {
  return (
    <Layout>
      <LeftSlider/>
      <Layout >
        <AppHeader />
          <Layout style={{ padding: '24px' }}>
            <AppContent/>
          </Layout>
        <AppFooter/>
      </Layout>
    </Layout>
  )
}


export default AppLayout;
import { Layout } from "antd";
import React from "react";
import AppContent from "../body";
import AppFooter from "../footer";
import AppHeader from "../header";
import LeftSlider from "../left-slider";



function AppLayout() {
  return (
    <Layout style={{
        minHeight: '100vh',
      }}>
            <LeftSlider/>
        <Layout>
            <AppHeader />
            <AppContent/>
            <AppFooter/>
        </Layout>
    </Layout>
  )
}


export default AppLayout;
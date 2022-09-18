import { Layout } from "antd";

const { Footer } = Layout;

import React from "react";

function AppFooter() {
  return (
    <Layout>
      <Footer className="footer-sns" style={{ textAlign: "center" }}>
        Ant Design ©2022 Create by Sanjay
      </Footer>
    </Layout>
  );
}

export default AppFooter;

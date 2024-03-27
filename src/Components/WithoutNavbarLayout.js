import React from "react";
import { Layout } from "antd";

const WithoutNavbarLayout = ({ children }) => {
  const { Content } = Layout;

  return (
    <Layout className="mainLayout">
      <Content style={{ padding: "0 48px" }}>{children}</Content>
    </Layout>
  );
};

export default WithoutNavbarLayout;

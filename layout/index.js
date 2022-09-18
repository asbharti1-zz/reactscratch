import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    AppstoreOutlined, MailOutlined, SettingOutlined 
  } from '@ant-design/icons';
  import { Layout, Menu ,Button ,PageHeader } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
  import React, { useState } from 'react';
  const { Header, Sider, Content } = Layout;
  
  const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `HeaderL ${key}`,
  }));

  const items = [
    {
        label: 'Navigation One',
        key: 'mail',
        icon: <MailOutlined />,
    },
    {
      label: 'Navigation One',
      key: 'mail',
      icon: <MailOutlined />,
    },
    {
      label: 'Navigation Two',
      key: 'app',
      icon: <AppstoreOutlined />,
      disabled: true,
    },
    {
      label: 'Navigation Three - Submenu',
      key: 'SubMenu',
      icon: <SettingOutlined />,
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            {
              label: 'Option 1',
              key: 'setting:1',
            },
            {
              label: 'Option 2',
              key: 'setting:2',
            },
          ],
        },
        {
          type: 'group',
          label: 'Item 2',
          children: [
            {
              label: 'Option 3',
              key: 'setting:3',
            },
            {
              label: 'Option 4',
              key: 'setting:4',
            },
          ],
        },
      ],
    },
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
      key: 'alipay',
    },
  ];
  const AppLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

    return (
      <Layout>
        <Sider trigger={null} 
            collapsible 
            collapsed={collapsed}
            breakpoint="lg">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'nav 1',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
            <PageHeader className="site-layout-background">
            <div className='row'>
                <div className='col-1'>
            
            </div>
            <div className='col-11'>
             <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" >
                <MenuItem>
                {
                collapsed ?
                (<MenuUnfoldOutlined className="trigger"
                onClick= { () => setCollapsed(!collapsed)} items={items1}>
                    </MenuUnfoldOutlined>) :
                (<MenuFoldOutlined className="trigger" 
                onClick= { () => setCollapsed(!collapsed)}>
                    </MenuFoldOutlined>)                 
            }
                </MenuItem>
                <MenuItem label= "Navigation One"
                    key="mail"
                    icon={<MailOutlined />} children={"Navigation One"}>
                         
                </MenuItem>
            </Menu>
             </div>      
             </div>
          </PageHeader>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 360,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  };
  
  export default AppLayout;
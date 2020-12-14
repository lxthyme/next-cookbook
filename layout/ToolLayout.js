import { Layout, Menu, Breadcrumb } from 'antd'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

// export const config = { amp: true };

const menuItems = ['Item 1', 'Item 2']
export default class ToolLayout extends React.Component {
  state = {
    collapsed: false,
  }

  onCollapse = (collapsed) => {
    console.log(collapsed)
    this.setState({ collapsed })
  }

  render() {
    return (
      <>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            {/* {this.props.siderMenu} */}
            {/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              {this.props.siderMenuItem}
            </Menu> */}
            <Menu theme="dark" defaultSelectedKeys={['Item 1']} mode="horizontal" mode="inline">
              {menuItems.map((t) => (
                <Menu.Item key={t}>
                  <PieChartOutlined />
                  <span>{t}</span>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              {/* <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                Bill is a cat.
              </div> */}
              {this.props.mainContent}
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Vaffle ©20200 Created by lxthyme
            </Footer>
          </Layout>
        </Layout>
        <style jsx>{`
          .logo {
            height: 32px;
            background: rgba(255, 255, 255, 0.2);
            margin: 16px;
          }
          .site-layout-background {
            background: #fff;
          }
        `}</style>
      </>
    )
  }
}

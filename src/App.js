// import 'antd/dist/antd.css';
import './App.css';
import { Layout, Menu, theme } from "antd";
import './citypay_logo.png'

//These are kept for the navbar items
const navbarItem1 = ["Agent Signup", "Android Download", "IOS Download"];
const navbarItemNames2 = ['Home','About', 'Services', 'Contact', 'Blog', 'Facebook', 'Instagram'];

//listing and displaying the items of array in individual nav bar
const { Header, Content, Footer } = Layout;
const items1 = navbarItem1.map((name, index) => ({
  key: String(index + 1),
  label: name,
}));
const items2 = navbarItemNames2.map((name, index) => ({
  key: String(index + 1),
  label: name,
}));

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="Logo Image">
          <img src="./citypay_logo.png" alt="CityPayLogo"></img>
        </div>
        <div className="navbar_top" />
        <Menu
          theme="dark"
          mode="horizontal"
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="navbar_bot" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items2}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {/* Top section */}
          <div>

          </div>
          {/* Section 1 */}
          <div>

          </div>
          {/* News and Offers Section */}
          <div>

          </div>
          {/* Section 2 */}
          <div>

          </div>
          {/* Section 3 */}
          <div>

          </div>
          {/* Section 4 */}
          <div>

          </div>
          {/* Section 5 */}
          <div>

          </div>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        {/* <image> */}
      </Footer>
    </Layout>
  );
};
export default App;


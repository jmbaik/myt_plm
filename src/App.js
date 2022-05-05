import 'antd/dist/antd.min.css';
import {Layout, Menu} from 'antd';
import {Link, Route, Switch} from "react-router-dom";
import Home from "./Home";
import GridSample from "./components/grid";
import AsyncSample from "./components/async";
import NewsPage from "./components/news/NewsPage";
import NewsList from "./components/news/NewsList";
import Hooks from './pages/hooks/index';
import CtxSample from "./pages/context/CtxSample";
import Reducer03 from "./pages/redux/Reducer03";
import Redux01 from "./pages/redux/Redux01";
import HooksBundles from "./pages/redux/HooksBundles";
import AgGridSample from "./components/aggrid";

const { Header, Content, Footer } = Layout;
const {SubMenu} = Menu;

function App() {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" title="홈"><Link to="/home">홈</Link></Menu.Item>
                    <Menu.Item key="2" title="그리드"><Link to="/grid">그리드</Link></Menu.Item>
                    <Menu.Item key="3" title="비동기"><Link to="/async">비동기</Link></Menu.Item>
                    <Menu.Item key="4" title="뉴스"><Link to="/news">뉴스</Link></Menu.Item>
                    <Menu.Item key="5" title="뉴스리스트"><Link to="/news_list">뉴스리스트</Link></Menu.Item>
                    <SubMenu key="701" title="리덕스">
                        <Menu.Item key="11">
                            <Link to="/reducer">리듀서</Link>
                        </Menu.Item>
                        <Menu.Item key="12">
                            <Link to="/hooks/bundle">관련훅들</Link>
                        </Menu.Item>                        
                        <Menu.Item key="13">
                            <Link to="/redux">리덕스</Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="7" title="Hook"><Link to="/hook">Hook</Link></Menu.Item>
                    <Menu.Item key="8" title="컨텍스트 API"><Link to="/ctxapi">PLM</Link></Menu.Item>
                    <Menu.Item key="9" title="AG-GRID"><Link to="/aggrid">AG-GRID</Link></Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Switch>
                    <Route path="/home" exact={true}><Home /></Route>
                    <Route path="/grid"><GridSample /></Route>
                    <Route path="/async"><AsyncSample /></Route>
                    <Route path="/news"><NewsPage /></Route>
                    <Route path="/news_list"><NewsList /></Route>
                    <Route path="/reducer"><Reducer03 /></Route>
                    <Route path="/redux"><Redux01 /></Route>
                    <Route path="/hook"><Hooks /></Route>
                    <Route path="/ctxapi"><CtxSample /></Route>
                    <Route path="/hooks/bundle"><HooksBundles /></Route>
                    <Route path="/aggrid"><AgGridSample /></Route>
                </Switch>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}

export default App;

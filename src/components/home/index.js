import React from 'react';
import {Breadcrumb} from "antd";

const Home = () => {
    return (
        <>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
                <p>여기는 홈입니다.</p>
            </div>
        </>
    );
};

export default Home;

import React from 'react';
import {Tabs} from "antd";
import 'antd/dist/antd.min.css';
import TableComplex from "./TableComplex";

const {TabPane} = Tabs;

const CtxSample = () => {

    return (
        <Tabs type="card">
            <TabPane tab="tab 1" key="1" style={{
                width: '100%',
                height: '100%',
                margin: '0 0',
                padding: '0 0',
            }}>
                <TableComplex/>
            </TabPane>
            <TabPane tab="tab 2" key="2">
                aaaaaaaaaaaa
            </TabPane>
            <TabPane tab="tab 3" key="3">
                ttttttttttttt
            </TabPane>
        </Tabs>
    );
};

export default CtxSample;

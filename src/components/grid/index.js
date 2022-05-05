import React, {useState} from 'react';
import {Breadcrumb, Button, Col, Form, Input, Row, Select, Space, Typography} from "antd";

const {Title} = Typography;
const {Option} = Select;

const formItemLayout = {
    labelCol: {xs: {span: 24,}, sm: {span: 8,}}, wrapperCol: {xs: {span: 24,}, sm: {span: 16,}},
}

const GridSample = () => {
    const [expand, setExpand] = useState(false);
    const {form} = Form.useForm();
    return (<>
        <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>GridSample</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">

            <Form form={form} name="advanced_search" className="ant-advanced-search-form">
                <Row>
                    <Col span={12}>
                        <Title level={3}>프로젝트 템플릿</Title>
                    </Col>
                    <Col span={12} align="end">
                        <Button type="primary" htmlType="submit">
                            저장
                        </Button>
                    </Col>
                </Row>
                <Row gutter={[24, 0]}>
                    <Col span={8} key={1}>
                        <Form.Item name="a" label="가나다라마바사">
                            <Select defaultValue="lucy">
                                <Option value="jack">Jack</Option>
                                <Option value="park">Park</Option>
                                <Option value="yang">Yang</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8} key={2}>
                        <Form.Item name="b" label="a"><Input placeholder="input aaaaaaa"/></Form.Item>
                    </Col>
                    <Col span={8} key={3}>
                        <Form.Item name="c" label="a"><Input placeholder="input aaaaaaa"/></Form.Item>
                    </Col>
                    <Col span={8} key={4}>
                        <Form.Item name="a" label="a"><Input placeholder="input aaaaaaa"/></Form.Item>
                    </Col>
                    <Col span={8} key={5}>
                        <Form.Item name="a" label="a"><Input placeholder="input aaaaaaa"/></Form.Item>
                    </Col>
                </Row>
            </Form>

        </div>
    </>);
};

export default GridSample;

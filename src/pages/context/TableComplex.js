import React, {useEffect, useState} from 'react';
import {Button, Col, Row, Table, Tabs} from "antd";
import 'antd/dist/antd.min.css';
import axios from "axios";
import AgGridAddPop from "./AgGridAddPop";


const columns = [
    {
        title: '종목코드',
        dataIndex: 'ITEM_CD',
        key: 'ITEM_CD'
    },
    {
        title: '종목명',
        dataIndex: 'ITEM_NM',
        key: 'ITEM_NM'
    }
];

const columns2 = [
    {
        title: 'Phase 명',
        dataIndex: 'phase_nm',
        key: 'phase_nm'
    },
    {
        title: 'Description',
        dataIndex: 'phase_desc',
        key: 'phase_desc'
    }
];

const data = [];
const data2 = [];


const TableComplex = () => {

    const [isPop, setIsPop] = useState(false);
    const [datas, setDatas] = useState([]);
    useEffect(async () => {
        await axios.get('http://localhost:8080/stockItems').then(response => setDatas(response.data));
        return () => {
            setDatas([]);
        };
    }, []);
    const onPop = () => {
        setIsPop(true);
    };
    const onClosePhase = () => {
        setIsPop(false);
    }
    return (
        <>
            <AgGridAddPop isPhasePop={isPop} onClosePhase={onClosePhase} />
            <Row gutter={[24, 24]}>
                <Col span={12}>
                    <Row>
                        <Col span={20}>
                            <title title="Phase " />
                        </Col>
                        <Col span={2}>
                            <Button type="primary" onClick={onPop}>추가</Button>
                        </Col>
                        <Col span={2}>
                            <Button type="primary">삭제</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Table
                                rowKey={item => {return item.ITEM_CD}}
                                columns={columns}
                                dataSource={datas}
                            >

                            </Table>
                        </Col>
                    </Row>
                </Col>
                <Col span={12}>
                    <Row>
                        <Col span={24}>
                            <Table columns={columns2} dataSource={data2}>

                            </Table>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>

    );
};

export default TableComplex;

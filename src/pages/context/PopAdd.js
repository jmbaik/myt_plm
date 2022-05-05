import React, {useEffect, useState} from 'react';
import {Button, Col, Input, Modal, Row, Table} from "antd";

const cols = [
    {title: 'Phase ', dataIndex: 'PHASE_CD', key: 'PHASE_CD'},
    {title: 'Phase name', dataIndex: 'PHASE_NM', key: 'PHASE_NM'},
];
const condition_data =[
    {PHASE_CD: 'P01', PHASE_NM:'PHA01'},
    {PHASE_CD: 'P02', PHASE_NM:'PHA02'},
    {PHASE_CD: 'P03', PHASE_NM:'PHA03'},
    {PHASE_CD: 'P04', PHASE_NM:'PHA04'},
    {PHASE_CD: 'P05', PHASE_NM:'PHA05'},
    {PHASE_CD: 'P06', PHASE_NM:'PHA06'},
    {PHASE_CD: 'P07', PHASE_NM:'PHA07'},
    {PHASE_CD: 'P08', PHASE_NM:'PHA08'},
];

const phase_selected_data = [];

const PopAdd = ({isPhasePop, onAddPhase, onClosePhase}) => {
    const [conditionData, setConditionData] = useState([]);
    const [selectedPhaseData, setSelectedPhaseData] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);

    const makeData = () => {
        let rows = selectedRows;
        rows.forEach(v => {
            let _isExists = false;
            phase_selected_data.forEach(t =>{
                if(t.PHASE_CD === v.PHASE_CD)
                    _isExists = true;
            });
            if(!_isExists)
                phase_selected_data.push(v);
        });
        // setSelectedPhaseData(temp);
    };

    const rowSelection ={
        type: 'checkbox',
        onChange: (keys, rows) =>{
            console.log(`selectedRowKeys: ${keys}`, 'selectedRows: ', rows);
            setSelectedRows(rows);
            // setSelectedPhaseData([...selectedPhaseData, rows]);
            // makeData(rows);
        }
    }

    useEffect(() => {
        setConditionData(condition_data);
    }, []);

/*    useEffect(() => {
        makeData();
    }, [setSelectedPhaseData]);*/


    return (
        <Modal key="modal_phase_key"
               visible={isPhasePop}
               size={"large"}
               onCancel={onClosePhase}
               width={1000}
               footer={
                   [
                       <Button key="btn_phase_add" type="primary" onClick={onAddPhase}>
                           추가
                       </Button>,
                       <Button key="btn_phase_close" type="primary" onClick={onClosePhase}>
                           닫기
                       </Button>,
                   ]
               }
        >
            <Row gutter={[12, 12]}>
                <Col span={10}>
                    <Row>
                        <Col span={6}><Input placeholder="전략코드"/></Col>
                        <Col span={12}><Input placeholder="전략명"/></Col>
                        <Col span={6}><Button>추가</Button></Col>
                    </Row>
                    <Table
                        pagination={false}
                        rowKey={record => record.PHASE_CD}
                        columns={cols}
                        dataSource={conditionData}
                        rowSelection={rowSelection}
                    />
                </Col>
                <Col span={2}>
                    <Button onClick={makeData}>&gt;</Button>
                    <Button>&lt;</Button>
                </Col>
                <Col span={10}>
                    <Table
                        rowKey={record => record.PHASE_CD + '01'}
                        pagination={false}
                        columns={cols}
                        dataSource={phase_selected_data}
                    />
                </Col>
                <Col span={2}>
                    <Button>^</Button>
                    <Button>v</Button>
                </Col>
            </Row>


        </Modal>
    );
};

export default PopAdd;

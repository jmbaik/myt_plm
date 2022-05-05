import React, {useState} from 'react';
import {Button, Col, Input, Modal, Row, Table} from "antd";
import {AgGridReact} from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


const AgGridAddPop = ({isPhasePop, onAddPhase, onClosePhase}) => {
    const [conditionData, setConditionData] = useState([]);
    const [selectedPhaseData, setSelectedPhaseData] = useState([]);
    const [columnDefs, setColumnDefs] = useState([
        {headerName: 'Make', field: 'make'},
        {headerName: 'Model', field: 'model'},
        {headerName: 'Price', field: 'price'},
    ]);
    const [rowData, setRowData] = useState([
        {make: 'Toyota', model: 'Celica', price: 3500},
        {make: 'Ford', model: 'Modeo', price: 32000},
        {make: 'Porche', model: 'Boxter', price: 35000},
    ]);

    const makeData = () => {

    };
    return (
        <Modal key="modal_phase_key"
               visible={isPhasePop}
               size={"large"}
               onCancel={onClosePhase}
               width={1000}
               height={1000}
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
                    <div
                        className="ag-theme-balham"
                        style={{
                            width: '100%',
                            height: '100%'
                        }}>
                        <AgGridReact
                            columnDefs={columnDefs}
                            rowData={rowData}
                        />
                    </div>
                </Col>
                <Col span={2}>
                    <Button onClick={makeData}>&gt;</Button>
                    <Button>&lt;</Button>
                </Col>
                <Col span={10}>

                </Col>
                <Col span={2}>
                    <Button>^</Button>
                    <Button>v</Button>
                </Col>
            </Row>
        </Modal>
    );
};

export default AgGridAddPop;

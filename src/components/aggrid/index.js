import React from 'react';
import {AgGridReact} from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import {Button, Col, Row} from "antd";

/*



 */

const AgGridSample = () => {
    let gridApi;
    const onGridReady = params => {
        gridApi = params.api
    }
    const onExportClick = () => {
        gridApi.exportDataAsCsv();
    };
    const actionButton = (params => {
        console.log(params);
        alert(`${params.data.name} ${params.value}`)
    });
    const data = [
        {name: 'Dan02', age: 27},
        {name: 'Dan04', age: 28},
        {name: 'Dan06', age: 29},
        {name: 'Dan08', age: 30},
        {name: 'Dan10', age: 11},
        {name: 'Dan12', age: 13},
        {name: 'Dan14', age: 15},
        {name: 'Dan16', age: 17},
    ];
    const columns = [
        {headerName: 'Name', field: 'name', checkboxSelection: true, headerCheckboxSelection: true},
        {headerName: 'Age', field: 'age'},
        {
            headerName: 'Action', field: 'age', cellRendererFramework: (
                params =>
                    <div>
                        <button onClick={() => actionButton(params)}>click me</button>
                    </div>
            )
        },
    ];
    const isRowselectable = (node) => {
        //return node.data ? node.data.age > 18 : false;
        return true;
    }
    const onSelectionChanged = (e) =>{
        console.log(e.api.getSelectedRows());
    }
    return (
        <Row gutter={[24, 24]}>
            <Col span={10}>
                <div className="ag-theme-balham"
                     style={{
                         height: '600px',
                         width: '100%'
                     }}>
                    <AgGridReact rowData={data} columnDefs={columns}
                                 onGridReady={onGridReady}
                                 isRowSelectable={isRowselectable}
                                 rowSelection='multiple'
                                 onSelectionChanged={onSelectionChanged}
                    >
                    </AgGridReact>
                </div>
            </Col>
            <Col span={2}>
                <Button>&gt;</Button>
                <Button>&lt;</Button>
                <Button onClick={() => onExportClick()}>ex</Button>
            </Col>
            <Col span={10} />
            <Col span={2}>
                <Button>^</Button>
                <Button>v</Button>
            </Col>
        </Row>

    );
};

export default AgGridSample;

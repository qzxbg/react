import React from "react";
import { Card, Button, Table } from "antd";
import Column from "antd/lib/table/Column";
function CategoryView(){
    return <Card title={"品类管理"}
    extra={<Button>添加品类</Button>}
>
    <Table bordered={true}>
        <Column title={"品类ID"}></Column>
        <Column title={"品类名称"}></Column>
        <Column title={"操作"}></Column>
    </Table>

</Card>
}

export default CategoryView;
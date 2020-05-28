import React from "react";
import { Card, Input, Cascader, Button, Table } from "antd";
import goodsSty from "../../static/css/goods/goods.module.css"
import Column from "antd/lib/table/Column";
function OrderView(){
    return <Card title={"订单管理"}>
    <div className={goodsSty.container}>
        <Cascader></Cascader>
        <Input></Input>
        <Button>按钮</Button>
    </div>
    <Table bordered={true}>
        <Column title={"订单号"}></Column>
        <Column title={"收件人"}></Column>
        <Column title={"订单状态"}></Column>
        <Column title={"订单总价"}></Column>
        <Column title={"创建时间"}></Column>
        <Column title={"操作"}></Column>
    </Table>

</Card>
}

export default OrderView;
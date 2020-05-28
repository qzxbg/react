import React from "react";
import { Card, Input, Cascader, Button, Table } from "antd";
import goodsSty from "../../static/css/goods/goods.module.css"
import Column from "antd/lib/table/Column";

function GoodsView() {
    return <Card title={"商品管理"}
        extra={<Button>添加商品</Button>}
    >
        <div className={goodsSty.container}>
            <Cascader></Cascader>
            <Input></Input>
            <Button>按钮</Button>
        </div>
        <Table bordered={true}>
            <Column title={"id"}></Column>
            <Column title={"信息"}></Column>
            <Column title={"价格"}></Column>
            <Column title={"状态"}></Column>
            <Column title={"操作"}></Column>
        </Table>

    </Card>
}

export default GoodsView;
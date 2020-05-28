import React from "react";
import { Card, Table } from "antd";
import Column from "antd/lib/table/Column";

function UserView() {
    return <Card title={"用户管理"}>
        <Table bordered={true}>
            <Column title={"ID"}></Column>
            <Column title={"用户名"}></Column>
            <Column title={"邮箱"}></Column>
            <Column title={"电话"}></Column>
            <Column title={"注册时间"}></Column>
        </Table>

    </Card>
}

export default UserView;
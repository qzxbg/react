import React from "react";
import { Card, Statistic } from "antd";

function AdminView(){
    return <Card title={"首页"}>
        <Statistic value={1234} title={"用户总数"}></Statistic>
        <Statistic value={1028} title={"商品总数"}></Statistic>
        <Statistic value={642} title={"订单总数"}></Statistic>
    </Card>
}

export default AdminView;
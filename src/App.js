import React from "react";
import { Layout } from "antd";
import HeaderCom from "./component/HeaderCom";
import SliderCom from "./component/SiderCom";
import { Switch, Route } from "react-router-dom";
import { routes } from "./router";
import "./static/css/base.css";
import LoginView from "./view/login";

function App() {
    return <Switch>
        <Route path="/login" exact component={LoginView}></Route>
        <Route path="" render={(props) => {
            return <Layout className={"layout"}>
                <HeaderCom />
                <Layout className={"layoutItem"}>
                    <SliderCom />
                    <Layout.Content>
                        <Switch>
                            {
                                routes.map((routeItem, index) => {
                                    return <Route key={index}
                                        path={routeItem.path}
                                        exact={routeItem.exact}
                                        render={(props) => {
                                            return routeItem.render(props)
                                        }}
                                    />
                                })
                            }
                        </Switch>
                    </Layout.Content>
                </Layout>
            </Layout>
        }}></Route>
    </Switch>

}

export default App;
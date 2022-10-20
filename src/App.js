/*
 * @Author: jiaminghui
 * @Date: 2022-10-18 22:17:08
 * @LastEditTime: 2022-10-20 11:56:33
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\App.js
 * @Description:
 */
import React, { memo } from "react";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

import routes from "@/router";
import store from '@/store'

import MHAppHeader from "@/components/app-header";
import MHAppFooter from "@/components/app-footer";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <MHAppHeader />
        {renderRoutes(routes)}

        <hr style={{ color: "#999999", margin: "0" }} />
        <MHAppFooter />
      </HashRouter>
    </Provider>
  );
});

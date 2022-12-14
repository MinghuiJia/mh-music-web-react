/*
 * @Author: jiaminghui
 * @Date: 2022-10-19 11:06:57
 * @LastEditTime: 2022-11-02 15:32:58
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\router\index.js
 * @Description:
 */
import React from "react";
import { Redirect } from "react-router-dom";

const MHDiscover = React.lazy(() => import("@/pages/discover"));
const MHFriend = React.lazy(() => import("@/pages/friend"));
const MHMine = React.lazy(() => import("@/pages/mine"));
const MHRecommend = React.lazy(() => import("@/pages/discover/c-pages/recommend"));
const MHRanking = React.lazy(() => import("@/pages/discover/c-pages/ranking"));
const MHSongs = React.lazy(() => import("@/pages/discover/c-pages/songs"));
const MHDjradio = React.lazy(() => import("@/pages/discover/c-pages/djradio"));
const MHArtist = React.lazy(() => import("@/pages/discover/c-pages/artist"));
const MHAlbum = React.lazy(() => import("@/pages/discover/c-pages/album"));
const MHPlayer = React.lazy(() => import("@/pages/player"));
// import MHDiscover from "@/pages/discover";
// import MHFriend from "@/pages/friend";
// import MHMine from "@/pages/mine";
// import MHRecommend from "@/pages/discover/c-pages/recommend";
// import MHRanking from "@/pages/discover/c-pages/ranking";
// import MHSongs from "@/pages/discover/c-pages/songs";
// import MHDjradio from "@/pages/discover/c-pages/djradio";
// import MHArtist from "@/pages/discover/c-pages/artist";
// import MHAlbum from "@/pages/discover/c-pages/album";
// import MHPlayer from "@/pages/player";

const routes = [
  // 路由配置这里，还可以传递render属性，属性值就是一个箭头函数，可以完成重定向
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: MHDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: "/discover/recommend",
        component: MHRecommend,
      },
      {
        path: "/discover/ranking",
        component: MHRanking,
      },
      {
        path: "/discover/songs",
        component: MHSongs,
      },
      {
        path: "/discover/djradio",
        component: MHDjradio,
      },
      {
        path: "/discover/artist",
        component: MHArtist,
      },
      {
        path: "/discover/album",
        component: MHAlbum,
      },
      {
        path: "/discover/player",
        component: MHPlayer,
      },
    ],
  },
  {
    path: "/friend",
    component: MHFriend,
  },
  {
    path: "/mine",
    component: MHMine,
  },
];

export default routes;

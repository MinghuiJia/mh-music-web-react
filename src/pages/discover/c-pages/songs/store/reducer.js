/*
 * @Author: jiaminghui
 * @Date: 2022-11-12 16:23:12
 * @LastEditTime: 2022-11-12 21:25:54
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\songs\store\reducer.js
 * @Description:
 */
import { Map } from "immutable";
import * as actionTypes from "./constants";
const initState = Map({
  playListCategory: {},
  oneSongsList: [],
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PLAY_LIST_CATEGORY:
      return state.set("playListCategory", action.playListCategory);
    case actionTypes.CHANGE_ONE_SONGS_LIST:
      return state.set("oneSongsList", action.oneSongsList);
    default:
      return state;
  }
};

export default reducer;

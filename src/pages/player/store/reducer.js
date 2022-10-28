/*
 * @Author: jiaminghui
 * @Date: 2022-10-27 21:01:59
 * @LastEditTime: 2022-10-28 22:33:50
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\player\store\reducer.js
 * @Description:
 */
/*
 * @Author: jiaminghui
 * @Date: 2022-10-27 21:01:59
 * @LastEditTime: 2022-10-27 21:04:56
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\player\store\reducer.js
 * @Description:
 */
import { Map } from "immutable";

import * as actionTypes from "./constants";

const initState = Map({
  currentSong: {},
  simiPlayList: [],
  simiSong: [],
  songLyric: {},
  lyricList: [],
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
    case actionTypes.CHANGE_SIMI_PLAY_LIST:
      return state.set("simiPlayList", action.simiPlayList);
    case actionTypes.CHANGE_SIMI_SONG:
      return state.set("simiSong", action.simiSong);
    case actionTypes.CHANGE_SONG_LYRIC:
      return state.set("songLyric", action.songLyric);
    case actionTypes.CHANGE_LYRIC_LIST:
      return state.set("lyricList", action.lyricList);
    default:
      return state;
  }
};

export default reducer;

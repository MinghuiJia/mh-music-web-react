/*
 * @Author: jiaminghui
 * @Date: 2022-10-20 11:58:20
 * @LastEditTime: 2022-10-26 17:16:19
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\recommend\store\reducer.js
 * @Description:
 */
// 这种情况是对深层的对象也进行转换，所以主要用在自己定义的数据里面，我们才有可能进行深层次的修改
// import {fromJS} from 'immutable'

// 更多的情况是我们从服务器请求数据，然后进行展示，不需要深层修改
import { Map } from "immutable";

import * as actionTypes from "./constants";

// 每个页面都需要一个store对里面的数据进行管理，所以这里的每个state对象里面会有很多数据，我们需要对这个对象进行Immutable转换，提升性能
const initState = Map({
  topBanner: [],
  hotRecommend: [],
  newAlbum: [],
  newSongsRanking: [],
  fastRanking: [],
  oriSongsRanking: [],
  artistList: [],
  hotArtist: [],
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      // return { ...state, topBanner: [...action.banner] };
      return state.set("topBanner", action.banner);
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommend", action.hotRecommend);
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set("newAlbum", action.newAlbum);
    case actionTypes.CHANGE_NEW_SONGS_RANKING:
      return state.set("newSongsRanking", action.newSongsRanking);
    case actionTypes.CHANGE_FAST_RANKING:
      return state.set("fastRanking", action.fastRanking);
    case actionTypes.CHANGE_ORI_SONGS_RANKING:
      return state.set("oriSongsRanking", action.oriSongsRanking);
    case actionTypes.CHANGE_ARTIST_LIST:
      return state.set("artistList", action.artistList);
    case actionTypes.CHANGE_HOT_ARTIST:
      return state.set("hotArtist", action.hotArtist);
    default:
      return state;
  }
};

export default reducer;

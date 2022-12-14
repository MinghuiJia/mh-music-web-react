/*
 * @Author: jiaminghui
 * @Date: 2022-11-12 14:23:31
 * @LastEditTime: 2022-11-20 16:54:02
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\discover\c-pages\songs\c-cpns\songs-header\index.js
 * @Description:
 */
import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import {
  getOnePlayListAction,
  changeCurrentPageNumAction,
} from "../../store/actionCreators";

import { MHSongsHeaderWrapper } from "./style";
import MHSelectTitle from "./select-title";
import MHSelectContent from "./select-content";
import { Button, Popover } from "antd";

export default memo(function MHSongsHeader() {
  // redux hooks
  const { currentSongsCategory } = useSelector((state) => {
    return {
      currentSongsCategory: state.getIn(["songs", "currentSongsCategory"]),
    };
  }, shallowEqual);
  const dispatch = useDispatch();

  const getOnePlayList = (order, cat, limit, offset) => {
    dispatch(getOnePlayListAction(order, cat, limit, offset));
    dispatch(changeCurrentPageNumAction(1));
  };
  return (
    <MHSongsHeaderWrapper>
      <div className="header-left" id="song-header">
        <span>{currentSongsCategory}</span>
        <div className="select-category">
          <Popover
            id="myPopover"
            // 因为 popover 元素添加到了 body 下面，增加下面这几行加粗的代码，将 popover 添加到它原本的父级下面
            getPopupContainer={(triggerNode) => {
              return triggerNode.parentNode;
            }}
            placement="bottomLeft"
            title={<MHSelectTitle />}
            content={<MHSelectContent />}
            trigger="click"
          >
            <Button>
              <span>选择分类</span>
              <i className="u-icn sprite_icon2"></i>
            </Button>
          </Popover>
        </div>
      </div>
      <div className="header-right">
        <div className="hot-btn sprite_button2">
          <button
            onClick={(e) => getOnePlayList("hot", currentSongsCategory, 35, 0)}
          >
            热门
          </button>
        </div>
      </div>
    </MHSongsHeaderWrapper>
  );
});

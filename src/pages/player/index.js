/*
 * @Author: jiaminghui
 * @Date: 2022-10-28 14:42:49
 * @LastEditTime: 2022-10-28 20:26:28
 * @LastEditors: jiaminghui
 * @FilePath: \mh-music-web-react\src\pages\player\index.js
 * @Description:
 */
import React, { memo } from "react";

import { MHPlayerWrapper, MHPlayerLeft, MHPlayerRight } from "./style";
import MHPlayerInfo from "./player-info";
import MHSimiPlayList from "./simi-play-list";
import MHSimiSong from "./simi-song";

export default memo(function MHPlayer(props) {
  const song_id = props.location.search.slice(1).split("=")[1];
  return (
    <MHPlayerWrapper className="wrap-v2">
      <MHPlayerLeft>
        <MHPlayerInfo id={song_id} />
      </MHPlayerLeft>
      <MHPlayerRight>
        <MHSimiPlayList id={song_id} />
        <MHSimiSong id={song_id} />
      </MHPlayerRight>
    </MHPlayerWrapper>
  );
});

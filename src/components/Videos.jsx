import React from 'react'

import {Stack, Box} from '@mui/material';
import { VideoCard, ChannelCard } from './'

const Videos = ({videos}) => {

  return (
    <Stack
    flexWrap='wrap'
    jusitfyContent='start'
    gap={2}
    direction='row'
    >
    {videos.map((item,idx) =>(

      <Box key={idx}>
        {item.id.channelId && <ChannelCard channelDetail ={item} />}
        {item.id.videoId && <VideoCard video ={item} />}
        
      </Box>
    ))}

    </Stack>
  )
}

export default Videos       
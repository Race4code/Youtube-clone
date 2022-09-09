import React from 'react';
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import {Videos,ChannelCard} from './'
import { fetchFromApi } from '../utils/fetchFromApi';

function ChannelDetail() {
  const [ChannelDetail,setChannelDetail] = useState(null)
  const [videos,setVideos] = useState([])
  const {id} = useParams()
  useEffect(()=>{
    fetchFromApi(`channels?part=snippet&id=${id}`)
    .then((data)=>{
      setChannelDetail(data?.items[0])
    })

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>{
      setVideos(data?.items)
    })
  },[id])
  return (
    <Box
      minHeight="95vh"
    >
      <Box>
      <div
        style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(221,76,173,1) 99%, rgba(87,71,185,1) 100%, rgba(23,68,191,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex:10,
          height:'300px'
        }}
      />
      <ChannelCard ChannelDetail={ChannelDetail} marginTop="-110px"/>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr:{sm:'200px',xs:'60px'}}}/>
          <Videos videos={videos}/>
      </Box>
    </Box>

  );
}

export default ChannelDetail;

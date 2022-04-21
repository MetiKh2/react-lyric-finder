import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";

const Context=React.createContext()
export const Provider = ({children}) => {
    const [trackList,setTrackList]=useState([{track:{track_name:"123"}},{track:{track_name:"abd"}}])
    const [heading,setHeading]=useState('Top 10 Tracks')
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res=>{
                setTrackList(res?.data?.message?.body?.track_list)
                setLoading(false)
            })
            .catch(err=>console.log(err))
    },[])

    return (
        <Context.Provider value={{setHeading,trackList,heading,loading,setTrackList,setLoading}}>
            {children}
        </Context.Provider>
    );
};

export const Consumer = Context.Consumer;
export const useLyricContext = () => useContext(Context);

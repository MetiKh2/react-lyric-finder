import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../layout/Spinner";
import moment from "react-moment";
import Moment from "react-moment";

const Lyrics = () => {
    const {trackId}=useParams()
    const [track,setTrack]=useState({})
    const [lyrics,setLyrics]=useState({})
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res=>{
                setLyrics(res?.data?.message?.body?.lyrics)
                return axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${trackId}&apikey=${process.env.REACT_APP_MM_KEY}`)
            })
            .then(res=>{
                setLoading(false)
                setTrack(res?.data?.message?.body?.track)
            })
            .catch(err=>console.log(err))
    },[])
    if(loading) return <Spinner/>
    return (
        <div className={'container'}>
            <Link to={'/'} className={'btn btn-dark btn-sm mb-4'}>Go Back</Link>
            <div className={'card'}>
                <h5 className={'card-header'}>
                    {track?.track_name} by <span className={'text-secondary'}>{track?.artist_name}</span>
                </h5>
                <div className={'card-body'}>
                    <p className={'card-text'}>{lyrics?.lyrics_body}</p>
                </div>
            </div>
            <ul className={'list-group mt-3'}>
                <li className={'list-group-item'}>
                    <b>Album Name</b> : {track?.album_name}
                </li>
                <li className="list-group-item">
                    <strong>Song Genre</strong>:{" "}
                    {track?.primary_genres?.music_genre_list.length === 0
                        ? "NO GENRE AVAILABLE"
                        : track?.primary_genres?.music_genre_list[0]?.music_genre
                            ?.music_genre_name}
                </li>
                <li className={'list-group-item'}>
                    <b>Explicit Words</b> : {track.explicit===0?'No':"Yse"}
                </li>
                <li className={'list-group-item'}>
                    <b>Release Date</b> : <Moment format={'DD/MM/YY'}>{track?.updated_time}</Moment>
                </li>
            </ul>
        </div>
    );
};

export default Lyrics;
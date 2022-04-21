import React, {useState} from 'react';
import {Consumer, useLyricContext} from "../../context/LyricContext";
import axios from "axios";

const Search = () => {
    const [term,setTerm]=useState('')
    const {setTrackList,setLoading,setHeading}=useLyricContext()
    const handleSubmit = (e) => {
      e.preventDefault()
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${term}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res=>{
                setTrackList(res?.data?.message?.body?.track_list)
                setLoading(false)
                setHeading(term +' Results')
            })
            .catch(err=>console.log(err))
    }
    return (
        <Consumer>
            {
                value => {
                    return <div className={'card card-body mb-4 p-4'}>
                            <h1 className={'display-4 text-center'}>
                                <i className={'fas fa-music'}></i> Search For A Song
                            </h1>
                        <p className={'lead text-center'}>Get the lyrics for any song </p>
                        <form onSubmit={handleSubmit}>
                            <div className={'form-group'}>
                                <input className={'form-control form-control-lg'}
                                placeholder={'Song title ...'}
                                name={'trackTitle'}
                                value={term}
                                onChange={(e)=>setTerm(e.target.value)}
                                />
                            </div>
                            <button type={"submit"} className={'btn btn-primary btn-lg w-100 mt-5'}>Get Track Lyrics</button>
                        </form>
                    </div>
                }
            }
        </Consumer>
    );
};

export default Search;
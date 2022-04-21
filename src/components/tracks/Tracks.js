import React from 'react';
import {Consumer} from "../../context/LyricContext";
import Spinner from "../layout/Spinner";
import Track from "./Track";

const Tracks = () => {
    return (
        <Consumer>
            {
                value => {
                  if(value.loading) return <Spinner/>
                  else return <>
                        <h3 className={'text-center mb-4'}>{value.heading}</h3>
                      <div className={'row'}>
                          {value.trackList.map((track,i)=>{
                              return <Track track={track.track} key={i}/>
                          })}
                  </div>
                  </>
                }
            }
        </Consumer>
    );
};

export default Tracks;
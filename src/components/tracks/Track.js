import React from 'react';
import {Link} from "react-router-dom";

const Track = ({track}) => {
    return (
        <div className={'col-md-6'}>
            <div className={'card mb-4 shadow-sm'}>
                <div className={'card-body'}>
                   <h5> {track.artist_name}</h5>
                    <p className={'card-text'}>
                        <b>
                            <i className={'fa fa-play'}></i> Track :
                        </b>
                        {track.track_name}
                    </p>
                    <p className={'card-text'}>
                        <b>
                            <i className={'fa fa-compact-disc'}></i> Album :
                        </b>
                        {track.album_name}
                    </p>
                    <Link to={'lyrics/track/'+track.track_id} className={'btn btn-dark w-100'}>
                        <i className={'fas fa-chevron-right'}></i> View Lyrics
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Track;
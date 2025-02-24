import React, { useState } from 'react';

const BootStrapCard = ({cardTitle, cardText}) => {

    // hooks for useState of likes and dislikes
    const [likes, setLike] = useState(0);
    const [dislikes, setDislike] = useState(0);

    // arrow function that are going to be used through this card component 
    // to increase/decrease likes/dislikes
    const handleLikes = () => setLike(likes + 1);
    const handleDisLikes = () => setDislike(dislikes + 1);

    return (
        <div className="card">
            <img src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" className="card-img-top" alt="Placeholder" />
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text">{cardText}</p>

                <div className="d-flex justify-content-between gap-3 mt-3">
                    <button className="btn btn-success flex-grow-1" onClick={handleLikes}>
                        👍 Like {likes}
                    </button>
                    <button className="btn btn-danger flex-grow-1" onClick={handleDisLikes}>
                        👎 Dislike {dislikes}
                    </button>
                </div>
                
                
                <h6 className="col-12 mt-3 text-center">Total Rating: {likes + dislikes}</h6>

            </div>
        </div>
    )
}

export default BootStrapCard;




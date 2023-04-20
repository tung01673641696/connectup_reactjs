import React from 'react';
import './CardStory.scss';

const CardStory = ({ item }) => {
    console.log('item', item);

    return (
        <div className="card-story-item">
            <div className="card-story-left">
                <h3 className="title-story">{item?.name}</h3>
                <span className="des">{item?.des}</span>
                <div className="card-bottom">
                    <span className="category">{item?.news_categories.name}</span>
                    <span className="time">5 giờ trước</span>
                </div>
            </div>
            <img src={`${process.env.REACT_APP_API_URL}${item.image_url[0]?.url}`} alt="" />
        </div>
    );
};

export default CardStory;

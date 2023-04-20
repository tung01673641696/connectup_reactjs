import { faFacebook, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input } from 'antd';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { getNewsById } from '~/store/News/newsSlice';
import './NewDetails.scss';

const NewsDetails = () => {
    const { id } = useParams();
    const { newsById } = useSelector((state) => state.newsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNewsById(id));
    }, [dispatch]);

    console.log('newsById', newsById.length);

    return (
        <div className="news-details-wrapper">
            {newsById.length !== undefined ? (
                <></>
            ) : (
                <div className="inner">
                    <div className="social-network-group">
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faLinkedinIn} />
                        <FontAwesomeIcon icon={faMessage} />
                    </div>
                    <div className="news-content">
                        <h1>{newsById.name}</h1>
                        <div className="news-category">{newsById?.news_categories?.name}</div>
                        <div className="image-wrapper">
                            <img src={`${process.env.REACT_APP_API_URL}${newsById?.image_url[0]?.url}`} alt="" />
                        </div>
                        <div className="desc">{newsById?.des}</div>
                        <div className="news-content">{newsById.content === null ? '' : parse(newsById?.content)}</div>
                        <div className="comment-group">
                            <h3>Add your comment</h3>
                            <Input.TextArea></Input.TextArea>
                            <button>Post Comment</button>
                        </div>
                    </div>
                    <div className="most-watch">
                        <h2>Xem nhiều nhất</h2>
                        <div className="list-news">
                            <div className="news-item">
                                <span className="news-title">
                                    Bản tin luật quốc tế pháp lí về tranh chấp thương mại điện tử
                                </span>
                                <div className="bottom">
                                    <span className="category">ICTLAW</span>
                                    <span className="time">18:00 22/03/2022</span>
                                </div>
                            </div>

                            <div className="news-item">
                                <span className="news-title">
                                    Bản tin luật quốc tế pháp lí về tranh chấp thương mại điện tử
                                </span>
                                <div className="bottom">
                                    <span className="category">ICTLAW</span>
                                    <span className="time">18:00 22/03/2022</span>
                                </div>
                            </div>

                            <div className="news-item">
                                <span className="news-title">
                                    Bản tin luật quốc tế pháp lí về tranh chấp thương mại điện tử
                                </span>
                                <div className="bottom">
                                    <span className="category">ICTLAW</span>
                                    <span className="time">18:00 22/03/2022</span>
                                </div>
                            </div>

                            <div className="news-item">
                                <span className="news-title">
                                    Bản tin luật quốc tế pháp lí về tranh chấp thương mại điện tử
                                </span>
                                <div className="bottom">
                                    <span className="category">ICTLAW</span>
                                    <span className="time">18:00 22/03/2022</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewsDetails;

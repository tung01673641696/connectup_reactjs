import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Select } from 'antd';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCities } from '~/store/CustomerProfile/customerSlice';
import { getAllField } from '~/store/Store/storeSlice';
import { getAllEnterprise } from '~/store/Enterprise/enterpriseSlice';
import './Advise.scss';
import { useTranslation } from 'react-i18next';

const { Option } = Select;

const Advise = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { allCities } = useSelector((state) => state.customerReducer);
    const { listField } = useSelector((state) => state.storesReducer);
    const { enterpriseList } = useSelector((state) => state.enterpriseReducer);
    useEffect(() => {
        dispatch(getAllCities());
        dispatch(getAllField());
        dispatch(getAllEnterprise());
    }, []);

    return (
        <div className="advise-wrapper">
            <div className="inner">
                <div className="content-main-advise">
                    <div className="search-group">
                        <div className="form-group">
                            <label>{t('text.field')}</label>
                            <Select allowClear showSearch placeholder={t('text.Choose_field')}>
                                {listField.map((item) => {
                                    return (
                                        <Option key={item.id} value={item.id}>
                                            {item.name}
                                        </Option>
                                    );
                                })}
                            </Select>
                        </div>
                        <div className="form-group">
                            <label>{t('text.Location')}</label>
                            <Select allowClear showSearch placeholder={t('text.Choose_area')}>
                                {allCities.map((item) => {
                                    return (
                                        <Option key={item.id} value={item.id}>
                                            {item.name}
                                        </Option>
                                    );
                                })}
                            </Select>
                        </div>
                        <div className="search-btn">
                            <button>{t('text.search')}</button>
                        </div>
                    </div>

                    <div className="consultants-wrapper">
                        <div className="consultants-list">
                            {enterpriseList?.map((item, index) => {
                                return (
                                    <div className="consultants-item" key={index}>
                                        <div className="consultants-image">
                                            <img
                                                src="https://jobsgo.vn/blog/wp-content/uploads/2021/07/co-van-la-gi-1.jpg"
                                                alt="Avatar"
                                            />
                                        </div>
                                        <div className="consultants-details">
                                            <div className="consultants-details__left">
                                                <span className="consultants-details__name">{item.name}</span>
                                                <span className="consultants-details-grey">
                                                    {item.name_of_exchange}
                                                </span>
                                                <span className="consultants-details-grey">
                                                    {item.address_register}
                                                </span>
                                                <span className="consultants-details-grey">+{item.phone}</span>
                                                <span className="consultants-details-grey">{item.address}</span>
                                            </div>
                                            <div className="consultants-details__right">
                                                <button className="consultants-details__action">
                                                    <FontAwesomeIcon icon={faCommentDots} />
                                                    <span>{t('text.Chat_now')}</span>
                                                </button>
                                                <button className="consultants-details__action">
                                                    <FontAwesomeIcon icon={faPhoneVolume} />
                                                    <span>{t('text.Call')}</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advise;

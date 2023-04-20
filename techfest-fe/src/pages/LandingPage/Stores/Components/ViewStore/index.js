import classNames from 'classnames/bind';
import styles from './ViewStores.module.scss';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const cx = classNames.bind(styles);

function ListStores({ item }) {
    const navigate = useNavigate();

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    console.log('item field', item);

    return (
        <div data-aos="fade-up" className={cx('field-item')}>
            <div className={cx('field-image')}>
                <img src={`${process.env.REACT_APP_API_URL}${item.image_url[0].url}`} alt="" />
            </div>
            <div className={cx('field-body')}>
                <div className={cx('field-meta')}>
                    <span>{item?.count} Doanh nghiệp</span>
                </div>
                <h3 className={cx('field-name')}>
                    <Link to={`/stores/viewstore/${item.id}`}>{item.name}</Link>
                </h3>
            </div>
            <div className={cx('founder-group')}>
                <div data-aos="fade-left" className={cx('desc')}>
                    {item?.des}
                </div>
                <div className={cx('show-more-action')}>
                    <Link className={cx('show-more')} to={`/stores/viewstore/${item.id}`}>
                        Xem chi tiết
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ListStores;

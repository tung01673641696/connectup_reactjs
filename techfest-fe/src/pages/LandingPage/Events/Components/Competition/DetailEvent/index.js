import classNames from 'classnames/bind';
import styles from './DetailEvent.module.scss';
import ButtonComponent from '~/components/layouts/components/Button';
import images from '~/assets/images/home/header';
import Modal from 'antd/lib/modal/Modal';
import { useEffect, useState } from 'react';
import RegCompetition from '~/pages/LandingPage/Activities/Participate/RegCompetition';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function DetailEvent({ item, currentId, checkImage, handleDetail, index, currentDetail }) {
    const [idCompetition, setIdCompetition] = useState();

    const { eventListPag2 } = useSelector((state) => state.eventsReducer);

    const [currentModal, setCurrentModal] = useState(false);
    const handleModal = () => {
        setIdCompetition(item.id)
        setCurrentModal(true);
    };
    const onHide = () => {
        setCurrentModal(false);
    };

    return (
        <div className={cx('inner')}>
            <Modal
                visible={currentModal} onCancel={onHide} footer={null}
                wrapClassName="modal-cus modal-register-competition"
                title="Đăng ký tham gia"
                centered
            >
                {/* {
                    eventListPag2.map((item, index) => {
                        return (
                            <div>
                                {item.name}
                            </div>
                        )
                    })
                } */}

                <RegCompetition visible={setCurrentModal} idCompetition={idCompetition} />
                {/* <RegCompetition /> */}
            </Modal>
            <div key={index} className={cx('contents')}>
                <div className={cx('content-img')}>
                    <img src={checkImage(item.image_url)} />
                </div>
                <div className={cx('content-time-place')}>
                    <div>
                        Ngày bắt đầu:
                        {item.start_time}
                    </div>
                    <div>
                        Ngày kết thúc:
                        {item.end_time}
                    </div>
                </div>
                <div className={cx('content-des')}>
                    {item.name}
                    <div className={cx('btn-view]')}>
                        <ButtonComponent outline small onClick={() => handleDetail(item.id)}>
                            Xem thêm
                        </ButtonComponent>
                    </div>
                </div>
                <div className={cx('content-btn1')}>
                    {/* <ButtonComponent outline small>Đào tạo</ButtonComponent>
                    <ButtonComponent outline small>Cuộc thi</ButtonComponent> */}
                </div>
                <div className={cx('content-btn2')}>
                    <ButtonComponent primary small>
                        Action
                    </ButtonComponent>
                </div>
            </div>
            {currentDetail && item.id == currentId ? (
                <div className={cx('detail')}>
                    <div className={cx('content1')}>
                        <div className={cx('title')}>Giới thiệu:</div>
                        <div className={cx('des')}>{item.content}</div>
                    </div>
                    <div className={cx('content2')}>
                        <div className={cx('title')}>Địa điểm tổ chức:</div>
                        <div className={cx('des')}>{item.address}</div>
                    </div>
                    <div className={cx('btn')}>
                        <ButtonComponent
                            onClick={handleModal}
                            leftIcon={<img src={images.phoneIcon} />}
                            outline
                            large
                        >
                            Đăng ký tham gia
                        </ButtonComponent>
                        <ButtonComponent primary large>
                            Xem ngay
                        </ButtonComponent>
                        <ButtonComponent primary small>
                            Tải tài liệu
                        </ButtonComponent>
                    </div>
                </div>
            ) : null}

        </div>
    );
}

export default DetailEvent;

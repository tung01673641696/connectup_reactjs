import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './SwitchChoose.module.scss';
import ButtonComponent from '~/components/layouts/components/Button';
import images from '~/assets/images/home/header';
import { Pagination } from 'antd';

const cx = classNames.bind(styles);
const MEMU_ITEMS = [
    {
        title: 'Mô tả sản phẩm',
        id: 1,
    },

    {
        title: 'Đánh giá',
        id: 5,
    },
];

function SwitchChoose() {
    const [currentItem, setCurrentItem] = useState(1);
    const list = MEMU_ITEMS.map((item, index) => {
        return (
            <div
                key={index}
                className={currentItem === item.id ? `${cx('list-item')}` : ''}
                onClick={() => setCurrentItem(item.id)}
            >
                {item.title}
            </div>
        );
    });
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content-item')}>{list}</div>
            <div className={cx('content-detail')}>
                {currentItem === 1 ? (
                    <div className={cx('des')}>
                        Khóa học về Sách truyện Song ngữ Anh-Việt là một chương trình tự học song ngữ về nâng cao khả
                        năng đọc hiểu và trò chuyện tiếng Anh. Chương trình giúp các bé làm quen và phát triển 4 kỹ năng
                        tiếng Anh thông qua sử dụng các quyển sách song ngữ dễ hiểu, bài hát giáo dục, bản thu âm truyện
                        bằng tiếng Anh và những bài tập học từ vựng.
                    </div>
                ) : null}
                {currentItem === 4 ? (
                    <div className={cx('contact')}>
                        <div className={cx('contact-detail')}>
                            Công ty TNHH BioSun 68 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP. HCM, Việt Nam.
                        </div>
                        <div className={cx('contact-btn')}>
                            <ButtonComponent leftIcon={<img src={images.phoneIcon} />} outline large>
                                Gọi điện
                            </ButtonComponent>
                            <ButtonComponent leftIcon={<img src={images.message} />} outline large>
                                Đăng ký
                            </ButtonComponent>
                            <ButtonComponent leftIcon={<img src={images.message} />} outline large>
                                Chat ngay
                            </ButtonComponent>
                        </div>
                    </div>
                ) : null}
                {currentItem === 5 ? (
                    <div className={cx('feedback')}>
                        <div className={cx('feedback-detail')}>FEED BACK</div>
                        {/* <Pagination defaultCurrent={1} total={150} /> */}
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default SwitchChoose;

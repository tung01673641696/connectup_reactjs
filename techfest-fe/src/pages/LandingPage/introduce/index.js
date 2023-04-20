import classNames from 'classnames/bind';
import styles from './Introduce.module.scss';
import SlideShowHistory from './slide';
import images from '~/assets/images/home/header';
import { useTranslation, Trans } from 'react-i18next';

const cx = classNames.bind(styles);
function Introduce() {
    const { t } = useTranslation();

    return (
        <div className={cx('warpper')}>
            <div className={cx('inner')}>
                <div className={cx('content-overview')}>
                    <h1>{t('introduce.title1')}</h1>
                    <span>{t('introduce.des')}</span>
                </div>
                <hr />

                <div className={cx('content-history')}>
                    <h1>{t('introduce.history')}</h1>
                    <SlideShowHistory />
                </div>
                <hr />
                <div className={cx('content-advisor')}>
                    <h1>{t('introduce.organ')}</h1>
                    <span>{t('introduce.agency')}</span>
                    <div className={cx('logo-guilding')}>
                        <img src={images.guilding1} />
                        <img src={images.guilding2} />
                    </div>
                    <span>{t('introduce.organ2')}</span>
                    <div className={cx('logo-guilding')}>
                        <img src={images.advisor1} />
                        <img src={images.advisor2} />
                        <img src={images.advisor3} />
                        <img src={images.advisor4} />
                    </div>
                    <span>{t('introduce.tatic')}</span>
                    <div className={cx('logo-guilding')}>
                        <img src={images.tatic} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduce;

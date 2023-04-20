import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from '~/assets/images/home/header';
import { useTranslation, Trans } from 'react-i18next';
import ButtonComponent from '../Button';
import footerBg from '~/assets/images/home/header/footer.jpg';
const cx = classNames.bind(styles);

function Footer() {
    const { t } = useTranslation();

    return (
        <div className={cx('wrapper')}>
            <img src={footerBg} alt="banner" className={cx('wrapper-bannber')} />
            <div className={cx('inner')}>
                <div className={cx('container')}>
                    <div className={cx('contents')}>
                        <div className={cx('content-des')}>
                            <p>{t('footer.content')}</p>
                        </div>
                    </div>
                    <div className={cx('form-register')}>
                        <div className={cx('form-register-detail')}>
                            <div className={cx('form-register-detail-list')}>
                                <h3>{t('footer.notification')}</h3>
                                <p>{t('footer.title')}</p>
                                <div className={cx('form-input')}>
                                    <input type="name" placeholder={t('footer.forminput.name')}></input>
                                    <input placeholder={t('footer.forminput.workplace')}></input>
                                    <input placeholder={t('footer.forminput.email')}></input>
                                </div>
                                <ButtonComponent primary small>
                                    {t('homecustomer.register')}
                                </ButtonComponent>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

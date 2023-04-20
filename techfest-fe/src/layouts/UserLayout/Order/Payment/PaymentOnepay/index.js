import React from 'react';
import { useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import onePayApi from '~/api/Onepay/onepay';

const PaymentOnepay = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const key = searchParams.get('vpc_MerchTxnRef');
    const type = searchParams.get('type');
    console.log('type', typeof type);

    useEffect(() => {
        if (key !== null && type === '4') {
            const checkTransaction = async () => {
                const res = await onePayApi.checkTransaction({ payment_code: key.toString() });
                localStorage.clear();
                navigate('/login');
            };
            checkTransaction();
        }
        if (key !== null && type === '2') {
            const checkTransactionPackage = async () => {
                const res = await onePayApi.checkTransactionPackage({ payment_code: key.toString() });
                localStorage.clear();
                navigate('/login');
            };
            checkTransactionPackage();
        }
    }, [key, type]);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            Chúc mừng bạn đã đăng ký thành công.<Link to={'/'}>Bấm vào đây</Link>để trở về trang chủ
        </div>
    );
};

export default PaymentOnepay;

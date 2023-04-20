import { Button, Space, Table } from 'antd';
import React from 'react';
import './PackageManage.scss';

const PackageManage = () => {
    const data = [
        {
            id: '1',
            name: 'Tập đoàn Hòa Phát',
            package: 'Gói dịch vụ 1 tháng',
            status: 'Hoạt động',
            cycle: '2022-12-01',
            price: '5000000',
        },
        {
            id: '2',
            name: 'Tập đoàn Smiletech',
            package: 'Gói dịch vụ 6 tháng',
            status: 'Tạm Hoãn',
            cycle: '2023-05-01',
            price: '10000000',
        },
    ];

    const columns = [
        {
            key: 'id',
            title: 'ID',
            dataIndex: 'id',
            align: 'center',
            render: (text, record, index) => record.id,
        },
        {
            key: 'name',
            title: 'Tên doanh nghiệp',
            dataIndex: 'name',
            width: '30%',
            align: 'center',
            // ...getColumnSearchProps('user_name'),
        },
        {
            key: 'package',
            title: 'Thông tin gói dịch vụ',
            dataIndex: 'package',
            align: 'center',
            width: '30%',
            // ...getColumnSearchProps('name'),
        },
        {
            key: 'status',
            title: 'Trạng thái',
            dataIndex: 'status',
            width: '10%',
            align: 'center',
            // ...getColumnSearchProps('address'),
            render: (text, record, index) => (
                <Space size="middle">
                    {text === 'Hoạt động' ? (
                        <Button type="primary" size="small">
                            {text}
                        </Button>
                    ) : (
                        <Button type="primary" size="small" danger>
                            {text}
                        </Button>
                    )}
                </Space>
            ),
        },
        {
            key: 'cycle',
            title: 'Chu kỳ TT tiếp theo',
            dataIndex: 'cycle',
            width: '10%',
            align: 'center',
            // ...getColumnSearchProps('mobile'),
        },
        {
            key: 'price',
            title: 'Số tiền',
            dataIndex: 'price',
            width: '15%',
            align: 'center',
            // ...getColumnSearchProps('email'),
        },

        // {
        //     key: 'action',
        //     align: 'center',
        //     // title: <SyncOutlined onClick={() => dispatch(getAllAccountsList())}/>,
        //     width: '8%',
        //     render: (text, record, index) => (
        //         <Space size="middle">
        //             <EditOutlined onClick={() => handleEditForm(record)} />
        //             <Popconfirm
        //                 placement="topRight"
        //                 title={
        //                     record.id === currentUser.id
        //                         ? translate('Day_la_tai_khoan_cua_ban')
        //                         : `${translate('Ban_muon_xoa')} ${record.name} ?`
        //                 }
        //                 onConfirm={() => handleDelete(record.id)}
        //                 okText={translate('Xoa')}
        //                 cancelText={translate('Huy')}
        //             >
        //                 <DeleteOutlined />
        //             </Popconfirm>
        //         </Space>
        //     ),
        // },
    ];

    return (
        <div className="package-manage">
            <Table
                scroll={{ x: 1098 }}
                rowKey={(record) => record.id}
                columns={columns}
                dataSource={data}
                bordered
                pagination={{
                    defaultPageSize: 50,
                    hideOnSinglePage: true,
                    pageSizeOptions: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                }}
            />
        </div>
    );
};

export default PackageManage;

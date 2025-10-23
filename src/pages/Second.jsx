import { Space, Table, Input, Card, ConfigProvider, Button } from 'antd';
import styled from 'styled-components';
import './css/second.css'
import { EditOutlined, DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import AddInvoiceModal from '../components/AddInvoiceModal';
import { useState } from 'react';

const StyledCard = styled(Card)`
    .ant-card-head {
    background-color: #191e3a;
    color: white;
    padding: 15px;
    font-weight: bold;
    border-radius: 4px 4px 0 0;
    width: 100%;
    box-sizing: border-box;
}
}
`;

const columns = [
    {
        title: 'ردیف',
        dataIndex: 'key',
        key: 'number',
        align: 'center',
    },
    {
        title: 'شماره فاکتور',
        dataIndex: 'number_id',
        key: 'number_id',
        align: 'center',
    },
    {
        title: 'تاریخ فاکتور',
        dataIndex: 'Date',
        key: 'Date',
        align: 'center',
    },
    {
        title: 'خریدار',
        key: 'name',
        dataIndex: 'name',
        align: 'center',
    },
    {
        title: 'نحوه پرداخت',
        key: 'price_tag',
        dataIndex: 'price_tag',
        align: 'center',
    },
    {
        title: 'هزینه نهایی',
        key: 'price',
        dataIndex: 'price',
        align: 'center',
    },
    {
        title: 'عملیات',
        align: 'center',
        key: 'actions',
        render: (_, record) => (
            <div className="action-buttons">
                <a href={`/edit/${record.key}`} className="Edit-button">
                    <EditOutlined style={{ color: 'green', marginRight: 8 }} />
                </a>
                <a href={`/delete/${record.key}`} className="delete-button">
                    <DeleteOutlined style={{ color: 'red' }} />
                </a>
            </div>
        ),
    },


];
const data = [
    {
        key: '1',
        name: 'متین محمدی',
        number_id: '00014',
        Date: '1403/08/01',
        price_tag: 'بدهکاری',
        price: '3,850,000'
    },
    {
        key: '2',
        name: 'لقمان محمدی',
        number_id: '00013',
        Date: '1403/08/01',
        price_tag: 'ترکیبی',
        price: '25,300,000'
    },
    {
        key: '3',
        name: 'هوشیار مرادی',
        number_id: '00012',
        Date: '1403/08/01',
        price_tag: 'بدهکاری',
        price: '34,650,000'
    },
    {
        key: '4',
        name: 'سعید غلامی',
        number_id: '00011',
        Date: '1403/08/01',
        price_tag: 'ترکیبی',
        price: '13,870,000'
    },
    {
        key: '5',
        name: 'امید مرادی',
        number_id: '00010',
        Date: '1403/08/01',
        price_tag: 'بدهکاری',
        price: '113,830,000'
    },
];

export function Second() {
        const [isModalVisible, setIsModalVisible] = useState(false);
        const showModal = () => {
            setIsModalVisible(true);
        };
        const hideModal = () => {
            setIsModalVisible(false);
        };
    const rowClassName = (record, index) => {
        return index % 2 === 0 ? 'gray-row' : 'white-row';
    };
    return (
        <div>
            <StyledCard title='فاکتور فروش' bordered={true} style={{
                width: '75%',
                textAlign: 'end',
                marginLeft: '100px',
                marginTop: '50px',
            }}>
                <Space direction='vertical' style={{ width: '100%' }}>
                    <Button type='primary' style={{ width: '10%' }} icon={<PlusCircleOutlined />} onClick={showModal} iconPosition='end'>(Alt+n)افزودن</Button>
                    <AddInvoiceModal isVisible={isModalVisible} onClose={hideModal} />
                    <hr className='hr_sec' />
                    <Space>
                        <h4 style={{ fontWeight: 'bold', fontSize: '13px' }}><Input style={{ width: '75%' }} /> :در ستون</h4>
                        <h4 style={{ fontWeight: 'bold', fontSize: '13px' }}><Input style={{ width: '75%' }} /> :جستجو</h4>
                    </Space>
                    <ConfigProvider direction='rtl'><Table className='custom-table'
                        rowClassName={rowClassName}
                        style={{
                            fontWeight: 'bold',
                            width: 'full',
                        }} columns={columns} dataSource={data} />
                    </ConfigProvider>
                </Space>
            </StyledCard>
        </div>
    )
}

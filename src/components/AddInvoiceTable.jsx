import { Table, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const columns = [
    { title: 'ردیف', dataIndex: 'index', key: 'index' },
    { title: 'دسته بندی', dataIndex: 'category', key: 'category' },
    { title: 'نام مدل محصول', dataIndex: 'productName', key: 'productName' },
    { title: 'خصوصیات', dataIndex: 'attributes', key: 'attributes' },
    {
        title: 'عملیات',
        key: 'action',
        render: () => (
            <>
                <Button type="link" icon={<EditOutlined />} onClick={() => console.log('Edit')} />
                <Button type="link" icon={<DeleteOutlined />} onClick={() => console.log('Delete')} />
            </>
        ),
    },
];

const AddInvoiceTable = () => {
    return (
        <Table
            columns={columns}
            dataSource={[]}
            pagination={false}
            bordered
        />
    );
};

export default AddInvoiceTable;

import { Form, Input, Button, Select, DatePicker, InputNumber} from 'antd';
import AddInvoiceTable from './AddInvoiceTable';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

const AddInvoiceForm = () => {
    return (
        <Form layout="vertical">
            
            <div style={{ display: 'flex', gap: '16px' }}>
                <Form.Item label="شماره فاکتور" required>
                    <Input placeholder="شماره فاکتور" />
                </Form.Item>
                <Form.Item label="تاریخ رسید" required>
                    <DatePicker />
                </Form.Item>
                <Form.Item label="نوع ارز" required>
                    <Select defaultValue="ریال">
                        <Option value="ریال">ریال</Option>
                        <Option value="دلار">دلار</Option>

                    </Select>
                </Form.Item>
                <Form.Item label="شماره سند">
                    <Input placeholder="شماره سند" />
                </Form.Item>
                <Form.Item label="کد فاکتور">
                    <Input placeholder="کد فاکتور" />
                </Form.Item>
            </div>


            <div style={{ display: 'flex', gap: '16px' }}>
                <Form.Item label="خریدار" required>
                    <Select placeholder="لطفا انتخاب کنید">
                        
                    </Select>
                </Form.Item>
                <Form.Item label="حساب بستانکار" required>
                    <Select defaultValue="صندوق 1">
                        <Option value="صندوق 1">صندوق 1</Option>
                        <Option value="صندوق 2">صندوق 2</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="هزینه حمل به عهده" required>
                    <Select defaultValue="شرکت">
                        <Option value="شرکت">شرکت</Option>
                        <Option value="مشتری">مشتری</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="هزینه حمل">
                    <InputNumber placeholder="هزینه حمل" />
                </Form.Item>
                <Form.Item label="هزینه تلفن">
                    <InputNumber placeholder="هزینه تلفن" />
                </Form.Item>
            </div>

            
            <Form.Item label="توضیحات">
                <Input.TextArea rows={2} placeholder="توضیحات" />
            </Form.Item>

            
            <Button type="primary" icon={<PlusOutlined />}>افزودن محصول</Button>


            <AddInvoiceTable />

            
            <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
                <Form.Item label="نوع تخفیف">
                    <Select defaultValue="%">
                        <Option value="%">%</Option>
                        <Option value="amount">مقدار ثابت</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="مقدار تخفیف">
                    <InputNumber placeholder="مقدار تخفیف" />
                </Form.Item>
                <Form.Item label="کل هزینه">
                    <InputNumber placeholder="کل هزینه" />
                </Form.Item>
                <Form.Item label="تعداد کل">
                    <InputNumber placeholder="تعداد کل" />
                </Form.Item>
            </div>

            
            <div style={{ display: 'flex', gap: '16px' }}>
                <Form.Item label="نحوه پرداخت">
                    <Select defaultValue="نقدی">
                        <Option value="نقدی">نقدی</Option>
                        <Option value="اعتباری">اعتباری</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="حساب بدهکار">
                    <Select defaultValue="صندوق 1">
                        <Option value="صندوق 1">صندوق 1</Option>
                        <Option value="صندوق 2">صندوق 2</Option>
                    </Select>
                </Form.Item>
            </div>

            
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', marginTop: '16px' }}>
                <Button type="primary" htmlType="submit">ایجاد</Button>
                <Button>لغو</Button>
            </div>
        </Form>
    );
};

export default AddInvoiceForm;

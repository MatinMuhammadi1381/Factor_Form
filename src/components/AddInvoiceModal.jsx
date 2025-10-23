import { Modal, ConfigProvider } from 'antd';
import AddInvoiceForm from './AddInvoiceForm';
import './css/NavBar.css'
import PropTypes from 'prop-types';



const AddInvoiceModal = ({ isVisible, onClose }) => {
    return (
        <ConfigProvider direction='rtl'><Modal
            className='custom-modal'
            visible={isVisible}
            onCancel={onClose}
            footer={null}
            width="80%"
            title={
                <div style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    padding: '10px 0',
                    borderBottom: '2px solid #e0e0e0',
                    color: '#333'
                }}>
                    افزودن فاکتور فروش
                </div>
            }
        >
            <AddInvoiceForm />
        </Modal></ConfigProvider>

    );
};

AddInvoiceModal.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default AddInvoiceModal;

import { Avatar, Layout, Button } from 'antd';
import { AlignRightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const siderStyle = {
    width: 200,
    display: 'flex',
    position: 'fixed',
    top: 0,
    backgroundColor: '#191e3a',
    height: '100vh',
    overflow: 'auto',
    right: 0,
};
const  SideBar = () => {
    return (
            <Sider style={siderStyle}>
                <Avatar style={{backgroundColor:'#191e3a', top: '12px'}}
                size= 'large'  
                icon = {<AlignRightOutlined style={{Color: 'white'}} />}/>


            <Link to='/'><Button variant='link' type='text' style={{width: 200, color: 'white', marginTop: '50px'}}>Home Page</Button></Link>
            <Link to= '/second'><Button variant='link' type='text' style={{width: 200, color: 'white', marginTop: '15px'}}>Second Page</Button></Link>
            <Link to='/Third'><Button variant='link' type='text' style={{width: 200, color: 'white', marginTop: '15px'}}>Third Page</Button></Link>
            </Sider>
    );
};
export default SideBar;
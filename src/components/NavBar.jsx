import {Layout, Avatar, Typography, Space, Badge, Input} from 'antd';
import { UserOutlined, ShoppingCartOutlined, BellOutlined, GlobalOutlined, SearchOutlined } from '@ant-design/icons';
import './css/NavBar.css'

const { Header} = Layout;
const {Text} = Typography;
const CustomInput = {
    color:'white',
    width: '250px',
    marginRight: '200px', 
    backgroundColor: '#242b53',
    border: '1px solid #242b53'
}
const NavBar = () => {
    return (
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: '#191e3a'
                }}
            >
                <Space size= 'middle'>
                <Text type='secondary' 
                style={{color: 'white'}}> متین محمدی </Text>

                <Avatar 
                style={{backgroundColor:'#191e3a'}} 
                size='large'  
                icon={<UserOutlined />}/>
                <hr  className='hr_nav' style={{height: '25px'}}/>

                <Avatar 
                style={{backgroundColor:'#191e3a'}} 
                size= 'large'  
                icon = {<ShoppingCartOutlined style={{Color: 'white'}} />}/>

                <Badge 
                count={3} 
                size='small' 
                style={{backgroundColor: 'darkorange'}}>
                <Avatar 
                style={{backgroundColor:'#191e3a'}} 
                size= 'large' 
                icon = {<BellOutlined style={{Color: 'white'}} />}/>
                </Badge>

                <Badge size='small'>
                <Avatar 
                style={{backgroundColor:'#191e3a'}} 
                size= 'large'  
                icon = {<GlobalOutlined style={{Color: 'white'}} />}/>
                </Badge>

                </Space>
                    <Input
                        className='custom-input'
                        size='middle' style={CustomInput}
                        placeholder='Search Somthing here....'
                        prefix={<SearchOutlined style={{color:'white'}}/>}
                    />
            </Header>
    )
}

export default NavBar

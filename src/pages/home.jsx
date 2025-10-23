import { Typography, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import '../app.css'
const { Title } = Typography;
export function Home() {
    return (
        <div>
            <Title
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: '-250px',
                    marginTop: '125px',
                    color: '#191e3a',
                    fontWeight: '1000'
                }}>
                Welcom to Home Page
            </Title>
            <Spin 
                style={{
                    display: 'flex',
                    justifyContent:'center',
                    alignItems: 'center',
                    marginLeft: '-250px',
                    marginTop: '125px',
                }}
                indicator={
                    <LoadingOutlined
                        style={{
                            fontSize: '100px',
                            color: '#242b53'
                        }}
                        spin
                        />
                    }
                />
        </div>
    )
}


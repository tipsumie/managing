import { Layout } from 'antd';

const { Content } = Layout;


const MainContent = ({ children }) => {
  return (
    <Content  style={{
      padding: '10px 50px',
    }}>{ children }</Content>
  )
}

export default MainContent
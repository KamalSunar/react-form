import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const Home = () => {
	return (
		<div>
			<Title level={4}>Home</Title>
			<Paragraph>Enter your credentials to access your account.</Paragraph>
		</div>
	);
};

export default Home;

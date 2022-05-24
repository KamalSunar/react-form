import { Button, Typography } from 'antd';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoginUser } from '../../../reduxStore/actions';
import TextField from '../../shared/TextField';

const { Title, Text, Paragraph } = Typography;

const Login = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const {
		handleSubmit,
		formState: { errors },
		control,
	} = useForm({
		mode: 'all',
	});

	const dispatch = useDispatch();

	const onSubmit = (data: any) => {
		setLoading(true);
		dispatch(LoginUser(data));
		setLoading(false);
	};

	return (
		<div>
			<Title level={4}>Login</Title>
			<Paragraph>Enter your credentials to access your account.</Paragraph>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField
					control={control}
					required
					name="email"
					label="Email Address"
					placeholder="Enter your email address"
					error={errors.email}
					rules={{
						required: 'This field is required',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: 'Please enter a valid email',
						},
					}}
				/>
				<TextField
					control={control}
					required
					name="password"
					label="Password"
					type="password"
					placeholder="Enter your Password"
					error={errors.password}
					rules={{
						required: 'This field is required',
					}}
				/>
				<Button type="primary" htmlType="submit" loading={loading}>
					Submit
				</Button>
			</form>
			<Text style={{ marginTop: '10px', display: 'block' }}>
				Don't have an account?
				<Link to="/register" style={{ paddingLeft: '3px' }}>
					Register
				</Link>
			</Text>
		</div>
	);
};

export default Login;

import { Button, Col, Row, Typography } from 'antd';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterUser } from '../../../reduxStore/actions';
import TextField from '../../shared/TextField';

const { Title, Text, Paragraph } = Typography;

const Register = () => {
	const dispatch = useDispatch();
	const history = useNavigate();
	const [loading, setLoading] = useState<boolean>(false);
	const {
		handleSubmit,
		watch,
		formState: { errors },
		control,
	} = useForm({
		mode: 'all',
	});

	const onSubmit = (data: any) => {
		setLoading(true);
		dispatch(RegisterUser(data, history));
		setLoading(false);
	};

	return (
		<div>
			<Title level={4}>Register</Title>
			<Paragraph>Let's get you all set up so you can verify your personal account and begin setting up your profile.</Paragraph>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Row gutter={16}>
					<Col className="gutter-row" xs={24} sm={12}>
						<TextField
							control={control}
							required
							name="firstName"
							label="First Name"
							placeholder="Enter your first Name"
							error={errors.firstName}
							rules={{
								required: 'This field is required',
							}}
						/>
					</Col>
					<Col className="gutter-row" xs={24} sm={12}>
						<TextField
							control={control}
							required
							name="lastName"
							label="Last Name"
							placeholder="Enter your Last Name"
							error={errors.lastName}
							rules={{
								required: 'This field is required',
							}}
						/>
					</Col>
					<Col className="gutter-row" xs={24} sm={12}>
						<TextField
							control={control}
							required
							name="phoneNumber"
							label="Phone Number"
							type="number"
							placeholder="Enter your Phone Number"
							error={errors.phoneNumber}
							rules={{
								required: 'This field is required',
								pattern: {
									value: /^[0-9][0-9]*$/,
									message: 'Please enter a valid Phone Number',
								},
								maxLength: {
									value: 10,
									message: 'Please enter a valid Phone Number',
								}
							}}
						/>
					</Col>
					<Col className="gutter-row" xs={24} sm={12}>
						<TextField
							control={control}
							required
							name="email"
							label="Email"
							placeholder="Enter your email"
							error={errors.email}
							rules={{
								required: 'This field is required',
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: 'Please enter a valid email',
								},
							}}
						/>
					</Col>
					<Col className="gutter-row" xs={24} sm={12}>
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
					</Col>
					<Col className="gutter-row" xs={24} sm={12}>
						<TextField
							control={control}
							required
							name="confirmPassword"
							label="Password"
							type="password"
							placeholder="Confirm Password"
							error={errors.confirmPassword}
							rules={{
								required: 'This field is required',
								validate: (val: string) => {
									if (watch('password') !== val) {
										return 'Your passwords do no match';
									}
								},
							}}
						/>
					</Col>
				</Row>
				<Button type="primary" htmlType="submit" loading={loading}>
					Submit
				</Button>
			</form>
			<Text style={{ marginTop: '10px', display: 'block' }}>
				Already haven an account?
				<Link to="/login" style={{ paddingLeft: '3px' }}>
					Log In
				</Link>
			</Text>
		</div>
	);
};

export default Register;

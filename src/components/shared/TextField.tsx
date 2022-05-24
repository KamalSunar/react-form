import { Form, Input, Typography } from 'antd';
import { Controller } from 'react-hook-form';
import { FeildProps } from '../../typeof';

const TextField = (props: FeildProps) => {
	const { Text } = Typography;
	const { label, name, control, rules, error, type, placeholder, required } = props;

	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({ field }) => (
				<Form layout="vertical">
					<Form.Item label={label} name={name} rules={[{ required: required }]}>
						{type === 'password' ? (
							<Input.Password status={error?.message && 'error'} {...field} placeholder={placeholder} />
						) : (
							<Input
								required={required}
								type={type}
								status={error?.message && 'error'}
								{...field}
								placeholder={placeholder}
							/>
						)}
						{error && <Text type="danger">{error?.message}</Text>}
					</Form.Item>
				</Form>
			)}
		/>
	);
};

TextField.defaultProps = {
	type: 'text',
};

export default TextField;

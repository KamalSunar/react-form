import { Control, FieldValues } from 'react-hook-form';

export type LoginType = {
	email: string;
	password: string;
};

export type RegisterType = {
	confirmPassword?: string;
	email: string;
	firstName: string;
	lastName: string;
	password: string;
	phoneNumber: number;
};

export interface FeildProps {
	type?: string;
	label?: any;
	name: string;
	error?: any;
	required?: boolean;
	control: Control<FieldValues, any>;
	rules?: any;
	placeholder?: string;
}

export interface ActionModel {
	payload: { [key: string]: string };
	type: { [key: string]: string };
}

export interface ResponseModel {
	config: { [key: string]: string };
	data: { data: { [key: string]: string } };
	status: number;
	statusText: string;
}

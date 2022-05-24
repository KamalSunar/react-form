import { message } from 'antd';
import axios from 'axios';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { AnyAction, Dispatch } from 'redux';
import { LoginType, RegisterType } from '../typeof';
import { LOGIN_START, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL } from './actionTypes';

const API_ENDPOINTS = 'https://reqres.in/api';

export const LoginUser = (data: LoginType) => {
	return (dispatch: Dispatch<AnyAction>) => {
		dispatch({ type: LOGIN_START });

		axios
			.post(`${API_ENDPOINTS}/login`, data)
			.then((res) => {
				const {
					data: { token },
				} = res;
				if (token) {
					dispatch({
						type: LOGIN_SUCCESS,
						payload: token,
					});
					message.success('Registration successful');
				} else {
					dispatch({ type: LOGIN_FAIL });
					message.error('User not found');
				}
			})
			.catch((err) => {
				dispatch({ type: LOGIN_FAIL });
				message.error(err.response.data.error);
			});
	};
};

export const RegisterUser = (data: RegisterType, history: NavigateFunction) => {
	return (dispatch: Dispatch<AnyAction>) => {
		dispatch({ type: REGISTER_START });

		axios
			.post(`${API_ENDPOINTS}/register`, data)
			.then((res) => {
				const {
					data: { token },
				} = res;
				if (token) {
					dispatch({
						type: REGISTER_SUCCESS,
						payload: token,
					});
					history('/login');
					localStorage.setItem('token', token);
					message.success('Registration successful');
				} else {
					dispatch({ type: REGISTER_FAIL });
					message.error('Error');
				}
			})
			.catch(() => {
				dispatch({ type: REGISTER_FAIL });
				message.error('Error');
			});
	};
};

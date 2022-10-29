
import axios from 'axios';


// const baseURL = 'http://127.0.0.1:8000/';
const baseURL= process.env.REACT_APP_BASE_BACKEND_URL;

export function registerPost(email, user_name, password ,password2) {
    return axios
			.post(baseURL+"auth/register/", {
				email: email,
				user_name: user_name,
				password: password,
				password2: password2,
			});
};
export function socialRegisterPost(email, user_name) {
    return axios
			.post(baseURL+"auth/social-register/", {
				email: email,
				user_name: user_name,
			});
};
export function loginGet(email, password) {
    return axios
			.get(baseURL+"auth/", {
				params: {
					email: email,
					password: password
				}
			  });
};
export function socialLoginGet(email) {
    return axios
			.get(baseURL+"auth/social-login/", {
				params: {
					email: email,
				}
			  });
};
export function logoutAxios(email) {
    return axios
			.post(baseURL+"auth/logout/"+email, {});
};
export function naverRegisterGetUserInfo(token) {
    return  axios
			.post(baseURL+"auth/naver-register/", {
				token: token,
			});
};
export function naverLoginGetUserInfo(token) {
    return axios
			.get(baseURL+"auth/naver-login/", {
				params: {
					token: token,
				}
			  });
};

const api = 'https://node-mysql-test.onrender.com';

const userName = document.querySelector('.userName');

const getUser = () => {
	const token = document.cookie.split(`jwt=`).pop();
	let user = {};
	axios({
		method: 'GET',
		url: `${api}/api/users`,
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
		.then((res) => {
			user = res.data.data;
			userName.innerHTML = user.name;
		})
		.catch((err) => {
			if (err.response.data.message === '您尚未登入') {
				alert('您尚未登入');
				// window.location = '../../login.html';
				location.href = 'https://yosontw21.github.io/client-test/login.html';
			}
		});
};

getUser();

const logoutBtn = document.querySelector('.logoutBtn');

logoutBtn.addEventListener('click', (e) => {
	axios({
		method: 'POST',
		url: `${api}/api/users/logout`,
		withCredentials: true
	})
		.then((res) => {
			document.cookie = `jwt=; path=/client-test`;
			alert('成功登出');

			location.href = 'https://yosontw21.github.io/client-test/login.html';
		})
		.catch((err) => {
			console.log(err);
		});
});
const api = 'https://node-mysql-test.onrender.com';

const loginBtn = document.querySelector('.loginBtn');

loginBtn.addEventListener('click', (e) => {
	const email = document.querySelector('.loginEmail').value;
	const password = document.querySelector('.loginPwd').value;
	let obj = {
		email,
		password
	};
	axios({
		method: 'POST',
		url: `${api}/api/users/login`,
		data: obj
	})
		.then((res) => {
			const token = res.data.token;
			document.cookie = `jwt=${token};`;
			if (res.data.status === 'success') {
				alert('登入成功');
				// window.location = '../../index.html';
				location.href = 'https://yosontw21.github.io/client-test/index.html';
			}
		})
		.catch((err) => {
			alert(err.response.data.message);
		});
});



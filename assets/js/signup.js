const api = 'https://node-mysql-test.onrender.com';

const signupBtn = document.querySelector('.signupBtn');
signupBtn.addEventListener('click', (e) => {
	const email = document.querySelector('.signupEmail').value;
	const name = document.querySelector('.signupName').value;
	const password = document.querySelector('.signupPwd').value;
	const passwordConfirm = document.querySelector('.signupPwdConfirm').value;

	let obj = {
		email,
		name,
		password,
		passwordConfirm
	};

	axios({
		method: 'POST',
		url: `${api}/api/users/signup`,
		data: obj
	})
		.then((res) => {
			const token = res.data.token;
			document.cookie = `jwt=${token};`;
			if (res.data.status === 'success') {
				alert('註冊成功!! 請重新登入，點擊確定跳轉登入畫面');
				// window.location = '../../login.html';
				location.href = 'https://yosontw21.github.io/client-test/index.html';
			}
		})
		.catch((err) => {
			alert(err.response.data.message);
			console.log(err);
		});
});

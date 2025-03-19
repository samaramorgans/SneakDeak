async function login(username, password) {
    try {
        const response = await fetch('http://26.91.8.72:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Авторизация успешна:', data);

            localStorage.setItem('username', username);
            window.location.href = 'welcome.html';
        } else {
            const errorData = await response.json();
            console.error('Ошибка авторизации:', errorData.message);
            alert('Неверное имя пользователя или пароль');
            window.location.href = 'login.html';
        }
    } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
        alert('Ошибка при подключении к серверу');
        window.location.href = 'login.html';
    }
}

const username = localStorage.getItem('username');
const password = localStorage.getItem('password');

if (username && password) {
    login(username, password);
} else {
    alert('Данные для входа отсутствуют');
    window.location.href = 'login.html';
}
const username = localStorage.getItem('username');

document.title = `SneakDeak - ${username}`;
document.getElementById('username').textContent = username;

function toggleMenu() {
    const menuDropdown = document.getElementById('menuDropdown');
    menuDropdown.style.display = menuDropdown.style.display === 'block' ? 'none' : 'block';
}

function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    window.location.href = 'login.html';
}

const modal = document.getElementById('confirmationModal');
const confirmSignOut = document.getElementById('confirmSignOut');
const cancelSignOut = document.getElementById('cancelSignOut');
const signOutLink = document.getElementById('signOutLink'); 

signOutLink.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = 'block';
});

confirmSignOut.addEventListener('click', function() {
    modal.style.display = 'none';
    logout();
});

cancelSignOut.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

function openSettingsModal() {
    var modal = document.getElementById("settingsModal");
    modal.style.display = "block";
}

function closeSettingsModal() {
    var modal = document.getElementById("settingsModal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("settingsModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("General").style.display = "block";
document.getElementsByClassName("tablink")[0].className += " active";

function connectToServer() {
    const connectionType = document.getElementById('connectionType').value;
    const host = document.querySelector('#Connections input[placeholder="Host"]').value;
    const port = document.querySelector('#Connections input[placeholder="Port"]').value;

    const url = `${connectionType.toLowerCase()}://${host}:${port}`;

    fetch(url)
        .then(response => {
            if (response.ok) {
                alert('Успешное подключение к серверу!');
            } else {
                alert('Ошибка при подключении к серверу.');
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Не удалось подключиться к серверу.');
        });
}

document.getElementById('connectButton').addEventListener('click', connectToServer);
function connectToServer() {
    const connectionType = document.getElementById('connectionType').value;
    const host = document.querySelector('#Connections input[placeholder="Host"]').value;
    const port = document.querySelector('#Connections input[placeholder="Port"]').value;

    if (!host || !port) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    const url = `${connectionType.toLowerCase()}://${host}:${port}`;

    fetch(url)
        .then(response => {
            if (response.ok) {
                alert('Успешное подключение к серверу!');
            } else {
                alert('Ошибка при подключении к серверу.');
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Не удалось подключиться к серверу.');
        });
}
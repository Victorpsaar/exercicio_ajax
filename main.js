document.addEventListener('DOMContentLoaded', function() {

    fetch('https://api.github.com/users/Victorpsaar')
    .then((response) => {
        if (response.ok) {
            return response.json()
        }
        throw new Error ('Algo está errado, tente novamente mais tarde!')
    }).then((response) => {
        profile = {
            avatar: document.querySelector('#avatar').src = response.avatar_url,
            name: document.querySelector('#name').innerText = response.name,
            user: document.querySelector('#user').innerText = '@' + response.login,
            repository: document.querySelector('#repository').innerText = response.public_repos,
            followers: document.querySelector('#followers').innerText = response.followers,
            follow: document.querySelector('#follow').innerText = response.following,
            link: document.querySelector('#link').href = response.html_url
        }
    }).catch((error) => {
        alert(error)
    })
})
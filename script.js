const url = 'https://jsonplaceholder.typicode.com/users';

function loadJSON() {
    fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        let result = `<h2> User Info From JSONPlaceHolder </h2>`;
        data.forEach((user) => {
            const { id, name, email } = user
            result +=
            `<div>
                <h5> User ID: ${id} </h5>
                <ul class="w3-ul">
                    <li> User Name : ${name}</li>
                    <li> User Email: ${email} </li>
                </ul>
            </div>`;

            document.getElementById('result').innerHTML = result;
        });
       })
}

document.getElementById('button').addEventListener('click', loadJSON);
const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
        .then(response => {
            apiResult.textContent = JSON.stringify(response.data)

        })
        .catch(error => console.error(error))
}

function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data
        userID.textContent = data.id
        userName.textContent = data.name
        userCity.textContent = data.city

        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))

}

function addNewUser(newUser) {
    axios.post(url, newUser)
        .then(response => {
            console.log(response)
        })
        .catch(error => console.error(error))
}

function updateUser(id, newUser){
    axios.put(`${url}/${id}`, newUser)
    .then( response => console.log(response))
    .catch(error => console.error(error))
}

function deleteUser(id){
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const newUser = {
    name: "Thiago Silva",
    avatar: "https://s2-ge.glbimg.com/Tmm2cPePsBhPKa2Zbro0qsXzwTc=/0x0:138x2048/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/5/q/VfDsk4Sies5LpBGy7ehw/fvz2jyqxwaep0va.jpeg",
    city: "Rio de Janeiro"
}

// updateUser(3, newUser)
getUser(2)
getUsers()
// addNewUser(newUser)
// deleteUser(12)
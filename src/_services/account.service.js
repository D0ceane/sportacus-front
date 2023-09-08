// Méthode qui permet de sauvegarder le token
let saveToken = (token) => {
    localStorage.setItem('token', token)
}

// Méthode qui permet de supprimer le token
let logout = () => {
    localStorage.removeItem('token')
}

// Méthode qui permet de savoir si l'utilisateur est connecté
let isLogged = () => {
    let token = localStorage.getItem('token')

    //le double not permet de transformer n'importe qu'elle variable en booléen, ainsi si je n'ai pas de token (null), il renverra 'false'
    return !!token
}

export const accountService ={
    saveToken, logout, isLogged
}
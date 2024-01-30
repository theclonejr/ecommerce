import axios from "axios"

const useAuth = () => {
  
    const registerUser = (user) =>{
        const url = 'https://ecommerce-backend-c62e.onrender.com/users'
        axios.post(url, user)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    const loginUser = (credentials) => {
        const url = 'https://ecommerce-backend-c62e.onrender.com/users/login'
        axios.post(url, credentials)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token)
            })
            .catch(err => console.log(err))
    }
    
    return { registerUser, loginUser }
}

export default useAuth
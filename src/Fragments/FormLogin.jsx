import ButtonComponent from "../Elements/Button"
import InputForm from "../Elements/InputFrom"

const FormLogin = () => {
    // const handleClick = (e) => {
    //     e.preventDefault()
    //     console.log('Klik')
    // }

    const [loginFailed, setLoginFailed] = useState('')
    const handleLogin = (e) => {
        e.preventDefault() //mencegah reload halaman
        const data = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        login(data, (status, res) => {
            if (status) {
                localStorage.setItem('token', res)
                window.location.href = '/product'
            } else {
                setLoginFailed(res.response.data)
                console.log(res.response.data)
            }
        })
    }

    return (
        <form onSubmit={handleLogin}>
            <InputForm
                typeInput="text"
                placeholderInput="example@gmail.com"
                nameInput="username"
                judulInput="Username"
            />
            <InputForm
                typeInput="Password"
                placeholderInput="****"
                nameInput="Password"
                judulInput="Password"
            />
            <ButtonComponent classname="bg-blue-500 w-full" type="submit">Login</ButtonComponent>
            {loginFailed && <p className='text-red-500 text-center mt-5'>{loginFailed}</p>}
        </form>
    )
}

export default FormLogin
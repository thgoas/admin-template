import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconWarn } from "../components/icons";
import useAuth from "../data/hook/useAuth";

export default function Auth() {

    const { register, login, loginGoogle } = useAuth()

    const [erro, setErro] = useState(null)
    const [mode, setMode] = useState<'login' | 'register'>('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit() {
        try {
            if(mode === 'login'){
                await login(email, password)
                handleErro('erro no login')
            }else{
                register(email, password)
                handleErro('erro no cadastro')
            }
        }catch(e){
            handleErro  (e?.message ?? 'Erro desconhecido!')
        }
    }

    function handleErro(erro: string, time = 5 ){
        setErro(erro)
        setTimeout(() => {
           setErro(null) 
        }, time * 1000);
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="hidden md:block md:w-1/2 lg:w-2/3">
                <img 
                    src="https://source.unsplash.com/random"
                    alt="" 
                    className="h-screen w-full object-cover"/>
            </div>
            <div className="m-10 w-full md:w-1/2 lg:w-1/3">
                <h1 className={`
                    text-3xl font-bold mb-5
                `}>
                    {mode === 'login' ? 'Entre com a Sua Conta' : 'Cadastre-se na Plataforma' }
                </h1>

                {erro ? (
                    <div className={`
                        flex items-center
                        bg-red-400 text-white py-3 px-5 my-2
                        border border-red-700 rounded-lg
                    `}>
                        {IconWarn()}
                    <span className="ml-3">{erro}</span>
                    </div>
                ): false}

                

                <AuthInput
                    label="Email"
                    value={email}
                    changedValue={setEmail}
                    type="text"
                />
                <AuthInput
                    label="Senha"
                    value={password}
                    changedValue={setPassword}
                    type="password"
                />
                <button onClick={handleSubmit} className={`
                    w-full bg-indigo-500 hover:bg-indigo-400
                    text-white rounded-lg px-4 py-3 mt-6
                `}>
                    {mode === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>

                <hr className="my-6 border-gray-300 w-full" />

                <button onClick={loginGoogle} className={`
                    w-full bg-red-500 hover:bg-red-400
                    text-white rounded-lg px-4 py-3
                `}>
                    'Entrar com Google'
                </button>

                {mode === 'login' ? (
                    <p className="mt-8">
                        Novo por aqui?
                        <a onClick={() => setMode('register')} className={`
                            text-blue-500 hover:text-blue-700 font-semibold
                            cursor-pointer
                        `}> Crie uma Conta Gratuitamente</a>
                    </p>
                ):(
                    <p className="mt-8">
                        Já faz parte da nossa comunidade?
                        <a onClick={() => setMode('login')} className={`
                            text-blue-500 hover:text-blue-700 font-semibold
                            cursor-pointer
                        `}> Entre com suas Credenciais</a>
                    </p>
                )}
            </div>
        </div>    
    )
}
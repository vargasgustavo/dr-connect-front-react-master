import React from 'react'
import '../css/loginstyle.css'

const Login = () => {
    return (
        <div>
            <div class="main-login">
                <div class="left-login">
                    <h1>Junte-se à nossa organização</h1>
                    <img src="../Imagens/doctor.svg" class="left-login-image" alt=''/>
                </div>
                <div class="right-login">
                    <div class="card-login">
                        <div class="title-a">
                            <a>Bem Vindo(a) ao</a>
                        </div>
                        <div class="title">
                            <img src="../Imagens/logo-card-login.svg" class="title-image" alt=''/>
                        </div>
                        <div class="textfield">
                            <label for="usuario">E-mail</label>
                            <input type="text" name="usuario" placeholder="Usuário" required/>
                        </div>
                        <div class="textfield">
                            <label for="senha">Senha</label>
                            <input type="password" name="senha" placeholder="Senha" required/>
                        </div>
                        <div class="forget">
                            <a>Esqueceu a senha?</a>
                        </div>
                        <button class="btn-login trasitionButton">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
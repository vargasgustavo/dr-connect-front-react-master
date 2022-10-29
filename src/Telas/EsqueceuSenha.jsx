import React from 'react'
import '../css/Esqueceu_Senha.css'

const EsqueceuSenha = () => {
    return (
        <div>
            <div class="right-esqueceusenha">
                <div class="card-esqueceusenha">
                    <div class="title">
                        <h1>ESQUECEU A SENHA?</h1>
                    </div>
                    <br />
                    <br />
                    <div class="textfield">
                        <label>Digite o e-mail cadastrado: </label>
                        <br />
                        <input type="email" name="email" placeholder="E-mail" required />
                    </div>
                    <button class="btn-password trasitionButton">ENVIAR SENHA</button>
                </div>
            </div>
        </div>
    )
}

export default EsqueceuSenha
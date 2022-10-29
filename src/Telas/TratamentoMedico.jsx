import React from 'react'
import '../css/tratamento.css'

const TratamentoMedico = () => {
    return (
        <div>
            <div class="main">
                <div class="header">
                    <div class="logo">
                        <img src="../Imagens/logo.svg" class="logo-image" />
                    </div>
                    <div class="menu">
                        <nav>
                            <ul>
                                <li><a>Quem somos?</a></li>
                                <li><a>Nossos serviços</a></li>
                                <li><a>Cadastre-se</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="body-body">
                    <div class="title">
                        <h1 class="sub">
                            Tratamento
                        </h1>
                    </div>
                    <div class="init-trat">
                        <button>
                            Iniciar Tratamento
                        </button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-main-one">
                        <div class="date">
                            <div class="date-time">
                                <p><strong>Data da consulta:</strong> 22/09/2022</p>
                            </div>
                            <div class="hour-time">
                                <p><strong>Horário:</strong> 14:30</p>
                            </div>
                        </div>
                        <div class="patient">
                            <div class="name-patient">
                                <p><strong>Paciente:</strong> Isadora Souza Ribeiro</p>
                            </div>
                            <div class="dn">
                                <p><strong>DN:</strong> 22/09/1975</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-main-two">
                        <div class="param-title">
                            <h2>Definir parâmetros do tratamento:</h2>
                        </div>
                        <div class="param-one">
                            <div class="pharam-one">
                                <strong>Data Início:</strong> 22/09/2022
                            </div>
                            <div class="pharam-two">
                                <strong>Objetivo:</strong> Perda de Peso
                            </div>
                        </div>
                        <div class="param-two">
                            <div class="pharam-three">
                                <strong>Data Término:</strong> 22/12/2022
                            </div>
                            <div class="pharam-four"></div>
                        </div>
                    </div>
                    <div class="card-main-three">
                        <div class="into-title">
                            Instruções para o Paciente:
                        </div>
                        <div class="desc-patient">
                            Anotar peso toda semana, tanto ganhos como perdas.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TratamentoMedico
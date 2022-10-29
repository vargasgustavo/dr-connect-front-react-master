import React from 'react'
import '../css/tratamentoPacient.css'

const TratamentoPaciente = () => {
    return (
        <div>
            <div class="main">
                <div class="header">
                    <div class="left-text-header">
                        <div class="top-left-header">
                            <p>Profissional Responsável: Dr Marcelo de Souza</p>
                        </div>
                        <div class="bottom-left-header">
                            <p>Especialidade: Endocrinologia</p>
                        </div>
                    </div>
                    <div class="right-text-header">
                        <img src="../Imagens/voltar.svg" alt="back" />
                        <p>Voltar</p>
                    </div>
                </div>
                <div class="body">
                    <div class="card-header-body">
                        <div class="left-card">
                            <p><strong>Data Início</strong>: 22/09/2022</p>
                            <p><strong>Data Término</strong>: 22/12/2022</p>
                            <p><strong>Objetivo</strong>: Perda de Peso</p>
                        </div>
                        <div class="right-card">
                            <h1>Instruções para o paciente: </h1>
                            <p>Anotar peso toda semana, tanto ganhos como perdas</p>
                        </div>
                    </div>
                    <div class="date">
                        <div class="header-date">
                            <h2>Adicione seus sintomas e/ou medições</h2>
                        </div>
                        <div class="buttons-date">
                            <button class="trasitionButton">Selecionar Data</button>
                            <button class="trasitionButton">Selecionar Horário</button>
                        </div>
                    </div>
                    <div class="information">
                        <div class="button-left">
                            <button class="trasitionButton"> Tipo de Informação </button>
                        </div>
                        <div class="text-right">
                            <textarea placeholder="Adicionar Informações"></textarea>
                        </div>
                    </div>
                    <div class="observation">
                        <textarea placeholder="Deseja Adicionar alguma Informação?"></textarea>
                    </div>
                    <div class="buttons-confirm">
                        <button class="cancel trasitionButton">Cancelar</button>
                        <button class="confirm trasitionButton">Confirmar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TratamentoPaciente
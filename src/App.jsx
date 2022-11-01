import React from 'react'
import { Outlet, Routes, Route } from 'react-router-dom';
import CadastroMain from './Telas/CadastroMain';
import Header from './Telas/Header';
import HomeMain from './Telas/HomeMain';
import SobreNos from './Telas/SobreNos';
import Login from './Telas/Login';
import Agendamento from './Telas/Agendamento';
import TratamentoPaciente from './Telas/TratamentoPaciente';
import TratamentoMedico from './Telas/TratamentoMedico';
import Filtro from './Telas/Filtro'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/busca' element={<><Filtro/></>}/>
        <Route path='/' element={<><HomeMain /></>} />
        <Route path='/nossos-servicos' element={<><SobreNos /></>} />
        <Route path='/cadastrese' element={<><CadastroMain /></>} />
        <Route path='/login' element={<><Login/></>}/>
        <Route path='/agendamento' element={<><Agendamento/></>}/>
        <Route path='/tratamento-paciente' element={<><TratamentoPaciente/></>}/>
        <Route path='/tratamento-medico' element={<><TratamentoMedico/></>}/>
      </Routes>
      <Outlet />
    </>
  )
}

export default App
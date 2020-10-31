import React from 'react'
import './App.css'
import logo from './images/logo.png'
import Form, { FormData } from './components/form/Form'
import QueryService from './services/QueryService'

export default function App() {
  const handleInfoPet = (data: FormData) => {
    QueryService.getPetInfo(data)
  }

  const handleHistPet = (data: FormData) => {
    QueryService.getPetRecords(data)
  }

  const handleNroConsultasPet = (data: FormData) => {
    QueryService.getPetAppointmentsByClientAndDate(data)
  }

  const handleClientesPorEspecieDePet = (data: FormData) => {
    QueryService.getClienByPet(data)
  }
  
  const handleTotalGasto = (data: FormData) => {
    QueryService.getTotalSpentByClient(data)
  }

  const handleGastoAcimaDaMedia = (data: FormData) => {
    QueryService.getClientsWihSpendingAboveAverage(data)
  }

  const handleClientesSemEntrega = (data: FormData) => {
    QueryService.getClientsWithNoDelivers(data)
  }

  const handleConsultasPorData = (data: FormData) => {
    QueryService.getAppointmentsByDate(data)
  }

  const handleTratamentosPorData = (data: FormData) => {
    QueryService.getTreatmentsByDate(data)
  }

  const handlePedidoInfo = (data: FormData) => {
    QueryService.getOrderInfo(data)
  }

  const handlePedidosAEntregar = (data: FormData) => {
    QueryService.getDeliversNotDelivered(data)
  }

  const handleEntregasPorEntregador = (data: FormData) => {
    QueryService.getDelivermanDelivers(data)
  }
  
  const handleHorariosDisponiveis = (data: FormData) => {
    QueryService.getAvailableStaff(data)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} height={'100px'}/>
      </header>
      <main>
        <p>01 - Informações sobre um pet</p>
        <Form hasNome hasCpf onSubmit={handleInfoPet}/>

        <p>02 - Histórico de exames e receitas de um determinado pet</p>
        <Form hasNome hasCpf onSubmit={handleHistPet} />

        <p>03 - Número de consultas dos Pets de um determinado cliente a partir de uma determinada data</p>
        <Form hasCpf hasData onSubmit={handleNroConsultasPet} />

        <p>04 - Clientes que possuem pelo menos um pet de determinada espécie</p>
        <Form hasNome onSubmit={handleClientesPorEspecieDePet} />

        <p>05 - Valor total gasto por cliente</p>
        <Form  onSubmit={handleTotalGasto} />

        <p>06 - Clientes que gastaram um valor total acima da média geral</p>
        <Form onSubmit={handleGastoAcimaDaMedia}/>

        <p>07 - Clientes que nunca usaram entrega</p>
        <Form onSubmit={handleClientesSemEntrega}/>

        <p>08 - Consultas realizadas em determinada data</p>
        <Form hasData onSubmit={handleConsultasPorData} />

        <p>09 - Tratamentos realizados em determinada data</p>
        <Form hasData onSubmit={handleTratamentosPorData} />
        
        <p>10 - Informações sobre determinado pedido</p>
        <Form hasPedido onSubmit={handlePedidoInfo}/>

        <p>11 - Pedidos que ainda devem ser entregues</p>
        <Form onSubmit={handlePedidosAEntregar}/>
        
        <p>12 - Entregas feitas por um determinado entregador</p>
        <Form hasCpf onSubmit={handleEntregasPorEntregador}/>

        <p>13 - Funcionários disponí­veis em um determinado horário</p>
        <Form hasData hasHora onSubmit={handleHorariosDisponiveis}/>
      </main>
    </div>
  );
}
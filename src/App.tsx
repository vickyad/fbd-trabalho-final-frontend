import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import logo from './images/logo.png'
import Form, { FormData } from './components/form'
import QueryService from './services/QueryService'
import Table from './components/table'

export default function App() {
  const [objList, setObjList] = useState<object[] | undefined>()
  const tableBoxRef = useRef<any>()

  useEffect(() => {
    if (objList && objList.length > 0) {
      tableBoxRef.current.scrollIntoView()
    }
  })

  const handleInfoPet = async (data: FormData) => {
    const response = await QueryService.getPetInfo(data)
    setObjList(response)
  }

  const handleHistPet = async (data: FormData) => {
    const response = await QueryService.getPetRecords(data)
    setObjList(response)
  }

  const handleNroConsultasPet = async (data: FormData) => {
    const response = await QueryService.getPetAppointmentsByClientAndDate(data)
    setObjList(response)
  }

  const handleClientesPorEspecieDePet = async (data: FormData) => {
    const response = await QueryService.getClienByPet(data)
    setObjList(response)
  }
  
  const handleTotalGasto = async (data: FormData) => {
    const response = await QueryService.getTotalSpentByClient(data)
    setObjList(response)
  }

  const handleGastoAcimaDaMedia = async (data: FormData) => {
    const response = await QueryService.getClientsWihSpendingAboveAverage(data)
    setObjList(response)
  }

  const handleClientesSemEntrega = async (data: FormData) => {
    const response = await QueryService.getClientsWithNoDelivers(data)
    setObjList(response)
  }

  const handleConsultasPorData = async (data: FormData) => {
    const response = await QueryService.getAppointmentsByDate(data)
    setObjList(response)
  }

  const handleTratamentosPorData = async (data: FormData) => {
    const response = await QueryService.getTreatmentsByDate(data)
    setObjList(response)
  }

  const handlePedidoInfo = async (data: FormData) => {
    const response = await QueryService.getOrderInfo(data)
    setObjList(response)
  }

  const handlePedidosAEntregar = async (data: FormData) => {
    const response = await QueryService.getDeliversNotDelivered(data)
    setObjList(response)
  }

  const handleEntregasPorEntregador = async (data: FormData) => {
    const response = await QueryService.getDelivermanDelivers(data)
    setObjList(response)
  }
  
  const handleHorariosDisponiveis = async (data: FormData) => {
    const response = await QueryService.getAvailableStaff(data)
    setObjList(response)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} height={'100px'} alt="Focinhos & Presas"/>
      </header>
      <main>
        <p>01 - Informações sobre um pet</p>
        <Form nomeLabel='Nome do Pet: ' cpfLabel='CPF do responsável: ' onSubmit={handleInfoPet}/>

        <p>02 - Histórico de exames e receitas de um determinado pet</p>
        <Form nomeLabel='Nome do Pet: ' cpfLabel='CPF do responsável: ' onSubmit={handleHistPet} />

        <p>03 - Número de consultas dos Pets de um determinado cliente a partir de uma determinada data</p>
        <Form cpfLabel='CPF do responsável: ' dataLabel='Data: ' onSubmit={handleNroConsultasPet} />

        <p>04 - Clientes que possuem pelo menos um pet de determinada espécie</p>
        <Form nomeLabel='Nome da espécie: ' onSubmit={handleClientesPorEspecieDePet} />

        <p>05 - Valor total gasto por cliente</p>
        <Form  onSubmit={handleTotalGasto} />

        <p>06 - Clientes que gastaram um valor total acima da média geral</p>
        <Form onSubmit={handleGastoAcimaDaMedia}/>

        <p>07 - Clientes que nunca usaram entrega</p>
        <Form onSubmit={handleClientesSemEntrega}/>

        <p>08 - Consultas realizadas em determinada data</p>
        <Form dataLabel='Data: ' onSubmit={handleConsultasPorData} />

        <p>09 - Tratamentos realizados em determinada data</p>
        <Form dataLabel='Data: ' onSubmit={handleTratamentosPorData} />
        
        <p>10 - Informações sobre determinado pedido</p>
        <Form pedidoLabel='Número do Pedido: ' onSubmit={handlePedidoInfo}/>

        <p>11 - Pedidos que ainda devem ser entregues</p>
        <Form onSubmit={handlePedidosAEntregar}/>
        
        <p>12 - Entregas feitas por um determinado entregador</p>
        <Form cpfLabel='CPF funcionário(a): ' onSubmit={handleEntregasPorEntregador}/>

        <p>13 - Funcionários disponí­veis em um determinado horário</p>
        <Form dataLabel='Data: ' horaLabel='Hora: ' onSubmit={handleHorariosDisponiveis}/>
        <div id='table-box' className='table-box' ref={tableBoxRef} >
          {objList &&
            <Table objList={objList} />
          }
        </div>
      </main>
    </div>
  );
}
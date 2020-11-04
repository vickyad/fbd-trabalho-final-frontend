import React, { useState } from 'react'
import './styles.css'

interface FormProps {
  onSubmit: (data: FormData) => void
  nomeLabel?: string
  cpfLabel?: string
  pedidoLabel?: string
  dataLabel?: string
  horaLabel?: string
}

export interface FormData {
  nome: string | undefined
  cpf: number | undefined
  pedido: number | undefined
  data: string | undefined
  hora: string | undefined
}

const Form: React.FC<FormProps> = ({
  onSubmit,
  cpfLabel,
  horaLabel,
  dataLabel,
  nomeLabel,
  pedidoLabel
}) => {
  const [showing, setShowing] = useState<boolean>(false)
  const [nome, setNome] = useState<string | undefined>()
  const [cpf, setCpf] = useState<number | undefined>()
  const [pedido, setPedido] = useState<number | undefined>()
  const [data, setData] = useState<string | undefined>()
  const [hora, setHora] = useState<string | undefined>()

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value)
  }

  const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(parseInt(event.target.value))
  }

  const handlePedidoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPedido(parseInt(event.target.value))
  }

  const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData(event.target.value)
  }

  const handleHoraChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHora(event.target.value)
  }

  const handleCancel = () => {
    setShowing(false)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    onSubmit({
      cpf: cpf,
      data: data,
      hora: hora,
      nome: nome,
      pedido: pedido
    })
    cleanFields()
    setShowing(false)
  }

  const handleShowing = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setShowing(!showing)
  }

  const cleanFields = () => {
    setNome(undefined)
    setCpf(undefined)
    setPedido(undefined)
    setData(undefined)
    setHora(undefined)
  }

  const renderForm = (): JSX.Element => (
    <form onSubmit={handleSubmit}>
      {nomeLabel &&
        <label>
        {nomeLabel}
          <input required type="text" name={nomeLabel} value={nome} onChange={handleNameChange} />
        </label>
      }
      {cpfLabel &&
        <label>
        {cpfLabel} 
          <input required type="number" name={cpfLabel} value={cpf} onChange={handleCpfChange} />
        </label>
      }
      {pedidoLabel &&
        <label>
        {pedidoLabel}
          <input required type="number" name={pedidoLabel} value={pedido} onChange={handlePedidoChange} />
        </label>
      }
      {dataLabel &&
        <label>
        {dataLabel} 
          <input required type="date" name={dataLabel} value={data} onChange={handleDataChange} />
        </label>
      }
      {horaLabel &&
        <label>
        {horaLabel}
          <input required type="time" name={horaLabel} value={hora} onChange={handleHoraChange} />
        </label>
      }
      <button className="form__button close" onClick={handleCancel}>Cancelar</button>
      <input className="form__button" type="submit" value="Enviar" />
    </form>
  )

  const renderControlButton = (): JSX.Element => (
    <button className="selectQuery__button" onClick={handleShowing}>Realizar essa consulta</button>
  )

  return (
    <div className="form">
      {showing ? renderForm() : renderControlButton()}
    </div>
  )
}

export default Form
import React, { useState } from 'react'
import './styles.css'

interface FormProps {
  onSubmit: (data: FormData) => void
  hasNome?: boolean
  hasCpf?: boolean
  hasPedido?: boolean
  hasData?: boolean
  hasHora?: boolean
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
  hasCpf,
  hasData,
  hasNome,
  hasPedido,
  hasHora
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
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
      {hasNome &&
        <label>
          Nome:
          <input required type="text" name="nome" value={nome} onChange={handleNameChange} />
        </label>
      }
      {hasCpf &&
        <label>
          CPF: 
          <input required type="number" name="cpf" value={cpf} onChange={handleCpfChange} />
        </label>
      }
      {hasPedido &&
        <label>
          Nro do Pedido: 
          <input required type="number" name="nroP" value={pedido} onChange={handlePedidoChange} />
        </label>
      }
      {hasData &&
        <label>
          Data: 
          <input required type="date" name="data" value={data} onChange={handleDataChange} />
        </label>
      }
      {hasHora &&
        <label>
          Hora: 
          <input required type="time" name="data" value={hora} onChange={handleHoraChange} />
        </label>
      }
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
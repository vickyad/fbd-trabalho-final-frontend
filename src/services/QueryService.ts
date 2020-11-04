import { FormData } from '../components/form'
import superagent from 'superagent'

class QueryService {
    BASE_URL = 'http://localhost:5000/query/'

    getPetInfo = async (data: FormData): Promise<object[]> => {
        try {
            const res = await superagent.get(this.BASE_URL + 'pet_info/').query({
                nomePet: data.nome,
                cpf: data.cpf
            })
            return res.body
        } catch (err) {
            console.error(err)
        }
        return []
    }

    getClienByPet = async (data: FormData): Promise<object[]> => {
        try {
            const res = await superagent.get(this.BASE_URL + 'client_by_pet/').query({
                nomeEspecie: data.nome
            })
            return res.body
        } catch (err) {
             console.error(err)
        }

        return []
    }

    getAvailableStaff = async (data: FormData): Promise<object[]> => {
        try {
            const res = await superagent.get(this.BASE_URL + 'available_staff/').query({
                dateTime: data.data + 'T' + data.hora + ':00.000-03:00'
            })
            return res.body
        } catch (err) {
             console.error(err)
        }

        return []
    }

    getClientsWihSpendingAboveAverage = async (data: FormData): Promise<object[]> => {
        try {
            const res = await superagent.get(this.BASE_URL + 'clients_with_speding_above_average/')
            return res.body
        } catch (err) {
             console.error(err)
        }

        return []
    }

    getClientsWithNoDelivers = async (data: FormData): Promise<object[]> => {
        try {
            const res = await superagent.get(this.BASE_URL + 'clients_with_no_delivers/')
            return res.body
        } catch (err) {
            console.error(err)
        }

        return []
    }  

    getPetAppointmentsByClientAndDate = async (data: FormData): Promise<object[]> => {
        try {
            const res = await superagent.get(this.BASE_URL + 'pet_appointments_by_client_and_date/').query({
                date: data.data,
                cpf: data.cpf
            })
            return res.body
        } catch (err) {
            console.error(err)
        }

        return []
    }  

    getTotalSpentByClient = async (data: FormData): Promise<object[]> => {
        try {
            const res = await superagent.get(this.BASE_URL + 'total_spent_by_client/')

            return res.body
        } catch (err) {
            console.error(err)
        }
        
        return []
    } 

    getOrderInfo = async (data: FormData): Promise<object[]> => {
        try {
            const res = await superagent.get(this.BASE_URL + 'order_info/').query({
                nroPedido: data.pedido
            })

            return res.body
        } catch (err) {
            console.error(err)
        }

        return []
    } 

    getPetRecords = async (data: FormData): Promise<object[]> => {
        try {
            const res = await superagent.get(this.BASE_URL + 'pet_records/').query({
                nomePet: data.nome,
                cpf: data.cpf
            })

            return res.body
        } catch (err) {
            console.error(err)
        }

        return []
    }
      
    getDeliversNotDelivered = async (data: FormData): Promise<object[]> => {
        try {
            const res = await superagent.get(this.BASE_URL + 'delivers_not_delivered/')

            return res.body
        } catch (err) {
            console.error(err)
        }

        return []
    }

    getTreatmentsByDate = async (data: FormData): Promise<object[]> => {
        try {
            const res = await superagent.get(this.BASE_URL + 'treatments_by_date/').query({
                date: data.data
            })
            
            return res.body
        } catch (err) {
            console.error(err)
        }

        return []
    } 

    getAppointmentsByDate = async (data: FormData): Promise<object[]> => {
        try {
            const res = await superagent.get(this.BASE_URL + 'appointments_by_date/').query({
                date: data.data
            })
            
            return res.body
        } catch (err) {
            console.error(err)
        }

        return []
    } 
    
    getDelivermanDelivers = async (data: FormData): Promise<object[]> => {
        try {
            const res = await superagent.get(this.BASE_URL + 'deliverman_delivers/').query({
                cpfFuncionario: data.cpf
            })
            
            return res.body
        } catch (err) {
             console.error(err)
        }

        return []
    } 
}

export default new QueryService()
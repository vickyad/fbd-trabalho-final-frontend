import { FormData } from '../components/Form'
import superagent from 'superagent'

class QueryService {
    BASE_URL = 'http://localhost:5000/query/'

    getPetInfo = async (data: FormData) => {
        try {
            const res = await superagent.get(this.BASE_URL + 'pet_info/').query({
                nomePet: data.nome,
                cpf: data.cpf
            })
            console.log(res)
        } catch (err) {
             console.error(err)
        }
    }

    getClienByPet = async (data: FormData) => {
        try {
            const res = await superagent.get(this.BASE_URL + 'client_by_pet/').query({
                nomeEspecie: data.nome
            })
            console.log(res)
        } catch (err) {
             console.error(err)
        }
    }

    getAvailableStaff = async (data: FormData) => {
        try {
            const res = await superagent.get(this.BASE_URL + 'available_staff/').query({
                dateTime: data.data + 'T' + data.hora + '.000-03:00'
            })
            console.log(res)
        } catch (err) {
             console.error(err)
        }
    }

    getClientsWihSpendingAboveAverage = async (data: FormData) => {
        try {
            const res = await superagent.get(this.BASE_URL + 'clients_with_speding_above_average/')
            console.log(res)
        } catch (err) {
             console.error(err)
        }
    }

    getClientsWithNoDelivers = async (data: FormData) => {
        try {
            const res = await superagent.get(this.BASE_URL + 'clients_with_no_delivers/')
            console.log(res)
        } catch (err) {
            console.error(err)
        }
    }  

    getPetAppointmentsByClientAndDate = async (data: FormData) => {
        try {
            const res = await superagent.get(this.BASE_URL + 'pet_appointments_by_client_and_date/').query({
                date: data.data,
                cpf: data.cpf
            })
            console.log(res)
        } catch (err) {
            console.error(err)
        }
    }  

    getTotalSpentByClient = async (data: FormData) => {
        try {
            const res = await superagent.get(this.BASE_URL + 'total_spent_by_client/')
            console.log(res)
        } catch (err) {
            console.error(err)
        }
    } 

    getOrderInfo = async (data: FormData) => {
        try {
            const res = await superagent.get(this.BASE_URL + 'order_info/').query({
                nroPedido: data.pedido
            })
            console.log(res)
        } catch (err) {
            console.error(err)
        }
    } 

    getPetRecords = async (data: FormData) => {
        try {
            const res = await superagent.get(this.BASE_URL + 'pet_records/').query({
                nomePet: data.nome,
                cpf: data.cpf
            })
            console.log(res)
        } catch (err) {
            console.error(err)
        }
    }
      
    getDeliversNotDelivered = async (data: FormData) => {
        try {
            const res = await superagent.get(this.BASE_URL + 'delivers_not_delivered/')
            console.log(res)
        } catch (err) {
            console.error(err)
        }
    }

    getTreatmentsByDate = async (data: FormData) => {
        try {
            const res = await superagent.get(this.BASE_URL + 'treatments_by_date/').query({
                date: data.data
            })
            console.log(res)
        } catch (err) {
            console.error(err)
        }
    } 

    getAppointmentsByDate = async (data: FormData) => {
        try {
            const res = await superagent.get(this.BASE_URL + 'appointments_by_date/').query({
                date: data.data
            })
            console.log(res)
        } catch (err) {
            console.error(err)
        }
    } 
    
    getDelivermanDelivers = async (data: FormData) => {
        try {
            const res = await superagent.get(this.BASE_URL + 'deliverman_delivers/').query({
                cpfFuncionario: data.cpf
            })
            console.log(res)
        } catch (err) {
             console.error(err)
        }
    } 
}

export default new QueryService()
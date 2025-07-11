import { create } from "zustand"
import {devtools, persist} from "zustand/middleware"
import {v4 as uuidv4} from "uuid"
import type { DraftPatients, Patients } from "./types"

type PatientState = {
    patients: Patients[]
    upId:string
    addPatients: (date: DraftPatients) => void
    deletePatient: (id: Patients["id"]) => void
    getId: (id: Patients["id"]) => void
    updatePatient: (date:DraftPatients) => void
}

const createPatient = (patient: DraftPatients) : Patients => {
    return {...patient, id:uuidv4()}
}

export const usePatientStore = create<PatientState>()(devtools(
    persist((set) => ({
    patients: [],
    upId:"",
    addPatients: (date) => {
        const newPatient = createPatient(date)
        set((state) => ({
           patients:[...state.patients, newPatient]
        }))
    },
    deletePatient:(id) => {
        set((state) => ({
           patients:state.patients.filter(patients => patients.id !== id)
        }))
    },
    getId: (id) => {
       set(() => ({
        upId:id
       }))
    },
    updatePatient:(date) => {
         set((state) => ({
            patients:state.patients.map(patient => patient.id === state.upId ? {...date, id:state.upId}: patient)
         }))
    }
}),{
   name: "patientStorage"
})

))


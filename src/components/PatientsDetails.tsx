import { toast } from "react-toastify";
import { usePatientStore } from "../store";
import type { Patients } from "../types";
import PatientDetailItem from "./PatientDetailItem";

type PatientsDetailsProps = {
  patients:Patients
}

export default function PatientsDetails({patients}:PatientsDetailsProps) {
 const deletePatient = usePatientStore((state) => state.deletePatient)
 const getId = usePatientStore((state) => state.getId )

 const showMessageDelete = () => {
      deletePatient(patients.id)
      toast.error("Paciente eliminado correctamente")
 }
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
    <PatientDetailItem label="ID" item={patients.id}/>
    <PatientDetailItem label="Paciente" item={patients.name}/>
    <PatientDetailItem label="Propietario" item={patients.caretaker}/>
    <PatientDetailItem label="Correo" item={patients.email}/>
    <PatientDetailItem label="Fecha alta" item={patients.date.toString()}/>
    <PatientDetailItem label="Sintomas" item={patients.symptoms}/>
      <div className="flex flex-col lg:flex-row gap-3 justify-between">
    <button onClick={()=> getId(patients.id)} className="text-white p-2 bg-indigo-600 rounded-md">Actualizar</button>
    <button onClick={showMessageDelete}  className="text-white p-2 bg-red-600 rounded-md">Eliminar</button>
    </div>
    </div>
  );
}

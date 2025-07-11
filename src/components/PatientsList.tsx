import { usePatientStore } from "../store";
import PatientsDetails from "./PatientsDetails";

export default function PatientsList() {
  const patients = usePatientStore((state) => state.patients);

  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-scroll">
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de pacientes
          </h2>
          <p className="text-lg mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          {
            patients.map(patients => (
              <PatientsDetails key={patients.id} patients ={patients}/>
            ))
          }
        </>
      ) : (
        <div>
          <h1 className="font-black text-3xl  text-center mb-5">
            No hay pacientes
          </h1>
          <p className="text-center text-lg ">
            Comienza agregando pacientes{" "}
            <span className="text-indigo-600 font-bold">
              y apareceran en este lugar
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

type PatientDetailItemProps= {
    label:string
    item:string
}
export default function PatientDetailItem({label, item}:PatientDetailItemProps) {
  return (
    <p className="font-bold mb-3 text-gray-700 uppercase">
       {label + ":"}  {''}
        <span className="font-normal normal-case"> {item}</span>
      </p>
  )
}

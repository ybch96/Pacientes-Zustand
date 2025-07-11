
export default function Error({children}:{children:React.ReactNode}) {
  return (
    <div className="text-center font-bold bg-red-600 text-white py-2">{children}</div>
  )
}

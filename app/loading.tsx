export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-celestial-200 rounded-full" />
          <div className="absolute inset-0 border-4 border-transparent border-t-celestial-600 rounded-full animate-spin" />
        </div>

        {/* Text */}
        <p className="text-slate-600 font-medium">Cargando...</p>
      </div>
    </div>
  )
}

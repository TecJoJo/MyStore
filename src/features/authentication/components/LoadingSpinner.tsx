function LoadingSpinner() {
  return (
    <div className="w-full md:w-1/2 fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white/80 rounded-lg p-8 shadow-lg flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin mb-4"></div>
        <span className="text-gray-700 font-semibold">Loading...</span>
      </div>
    </div>
  )
}

export default LoadingSpinner

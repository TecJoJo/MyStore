import Products from "../../features/products/Products"

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center my-8">
      <img
        className="w-full md:w-10/12 mx-auto rounded-lg shadow-lg"
        src="https://plus.unsplash.com/premium_photo-1722069799821-860b3129d252?q=80&w=2618&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Under construction"
      />
      <h1 className="text-2xl md:text-3xl font-bold text-center mt-6">
        This e-commerce site is under construction
      </h1>
      <p className="text-lg text-gray-600 text-center mt-2">
        Stay tuned for updates!
      </p>
      <Products />
    </div>
  )
}

export default Hero

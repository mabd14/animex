// Landing Page
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="border-2 border-black mt-40 mx-auto p-20 max-w-7xl">
        <h1 className="text-center">Discover your next favorite anime</h1>
        <br></br>
        <h1 className="text-center">AI-Powered Recommendations Just For You</h1>
        <div className=" px-10 flex justify-between mt-10">
          <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Get Started
          </button>
          <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Login
          </button>
        </div>
      </div>


      <div className="border-2 border-black mt-40 mx-auto p-20 max-w-7xl">
        <h1 className="text-center">How It Works</h1>

        <div className="flex justify-center mt-10">
          <div className="border-2 border-black mx-5 p-5 w-1/3">
            <h1 className="text-center">1. Sign Up</h1>
            <h2>Create an account</h2>
          </div>
          <div className="border-2 border-black mx-5 p-5 w-1/3">
            <h1 className="text-center">2. Chat with the AI</h1>
            <h2>Tell the chatbot what you are looking for</h2>
          </div>
          <div className="border-2 border-black mx-5 p-5 w-1/3">
            <h1 className="text-center">3. Get and save recommendations</h1>
            <h2>Discover your next favorite anime and save them</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

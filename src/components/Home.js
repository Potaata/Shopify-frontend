import React from 'react'
import Navbar from './Navbar'
import Chess from '../images/image-bg.jpeg';
import Checkers from '../images/image-bg.jpeg';
import TicTacToe from '../images/bg.png'

function Home() {

  return (
    <>
    <div className="flex flex-col h-screen fixed-bg relative h-[800px]">
      <div className=" grid  gap-7 grid-cols-3 grid-rows-auto">
      <div className='w-92 h-96 p-[40px]'>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <a to="/gameWindow/TicTacToe"> 
              <img className="rounded-t-lg ms-8 w-48 h-48 p-2 object-cover " src={TicTacToe} alt="" />
            </a>
            <div className="p-5">
              <a to="/gameWindow/TicTacToe">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Tic Tac Toe</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 ">Tic Tac Toe is a simple paper-and-pencil game for two players. Tic-tac-toe is often used as a teaching tool for young children to learn about strategy and spatial reasoning.</p>
              <a to='/gameWindow/TicTacToe' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                Play Here
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" ><path fillRule="evenodd" clipRule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <div className='w-92 h-96 p-[40px]'>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
            <a to="/gameWindow/Chess"> 
              <img className="rounded-t-lg w-96 h-48 object-cover " src={Chess} alt="" />
            </a>
            <div className="p-5">
              <a to="/gameWindow/Chess">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Chess</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 ">Chess is a 1000 year old board games still enjoyed by many people. Chess is also used as a tool for education and therapy, as it can help develop critical thinking, problem-solving, and concentration skills.</p>
              <a to="/gameWindow/Chess" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                Play Here
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" ><path fillRule="evenodd" clipRule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <div className='w-92 h-96 p-[40px]'>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <a to="/gameWindow/Cheakers"> 
              <img className="rounded-t-lg ms-8 w-48 h-48 object-cover " src={Checkers} alt="" />
            </a>
            <div className="p-5">
              <a to="/gameWindow/Cheakers">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Checkers</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 ">Checkers is a stragetic Chinese board game played for entertainment. It is believed to assist in enhancing skills such as critical thinking, problem-solving, and concentration.</p>
              <a to="/gameWindow/Cheakers" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                Play Here
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" ><path fillRule="evenodd" clipRule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </div> 
      </div>
    </div>
    
    </>
  )
}

export default Home
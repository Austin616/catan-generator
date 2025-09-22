import './App.css'

function App() {

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-8'>
          <h1 className='text-4xl font-bold text-gray-800 mb-2'>
            Catan Board Generator by{' '}
            <span
              className='text-blue-600 cursor-pointer hover:text-blue-700 transition-colors duration-200'
              onClick={() => window.open('https://www.austintran.me/', '_blank')}
            >
              Austin Tran
            </span>
          </h1>
          <p className='text-gray-600'>Create balanced and fair Catan boards with customizable constraints</p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Form container */}
          <div className='bg-white shadow-lg rounded-xl p-8 border border-gray-100'>
        <div className='text-center mb-6'>
          <h2 className='text-2xl font-bold text-gray-800 mb-2'>Generate a Catan Board</h2>
          <p className='text-sm text-gray-600'>Configure the constraints for your random board generation</p>
        </div>

        <form className='space-y-6'>
          <div className='flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200'>
            <div>
              <label htmlFor='sameResourceTouch' className='text-sm font-medium text-gray-700'>
                Prevent Same Resources Touching
              </label>
              <p className='text-xs text-gray-500 mt-1'>Avoid adjacent tiles with identical resources</p>
            </div>
            <label className='relative inline-flex items-center cursor-pointer'>
              <input
                id='sameResourceTouch'
                type='checkbox'
                className='sr-only peer'
              />
              <div className='w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600'></div>
            </label>
          </div>

          <div className='flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200'>
            <div>
              <label htmlFor='sameNumberTouch' className='text-sm font-medium text-gray-700'>
                Prevent Same Numbers Touching
              </label>
              <p className='text-xs text-gray-500 mt-1'>Avoid adjacent tiles with identical numbers</p>
            </div>
            <label className='relative inline-flex items-center cursor-pointer'>
              <input
                id='sameNumberTouch'
                type='checkbox'
                className='sr-only peer'
              />
              <div className='w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600'></div>
            </label>
          </div>

          <div className='flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200'>
            <div>
              <label htmlFor='sixEightTouch' className='text-sm font-medium text-gray-700'>
                Prevent 6 and 8 Touching
              </label>
              <p className='text-xs text-gray-500 mt-1'>Keep high-probability numbers separated</p>
            </div>
            <label className='relative inline-flex items-center cursor-pointer'>
              <input
                id='sixEightTouch'
                type='checkbox'
                className='sr-only peer'
              />
              <div className='w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600'></div>
            </label>
          </div>

          <div className='flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200'>
            <div>
              <label htmlFor='twoTwelveTouch' className='text-sm font-medium text-gray-700'>
                Prevent 2 and 12 Touching
              </label>
              <p className='text-xs text-gray-500 mt-1'>Keep low-probability numbers separated</p>
            </div>
            <label className='relative inline-flex items-center cursor-pointer'>
              <input
                id='twoTwelveTouch'
                type='checkbox'
                className='sr-only peer'
              />
              <div className='w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600'></div>
            </label>
          </div>

          <button
            type='submit'
            className='w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-blue-700 focus:ring-4 focus:ring-blue-200 transform hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2'
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Generate Board
          </button>
        </form>
          </div>

          {/* Board container */}
          <div className='bg-white shadow-lg rounded-xl p-8 border border-gray-100'>
            <div className='text-center mb-6'>
              <h2 className='text-2xl font-bold text-gray-800 mb-2'>Generated Board</h2>
              <p className='text-sm text-gray-600'>Your Catan board will appear here</p>
            </div>
            <div className='flex items-center justify-center p-8'>
              <div id='board' className='relative'>
                <img className='background' src='/src/assets/images/background.png' alt='Catan Board Background' />
                <div id='display'>
                  <div className='row'>
                    <span className='tile mt' prob='10' dots='••••' style={{backgroundImage: 'url("/src/assets/images/ore.png")', color: 'black'}}></span>
                    <span className='tile' prob='2' dots='•' style={{backgroundImage: 'url("/src/assets/images/sheep.png")', color: 'black'}}></span>
                    <span className='tile' prob='9' dots='•••' style={{backgroundImage: 'url("/src/assets/images/lumber.png")', color: 'black'}}></span>
                  </div>
                  <div className='row'>
                    <span className='tile' prob='12' dots='•' style={{backgroundImage: 'url("/src/assets/images/wheat.png")', color: 'black'}}></span>
                    <span className='tile' prob='6' dots='•••••' style={{backgroundImage: 'url("/src/assets/images/brick.png")', color: 'red'}}></span>
                    <span className='tile' prob='4' dots='•••' style={{backgroundImage: 'url("/src/assets/images/sheep.png")', color: 'black'}}></span>
                    <span className='tile' prob='10' dots='••••' style={{backgroundImage: 'url("/src/assets/images/brick.png")', color: 'black'}}></span>
                  </div>
                  <div className='row'>
                    <span className='tile' prob='9' dots='•••' style={{backgroundImage: 'url("/src/assets/images/wheat.png")', color: 'black'}}></span>
                    <span className='tile' prob='11' dots='••' style={{backgroundImage: 'url("/src/assets/images/lumber.png")', color: 'black'}}></span>
                    <span className='tile' style={{backgroundImage: 'url("/src/assets/images/desert.png")'}}></span>
                    <span className='tile' prob='3' dots='••' style={{backgroundImage: 'url("/src/assets/images/lumber.png")', color: 'black'}}></span>
                    <span className='tile' prob='8' dots='•••••' style={{backgroundImage: 'url("/src/assets/images/ore.png")', color: 'red'}}></span>
                  </div>
                  <div className='row'>
                    <span className='tile' prob='8' dots='•••••' style={{backgroundImage: 'url("/src/assets/images/lumber.png")', color: 'red'}}></span>
                    <span className='tile' prob='3' dots='••' style={{backgroundImage: 'url("/src/assets/images/ore.png")', color: 'black'}}></span>
                    <span className='tile' prob='4' dots='•••' style={{backgroundImage: 'url("/src/assets/images/wheat.png")', color: 'black'}}></span>
                    <span className='tile' prob='5' dots='••••' style={{backgroundImage: 'url("/src/assets/images/sheep.png")', color: 'black'}}></span>
                  </div>
                  <div className='row'>
                    <span className='tile' prob='5' dots='••••' style={{backgroundImage: 'url("/src/assets/images/brick.png")', color: 'black'}}></span>
                    <span className='tile' prob='6' dots='•••••' style={{backgroundImage: 'url("/src/assets/images/wheat.png")', color: 'red'}}></span>
                    <span className='tile' prob='11' dots='••' style={{backgroundImage: 'url("/src/assets/images/sheep.png")', color: 'black'}}></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

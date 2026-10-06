import React from 'react'
import AddTodo from './AddTodo'
import Todos from './Todos'
import {Provider} from 'react-redux'
import {store} from './App/store'

const AppRedux = () => {
  return (
    <div className='self-center'>
      <Provider store={store}>
        <AddTodo />
        <Todos />
      </Provider>
    </div>
  )
}

export default AppRedux
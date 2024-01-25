import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reduce/carrinho'
import favoritoReducer from './reduce/favorito'

const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favorita: favoritoReducer
  }
})

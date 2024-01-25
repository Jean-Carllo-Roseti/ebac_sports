import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reduce/carrinho'
import favoritoReducer from './reduce/favorito'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favorito: favoritoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

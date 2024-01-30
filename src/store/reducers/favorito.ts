import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type favoritoState = {
  itens: Produto[]
}

const initialState: favoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    favoritado: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.itens.find((p) => p.id === produto.id)) {
        state.itens = state.itens.filter((p) => p.id !== produto.id)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { favoritado } = favoritoSlice.actions
export default favoritoSlice.reducer

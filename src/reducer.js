const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  default:
    return state
  }
}

export default reducer

const initialState = [
  {
    id: 1,
    name: 'Oplopen met VEO 6',
    minBod: 10
  },
  {
    id: 2,
    name: 'Overnachting B&B',
    minBod: 50
  }
]
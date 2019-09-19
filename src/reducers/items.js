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
    name: 'Oplopen + Meet and Greet met VEO 6',
    aanbieder: 'VEO 6',
    afnemer: 'team/vriendengroep',
    minBod: 10 
  },
  {
    id: 2,
    name: 'Overnachting + ontbijt B&B',
    aanbieder: 'Theo en Willeke',
    afnemer: '2 personen',
    minBod: 50
  },
  {
    id: 3,
    name: 'Wedstijd kijken in skybox ADO',
    aanbieder: 'ADO',
    afnemer: '3 personen',
    minBod: 60
  }
]
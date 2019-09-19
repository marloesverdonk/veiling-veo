const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_ITEM':
    return [...state, {...action.payload}]
  default:
    return state
  }
}

const initialState = [
  {
    id: 1,
    name: 'Oplopen + Meet and Greet met VEO 6',
    aanbieder: 'VEO 6',
    afnemer: 'team/vriendengroep',
    minBod: 10,
    ronde: 1
  },
  {
    id: 2,
    name: 'Overnachting + ontbijt B&B',
    aanbieder: 'Theo en Willeke',
    afnemer: '2 personen',
    minBod: 50,
    ronde: 2
  },
  {
    id: 3,
    name: 'Wedstijd kijken in skybox ADO',
    aanbieder: 'ADO',
    afnemer: '3 personen',
    minBod: 60,
    ronde: 3
  }
]

export default reducer
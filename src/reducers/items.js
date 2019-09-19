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
    ronde: 1,
    image: "https://ijssel-sport.nl/wp-content/uploads/2018/10/korfbal4.png"
  },
  {
    id: 2,
    name: 'Overnachting + ontbijt B&B',
    aanbieder: 'Theo en Willeke',
    afnemer: '2 personen',
    minBod: 50,
    ronde: 2,
    image: "https://jimdo-storage.freetls.fastly.net/image/17578206/7606e6b4-a2dc-4744-94cf-bea69bded0ac.jpg?format=pjpg&quality=80&auto=webp&disable=upscale&width=1470&height=1920&trim=576,1165,0,1238"
  },
  {
    id: 3,
    name: 'Wedstijd kijken in skybox ADO',
    aanbieder: 'ADO',
    afnemer: '3 personen',
    minBod: 60,
    ronde: 3,
    image: "https://www.vi.nl/.imaging/mte/vinl-website-theme/760x506/dam/articles/2018/05/17/tm-10652740.jpg/jcr:content/tm-10652740.jpg"
  }
]

export default reducer
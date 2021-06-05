const mainState = {
    storeProducts: [
        {
            id: 1,
            title: 'AIR MAX 3',
            description: 'Take on those tough and extreme trail runs with the rugged build of the Nike Wildhorse 7. The upper delivers durable ventilation with support where you need it. Foam midsole cushioning provides responsiveness on every mile.',
            shortDescription: 'One of the most iconic sportswear labels, Nike continues to make us the best that we can be.',
            price: 240,
            modelNum: 15,
            image: '/images/13.png'
        },
        {
            id: 2,
            title: 'AIR MAX 15',
            description: 'Inspired by the early 2000s look, the Air Max Genome adds a fresh face to the Air Max house. Its techy upper features a mixture of materials including sleek no-sew skins, airy mesh and durable plastic details. The low-profile, full-length Air unit adds comfort to match its sleek design thats sure to become your new favorite Air Max. This product is made with at least 20% recycled materials by weight.',
            shortDescription: 'One of the most iconic sportswear labels, Nike continues to make us the best that we can be.',
            price: 499,
            modelNum: 15,
            image: '/images/15.png'
        },
        {
            id: 3,
            title: 'AIR MAX 23',
            description: 'The Nike React Infinity Run Flyknit 2 continues to help keep you running. The upper has Flywire technology and Flyknit for support and breathability where you need it. The high foam heights provide soft responsiveness and long-lasting comfort. Its still one of our most tested shoes, designed to help you feel the potential when your foot hits the pavement. This special edition features body-positive imagery courtesy of artist Kelly Anna London.',
            shortDescription: 'One of the most iconic sportswear labels, Nike continues to make us the best that we can be.',
            price: 100,
            modelNum: 23,
            image: '/images/23.png'
        },
        {
            id: 4,
            title: 'AIR MAX 66',
            description: 'Take on those tough and extreme trail runs with the rugged build of the Nike Wildhorse 7. The upper delivers durable ventilation with support where you need it. Foam midsole cushioning provides responsiveness on every mile.',
            shortDescription: 'One of the most iconic sportswear labels, Nike continues to make us the best that we can be.',
            price: 200,
            modelNum: 66,
            image: '/images/66.png'
        },
        {
            id: 5,
            title: 'AIR MAX 69',
            description: 'The Air Jordan 1 Mid Shoe is inspired by the first AJ1, offering fans of Jordan retros a chance to follow in the footsteps of greatness. Fresh color trims the clean, classic materials, injecting some newness into the familiar design.',
            shortDescription: 'One of the most iconic sportswear labels, Nike continues to make us the best that we can be.',
            price: 690,
            modelNum: 69,
            image: '/images/69.png'
        },

    ],
    shoppingCart: [],
    billingTotal: 0,
    loading: false,
}
const globalReducer = (state = mainState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case "LOADING_TRUE":
            newState.loading = true;
            break;
        case "LOADING_FALSE":
            newState.loading = false;
            break;
        case "ADD_TO_CART":
            newState.shoppingCart.push(action.payload)
            break
        case "REMOVE_FROM_CART":
            newState.shoppingCart = state.shoppingCart.filter(item => item.id !== action.payload)
            break
        case "ADD_TO_TOTAL":
            newState.billingTotal = state.billingTotal + action.payload
            break
        case "TAKE_FROM_TOTAL":
            newState.billingTotal = state.billingTotal - action.payload
            break
        default:
            newState = state
    }
    return newState;
}
export default globalReducer;
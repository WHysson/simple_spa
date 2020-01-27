export default {
    state: {
        products: [
            {
                id: '1',
                name: 'SOCKS',
                description: 'there is description of this product',
                imageId: "@/assets/images/1.jpg",
                amount:7,
                price: '50'
            },
            {
                id: '2',
                name: 'PANTS',
                description: 'there is description of this product',
                imageId: '@/assets/images/2.jpg',
                amount:10,
                price: '60'
            },
            {
                id: '3',
                name: 'SHIRTS',
                description: 'there is description of this product',
                imageId: '@/assets/images/3.jpg',
                amount:2,
                price: '30'
            }
        ]
    },
    mutations: {
        set_products(state, payload){
            state.products = payload
        },
    },
    getters: {
        getProducts: (state) => state.products
    },
  }
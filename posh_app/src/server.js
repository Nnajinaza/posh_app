import { createServer, Model } from "miragejs"

createServer(
    {
        models:{
            products: Model,
        },

        seeds(server) {
            server.create("product", { id: "1", name: "Watches", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2XUEHvrbODZzc2kjbxN2CDeJHrq3xpey3-DxHRKlBYQ&s", price: "100", type: "Luxury" })
            server.create("product", { id: "2", name: "Suit", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzJdmteqaQbTcxGRDE9utVL2imvx68SulC0g&usqp=CAU", price: "100", type: "Business" })
            server.create("product", { id: "3", name: "Dress Shirt", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlsO8rLAHABMYxgWVBhvOVbNSLaxtXGYBSWw&usqp=CAU", price: "100", type: "Business" })
            server.create("product", { id: "4", name: "Trouser", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS7h2jpiqqwoaZQipvT1wLixGyhszE18iSgA&usqp=CAU", price: "100", type: "Business" })
            server.create("product", { id: "5", name: "Tie", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgI3_pmTqCi6J_tkfWRH5fsdi1bFTh2QkE0A&usqp=CAU", price: "100", type: "Business" })
            server.create("product", { id: "6", name: "Glasses",  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLz9vJkREHXZdtyQGRZLL1FAYZHDItgh0QRw&usqp=CAU", price: "100", type: "Luxury" })
            server.create("product", { id: "7", name: "Shoe", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2kVLY-C5YNY4LkHAZRhL49z8z04XmpsZfqQ&usqp=CAU", price: "100", type: "Business" })
            server.create("product", { id: "8", name: "Sneakers", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpYEv3B-AObEa6vnL024Y-6DjAo6ownnfPYA&usqp=CAU", price: "100", type: "Casual" })
            server.create("product", { id: "9", name: "Polo", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxgOpVEceoT3etRJN3YY2Z0j-TFC5f_8I_OQ&usqp=CAU", price: "100", type: "Luxury" })
            server.create("product", { id: "10", name: "T-shirt", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMmr0kIfK-XgyvJLGaNqUDlb33wQs3snelRQ&usqp=CAU", price: "100", type: "Casual" })
            server.create("product", { id: "11", name: "Shorts", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRhdr2zh5Q8cso6xpRKfd2qS2x4X38EQctQ&usqp=CAU", price: "100", type: "Casual" })
            server.create("product", { id: "12", name: "Sweater", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4vKIr7tkznkBhbzQZwhYedD1P94WFG0XU0A&usqp=CAU", price: "100", type: "Casual" })
        },

        routes() {
            this.namespace = "api"
            // this.logging = false
            
            this.get("/products", (schema, request) => {
                return schema.products.all()
        })
                    
            this.get("/products/:id", (schema, request) => {
            const id = request.params.id
                return schema.products.find(id)
        })
    }
})
// createServer({
//     models: {
//         fashion: Model,
//     },

//     seeds(server) {
//         server.create("fashion", { id: "1", name: "Watches", price: 60, description: "The Modest Explorer is a fashion designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", type: "simple" })
//         server.create("fashion", { id: "2", name: "Suit", price: 80, description: "Beach Bum is a fashion inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", type: "rugged" })
//         server.create("fashion", { id: "3", name: "Dress Shirt", price: 100, description: "Reliable Red is a fashion that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png", type: "luxury" })
//         server.create("fashion", { id: "4", name: "Trouser", price: 65, description: "Dreamfinder is the perfect fashion to travel in and experience. With a ceiling height of 2.1m, you can stand up in this fashion and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png", type: "simple" })
//         server.create("fashion", { id: "5", name: "Tie", price: 120, description: "The Cruiser is a fashion for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", type: "luxury" })
//         server.create("fashion", { id: "6", name: "Glasses", price: 70, description: "With this fashion, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged" })
//         server.create("fashion", { id: "6", name: "Shoe", price: 70, description: "With this fashion, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged" })
//         server.create("fashion", { id: "6", name: "Sneakers", price: 70, description: "With this fashion, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged" })
//         server.create("fashion", { id: "6", name: "Polo", price: 70, description: "With this fashion, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged" })
//         server.create("fashion", { id: "6", name: "T-shirt", price: 70, description: "With this fashion, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged" })
//         server.create("fashion", { id: "6", name: "Shorts", price: 70, description: "With this fashion, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged" })
//     },

//     routes() {
//         this.namespace = "api"

//         this.get("/vans", (schema, request) => {
//             return schema.vans.all()
//         })
        
//         this.get("/vans/:id", (schema, request) => {
//             const id = request.params.id
//             return schema.vans.find(id)
//         })
//     }
// })
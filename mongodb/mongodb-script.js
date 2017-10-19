use tasty

db.dishes.insertMany(
    [
        { "name": "Orangeo", "img": "./assets/images/img-12.jpg", "price": 40 },
        { "name": "La Escandella", "img": "./assets/images/img-05.jpg", "price": 45 },
        { "name": "Healthy dieto", "img": "./assets/images/img-13.jpg", "price": 50 },
        { "name": "Pancaketo", "img": "./assets/images/img-04.jpg", "price": 42 },
        { "name": "Cranberryto", "img": "./assets/images/img-07.jpg", "price": 35 },
        { "name": "Strawberryto", "img": "./assets/images/img-11.jpg", "price": 30 },
        { "name": "Saladpino", "img": "./assets/images/img-10.jpg", "price": 37 },
        { "name": "Coffeino", "img": "./assets/images/img-03.jpg", "price": 46 },
        { "name": "Milky", "img": "./assets/images/img-06.jpg", "price": 25 },
        { "name": "Cutepie", "img": "./assets/images/img-02.jpg", "price": 42 },
        { "name": "Juicyo", "img": "./assets/images/img-08.jpg", "price": 33 }
    ])
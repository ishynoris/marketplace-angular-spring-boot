import { Route } from '@angular/router';

import { HomeComponent } from '../../app/components/home/home.component';
import { ProductsComponent } from '../../app/components/products/products.component';
import { MyBuysComponent } from '../../app/components/my-buys/my-buys.component';
import { ShopCartComponent } from '../../app/components/shop-cart/shop-cart.component';
import { LogoutComponent } from '../../app/components/logout/logout.component';
import { IProduct } from '../../interfaces/IProduct';

export class StaticValues {
    public static paths = {
        home: { 
            item: { text: "Home" }, 
            route: { path: "", component: HomeComponent } 
        },
        myShopping: {
            item: { text: "My Shopping" },
            route: { path: "my-shopping", component: MyBuysComponent }
        },
        products: {
            item: { text: "Products" },
            route: { path: "products", component: ProductsComponent },
        },
        shopCart: {
            item: { text: "Carrinho de compras", icon: "glyphicon glyphicon-shopping-cart" },
            route: { path: "shop-cart", component: ShopCartComponent },
        },
        logout: {
            item: { text: "Logout", icon: "glyphicon glyphicon-off" },
            route: { path: "logout", component: LogoutComponent },
        }
    }

    public static products: IProduct[] = [
        { 
            name: "Bike Speed Oggi Velloce 300",
            price: 2899.00,
            description: [ 
                "Bike speed com kit Shimano Claris 2x8 de 16 velocidades.",
                "Fabricada nos tamanhos 48/50/52/54/56. Veja tabela de altura vs tamanho para escolher o tamanho correto!",
                "Cores: preta, vermelha.",
                "Quadro em alumínio 6061.",
                "Garfo em fibra de carbono Oggi Racing."
            ],
            img: "bike-speed-oggi-velloce-300.png",
        },
        { 
            name: "Batman A Piada Mortal Edicao De Luxo",
            price: 34.00,
            description: [
                "VOLUME NOVO E LACRADO.", 
                "CAPA DURA. 88 PÁGINAS.", 
                "RELANÇADO EM 2015."],
            img: "batman-a-piada-mortal-edicao-de-luxo.png",
        },
        { 
            name: "Relógio Technos Masculino 2115lak/1b",
            price: 159.00,
            description: [
                "Cor da Pulseira: Prata",
                "Cor da Caixa: Prata com Fundo Branco (Aro Branco)",
                "Material da pulseira: Aço Inoxidável",
                "Material da Caixa: Aço Inoxidável",
                "Material do vidro: Cristal Mineral",
                "Fecho: Dobrável com Dois Botões"
            ],
            img: "relogio-technos-masculino.png",
        },
        {
            name: "Smart Tv Led 32'' Hd Lg Pro 32lj601c 2 Hdmi Usb Wi-fi",
            price: 1019.90,
            description: [
                "Modelo PRO 32LJ601C",
                "Cor: Prata e Preto",
                "PN 32LJ601C",
                "Smart TV: Sim",
                "Tecnologia da Tela: LED"
            ],
            img: "smart-tv-led-32-hd-lg-pro.png",
        },
        {
            name: "Buda Tibetano Gigante Decoração Saúde Estatua Chakras Templo",
            price: 189.90,
            description: [
                "Altura: 37 cm",
                "Comprimento: 25 cm",
                "Profundidade: 20 cm",
            ],
            img: "buda-tibetano-gigante-decoraco-saude-estatua-chakras-templo.png",
        },
        {
            name: "Camisa Camiseta Polo Bmw Formula 1 F1 Red Bull Corrida",
            price: 54.99,
            description: [
                "Genero: Masculino",
                "Modelo: Corrida",
                "Gola: Polo",
                "Tipo da manga: Curta",
                "Material: Poliéster"
            ],
            img: "camisa-camiseta-polo-bmw-formula-1-f1-red-bull-corrida.png",
        },
        {
            name: "Parafusadeira Furadeira Bivolt Cd121k50 Black Decker",
            price: 168.00,
            description: [
                "Peso: 2.80 Kg",
                "Bateria 12 volts - Níquel-Cádmio Ni-cd 1,3 amperes",
                "17 posições de torque",
                "Carregador bivolt",
                "Velocidade variável/ reversível",
                "Velocidade 0-550/ min",
                "1 Bateria de Ni-cd de 1,3 amperes"
            ],
            img: "black-decker-parafusadeira-furadeira.png",
        },
    ]

    public static getRoutes(): Route[] {
        return [
            StaticValues.paths.home.route,
            StaticValues.paths.myShopping.route,
            StaticValues.paths.products.route,
            StaticValues.paths.shopCart.route,
            StaticValues.paths.logout.route,
        ];
    }
}
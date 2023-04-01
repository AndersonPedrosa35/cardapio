export type Data = {
  alimentos: alimentosProps
  bebidas: {
    title: string
    price: string
  }[]
}

type alimentosProps = {
  hotDog:alimentoItemProps[]
  batatas: alimentoItemProps[],
  hamburgues: any
  combo: alimentoItemProps[]
}

export type alimentoItemProps = {
  title: string
  ingredients?: string
  image?: string
  price: string
}

const alimentos = {
  hotDog: [
    {
      title: 'DOG CALABRESA',
      ingredients: '2 SALSICHAS, CALABRESA, VINAGRETE, BATATA PALHA, QUEIJO RALADO, KETCHUP, MOSTARDA E MAIONESE',
      image: '/alimentos/hotdog/hotdogcalabresa.png',
      price: '15.00',
    },
    {
      title: `DOG MADRUGA'S`,
      ingredients: '2 SALSICHAS, CHEDDAR, CATUPIRY, MILHO, ERVILHA, KETCHUP, MOSTARDA, MAIONESE E BARBECUE',
      image: '/alimentos/hotdog/hotdogn3.png',
      price: '14.00',
    },
    {
      title: 'DOG BURGUER',
      ingredients: 'CARNE DE HAMBÚRGUER, VINAGRETE, SALSICHAS PICADA, CHEDDAR, MAIONESE E BARBECUE',
      image: '/alimentos/hotdog/hotdogburguer.jpg',
      price: '16.00',
    },
    {
      title: 'DOG 4 QUEIJOS',
      ingredients: '2 SALSICHAS, CHEDDAR, VINAGRETE, MUSSARELA, MILHO, ERVILHA, PARMESÂO RALADO, KETCHUP, MOSTARDA E MAIONESE',
      image: '/alimentos/hotdog/dog4queijos.png',
      price: '15.00',
    },
    {
      title: 'DOG SIMPLES',
      ingredients: '1 SALSICHA, VINAGRETE, BATATA PALHA, MILHO, ERVILHA, KETCHUP, MOSTARDA E MAIONESE',
      image: '/alimentos/hotdog/dogsimples.png',
      price: '7.00',
    },
    {
      title: 'DOG N°2',
      ingredients: '1 SALSICHA, VINAGRETE, CATUPIRY, QUEIJO RALADO, MILHO, ERVILHA, KETCHUP, MOSTARDA E MAIONESE',
      image: '/alimentos/hotdog/hotdogn2.png',
      price: '11.00',
    },
    {
      title: 'DOG N°1',
      ingredients: '2 SALSICHAS, BACON, MILHO, ERVILHA, BATATA PALHA, QUEIJO RALADO, CATUPIRY, CHEDDAR, KETCHUP, MOSTARDA E MAIONESE',
      image: '/alimentos/hotdog/hotdogn1.png',
      price: '15.00',
    },
    {
      title: 'DOG CHEDDAR',
      ingredients: '2 SALSICHAS, MILHO, ERVILHA, CATUPIRY, BATATA PALHA, KETCHUP, MOSTARDA, MAIONESE E QUEIJO CHEDDAR MAÇARICADO',
      image: '/alimentos/hotdog/dogaocheddar.png',
      price: '15.00',
    }
  ],
  batatas: [
    {
      title: 'BATATA P SIMPLES',
      ingredients: 'MAIONESE, MOSTARDA, KETCHUP E QUEIJO RALADO',
      image: '/alimentos/batata/batatapsimples.png',
      price: '10.00',
    },
    {
      title: 'BATATA P COMPLETA',
      ingredients: 'CALABRESA, BACON, CHEDDAR, CATUPIRY, BARBECUE, MAIONESE, MOSTARDA, KETCHUP E QUEIJO RALADO',
      image: '/alimentos/batata/batatapcomp.png',
      price: '13.00',
    },
    {
      title: 'BATATA M COMPLETA',
      ingredients: 'CALABRESA, BACON, CHEDDAR, CATUPIRY, BARBECUE, MAIONESE, MOSTARDA, KETCHUP E QUEIJO RALADO',
      image: '/alimentos/batata/batatamcomp.png',
      price: '15.00',
    },
    {
      title: 'BATATA M CHEDDAR',
      ingredients: 'CATUPIRY, BARBECUE, MAIONESE, MOSTARDA, KETCHUP, QUEIJO RALADO E CHEDDAR MAÇARICADO',
      image: '/alimentos/batata/batatamcheddar.png',
      price: '16.00',
    },
    {
      title: 'BATATA G COMPLETA',
      ingredients: 'CALABRESA, BACON, CHEDDAR, CATUPIRY, BARBECUE, MAIONESE, MOSTARDA, KETCHUP E QUEIJO RALADO',
      image: '/alimentos/batata/batatagcomp.png',
      price: '25.00',
    }
  ],
  hamburguers: {
    comum: [
      {
        title: 'X-CHEDDAR',
        ingredients: '1 HAMBÚRGUER, QUEIJO CHEDDAR + MOLHO DO CHEF',
        image: '/alimentos/comum/x-cheddar.png',
        price: '12,50',
      },
      {
        title: 'X-3 QUEIJOS',
        ingredients: '1 HAMBÚRGUER, MUSSARELA, CATUPIRY, QUEIJO CHEDDAR + MOLHO DO CHEF',
        image: '/alimentos/comum/3-queijos.png',
        price: '16,50',
      },
      {
        title: 'X-VERA CITY',
        ingredients: '2 HAMBÚRGUERES, QUEIJO CHEDDAR, CEBOLA ROXA, TOMATE, ALFACE + MOLHO DO CHEF',
        image: '/alimentos/comum/vera-city.png',
        price: '18,00',
      },
      {
        title: 'X-SEM MISÉRIA',
        ingredients: '2 HAMBÚRGUER, QUEIJO CHEDDAR, BACON, BARBECUE + MOLHO DO CHEF',
        image: '/alimentos/comum/sem-miseria.png',
        price: '19,00',
      },
      {
        title: 'Brisadão',
        ingredients: '4 HAMBÚRGUER, QUEIJO CHEDDAR, CATUPIRY, CEBOLA ROXA, TOMATE, ALFACE + MOLHO DO CHEF',
        image: '/alimentos/comum/brisadao.png',
        price: '26,00',
      },
    ],
    artesanal: [
      {
        title: 'X-ALMA NEGRA',
        ingredients: '1 HAMBÚRGUER DE FRALDINHA, QUEIJO CHEDDAR, VINAGRETE, BARBECUE',
        image: '/alimentos/artesanal/X-almanegra.png',
        price: '17,00',
      },
      {
        title: 'X-TRIPA SECA',
        ingredients: '1 HAMBÚRGUER DE FRALDINHA, QUEIJO CHEDDAR + MOLHO DO CHEF',
        image: '/alimentos/artesanal/X-tripaseca.png',
        price: '15,50',
      },
      {
        title: 'X-SUPER SAN',
        ingredients: '1 HAMBÚRGUER DE FRALDINHA, BATATA PALHA, BACON, VINAGRETE, BARBECUE, MAIONESE + MOLHO DO CHEF',
        image: '/alimentos/artesanal/X-supersan.png',
        price: '26,50',
      },
      {
        title: 'X-RACHA CUCA',
        ingredients: '2 HAMBÚRGUER DE FRALDINHA, QUEIJO CHEDDAR, VINAGRETE, MAIONESE + MOLHO DO CHEF',
        image: '/alimentos/artesanal/X-rachacuca.png',
        price: '34,00',
      },
    ]
  },
  combo: [
    {
      title: 'COMBO 1',
      ingredients: 'X-VERA CITY, BATATA P SIMPLES, COCA COLA LATA',
      price: '30.00',
    },
    {
      title: 'COMBO 2',
      ingredients: 'X-CHEDDAR, BATATA P COMPLETA, COCA COLA LATA',
      price: '28.00',
    },
    {
      title: 'COMBO 1',
      ingredients: 'X-SEM MISÉRIA, BATATA M COMPLETA, COCA COLA LATA',
      price: '35.00',
    },
  ],
}

const bebidas = [
  {
    title: 'COCA LATA',
    price: '6.00'
  },
  {
    title: 'SUKITA LATA',
    price: '5.00'
  },
  {
    title: 'PEPSI/GUARANÁ 269ML',
    price: '4.00'
  },
  {
    title: 'GUARANÁ 600ML',
    price: '8.00'
  },
  {
    title: 'COCA 600ML',
    price: '9.00'
  },  {
    title: 'GUARANÁ 1 LITRO',
    price: '10.00'
  },
  {
    title: 'SKOL LATA 269ML',
    price: '4.00'
  }
]

export default function getMenu() {
  return ({ alimentos, bebidas })
}

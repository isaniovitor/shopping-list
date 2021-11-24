// import type { CategoryProps } from '~/@types/entities/Category';
// export const listCategory: CategoryProps[]

export const listCategory = [
  {
    id: 1,
    name: 'Limpeza',
    listItems: [
      {
        id: 1,
        name: 'Detergente',
        qtd: 4,
        add: true,
        preco: 3.99,
        image_url:
          'https://a-static.mlcdn.com.br/618x463/detergente-liquido-ype-neutro-500ml/costaatacado/90146/bc45e8e91700e557fe42944c14353cac.jpg',
      },
      {
        id: 2,
        name: 'Sabão',
        qtd: 3,
        add: true,
        preco: 5.0,
        image_url:
          'https://supernossoemcasa.vteximg.com.br/arquivos/ids/234144-1000-1000/108247.jpg?v=637339578043100000',
      },
    ],
  },
  {
    id: 2,
    name: 'Carnes',
    listItems: [
      {
        id: 1,
        name: 'Picanha',
        qtd: 3,
        add: true,
        preco: 30.0,
        image_url:
          'https://images.tcdn.com.br/img/img_prod/765092/picanha_a_nacional_preco_por_unidade_com_1_200_kg_294_1_20200326164458.jpg',
      },
      {
        id: 2,
        name: 'Frango',
        qtd: 1,
        add: false,
        preco: 15.0,
        image_url:
          'https://dourados.saofranciscoonline.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/r/frango-resfriado-kg-0000000002134.jpg',
      },
    ],
  },
  {
    id: 3,
    name: 'Frutas',
    listItems: [
      {
        id: 1,
        name: 'Mamão',
        qtd: 3,
        add: true,
        preco: 7.0,
        image_url:
          'https://cd.shoppub.com.br/cenourao/media/cache/c5/c9/c5c9a07e53bb4570784f12553e31ded9.jpg',
      },
      {
        id: 2,
        name: 'Acerola',
        qtd: 2,
        add: false,
        preco: 5.0,
        image_url:
          'https://hiperideal.vteximg.com.br/arquivos/ids/181414-1000-1000/49751.jpg?v=637247887574770000',
      },
    ],
  },
];

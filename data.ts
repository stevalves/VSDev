interface iProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  is_promo: boolean;
  created_at: string;
}

// Fake Data
const products: iProduct[] = [
  {
    id: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    name: "Camiseta Básica",
    description: "Camiseta confortável de algodão",
    image: "https://www.tedcamisas.com.br/image/cache/data/lisas/branca-redonda-926x926.jpg",
    is_promo: false,
    created_at: "2025-03-04T09:00:00Z",
  },
  {
    id: "2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q",
    name: "Calça Jeans Slim",
    description: "Calça jeans modelo slim fit",
    image: "https://www.revanche.com.br/media/catalog/product/cache/8e5872966dd88cc0e998d2d2c4eec43a/c/a/cal_a-jeans-slim-barra-normal-atacado-masculina-revanche-espolla104409-_1_.jpg",
    is_promo: false,
    created_at: "2025-03-04T09:30:00Z",
  },
  {
    id: "3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r",
    name: "Tênis Casual",
    description: "Tênis casual para o dia a dia",
    image: "https://bellindashoes.com.br/cdn/shop/files/2_7bdfd4fb-9e9f-4b73-aacb-702c1d8002d3.png?v=1718081671",
    is_promo: true,
    created_at: "2025-03-04T10:00:00Z",
  },
  {
    id: "4d5e6f7g-8h9i-0j1k-2l3m4n5o6p7q8r9s",
    name: "Blusa de Frio Tricot",
    description: "Blusa de frio em tricot macio e quentinho",
    image: "https://images.tcdn.com.br/img/img_prod/1178088/blusa_grossa_de_frio_inverno_tricot_atacado_monte_siao_bras_35_2_bda9de29c977ff286c4617d817271e9e.jpeg",
    is_promo: false,
    created_at: "2025-03-04T10:30:00Z",
  },
  {
    id: "5e6f7g8h-9i0j-1k2l-3m4n5o6p7q8r9s0t",
    name: "Jaqueta Couro",
    description: "Jaqueta de couro estilosa e resistente",
    image: "https://images.tcdn.com.br/img/img_prod/947469/jaqueta_feminina_de_couro_premium_bonanza_b_235b_65_variacao_371_2_06fc8d8ab20dc98d7340152cc9ae8eef.jpg",
    is_promo: true,
    created_at: "2025-03-04T11:00:00Z",
  },
  {
    id: "6f7g8h9i-0j1k-2l3m4n5o6p7q8r9s0t1u",
    name: "Óculos de Sol",
    description: "Óculos de sol modernos e com proteção UV",
    image: "https://images.tcdn.com.br/img/img_prod/647611/oculos_de_sol_feminino_gateado_metal_acetato_dourado_3749_1_76e1b82fc343aa9ba5cf0525e49dcbc1.jpg",
    is_promo: false,
    created_at: "2025-03-04T11:30:00Z",
  },
  {
    id: "7g8h9i0j-1k2l-3m4n5o6p7q8r9s0t1u2v",
    name: "Mochila Escolar",
    description: "Mochila escolar de alta durabilidade",
    image: "https://cdn.awsli.com.br/922/922966/produto/92989514/f6bc15b14e.jpg",
    is_promo: false,
    created_at: "2025-03-04T12:00:00Z",
  },
  {
    id: "8h9i0j1k-2l3m4n5o6p7q8r9s0t1u2v3w",
    name: "Relógio Digital",
    description: "Relógio digital com várias funcionalidades",
    image: "https://down-br.img.susercontent.com/file/sg-11134201-7reqb-m1ykrzqn2qutd2",
    is_promo: true,
    created_at: "2025-03-04T12:30:00Z",
  },
  {
    id: "9i0j1k2l-3m4n5o6p7q8r9s0t1u2v3w4x",
    name: "Fone de Ouvido",
    description: "Fone de ouvido com som de alta qualidade",
    image: "https://www.wb.com.br/upload/produto/imagem/fone-de-ouvido-headphone-bluetooth-sem-fio-over-ear-wb-gyda-com-100-horas-de-bateria-case-incluso-25.webp",
    is_promo: false,
    created_at: "2025-03-04T13:00:00Z",
  },
  {
    id: "0j1k2l3m-4n5o6p7q8r9s0t1u2v3w4x5y",
    name: "Caderno Personalizado",
    description: "Caderno com capa personalizada e papel de alta gramatura",
    image: "https://images.tcdn.com.br/img/img_prod/836952/caderno_personalizado_floral_borboleta_1851_1_a48a2a0f37ffbb0272fa8ebc69f872c9.jpg",
    is_promo: false,
    created_at: "2025-03-04T13:30:00Z",
  },
  {
    id: "1k2l3m4n-5o6p7q8r9s0t1u2v3w4x5y6z",
    name: "Tênis Esportivo",
    description: "Tênis esportivo com alta performance",
    image: "https://dlkmodas.fbitsstatic.net/img/p/tenis-esportivo-feminino-cinza-e-branco-dlk-83576/308645-1.jpg?w=1000&h=1428&v=no-value",
    is_promo: true,
    created_at: "2025-03-04T14:00:00Z",
  },
  {
    id: "2l3m4n5o-6p7q8r9s0t1u2v3w4x5y6z7a",
    name: "Bolsa Feminina",
    description: "Bolsa feminina de couro com design moderno",
    image: "https://imgmarketplace.lojasrenner.com.br/20001/5064/7010703955437/7510708024835/0.jpeg",
    is_promo: false,
    created_at: "2025-03-04T14:30:00Z",
  },
];

export default products

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: CategoryId;
  tag?: string;
};

export type CategoryId =
  | "espresso"
  | "americano"
  | "latte"
  | "cappuccino"
  | "matcha"
  | "signature"
  | "pastries";

export const CATEGORIES: { id: CategoryId | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "espresso", label: "Espresso" },
  { id: "americano", label: "Americano" },
  { id: "latte", label: "Latte" },
  { id: "cappuccino", label: "Cappuccino" },
  { id: "matcha", label: "Matcha" },
  { id: "signature", label: "Signature" },
  { id: "pastries", label: "Pastries & Desserts" },
];

const u = (id: string) =>
  `https://images.unsplash.com/${id}?q=80&w=800&auto=format&fit=crop`;

export const MENU_ITEMS: MenuItem[] = [
  // Espresso
  {
    id: "esp-1",
    name: "Single Origin Espresso",
    description: "Double shot of our rotating single-origin beans, bright and balanced.",
    price: 9.5,
    image: u("photo-1510707577719-ae7c14805e3a"),
    category: "espresso",
  },
  {
    id: "esp-2",
    name: "Affogato",
    description: "Vanilla gelato drowned in a double shot of hot espresso.",
    price: 15.9,
    image: u("photo-1563805042-7684c019e1cb"),
    category: "espresso",
    tag: "Popular",
  },
  {
    id: "esp-3",
    name: "Espresso Tonic",
    description: "Refreshing espresso over chilled tonic water with orange zest.",
    price: 13.9,
    image: u("photo-1541167760496-1628856ab772"),
    category: "espresso",
  },
  // Americano
  {
    id: "ame-1",
    name: "Classic Americano",
    description: "Rich espresso softened with hot water. Bold and smooth.",
    price: 8.9,
    image: u("photo-1495474472287-4d71bcdd2085"),
    category: "americano",
  },
  {
    id: "ame-2",
    name: "Iced Americano",
    description: "Chilled Americano over clear ice. Clean and invigorating.",
    price: 9.9,
    image: u("photo-1511920170033-f8396924c348"),
    category: "americano",
  },
  {
    id: "ame-3",
    name: "Long Black",
    description: "Australian-style long black — strong, full-bodied, silky.",
    price: 10.5,
    image: u("photo-1447933601403-0c6688de566e"),
    category: "americano",
  },
  // Latte
  {
    id: "lat-1",
    name: "Classic Latte",
    description: "Smooth espresso with steamed milk and delicate microfoam.",
    price: 11.9,
    image: u("photo-1541167760496-1628856ab772"),
    category: "latte",
  },
  {
    id: "lat-2",
    name: "Iced Latte",
    description: "Espresso and cold milk over ice, light and creamy.",
    price: 12.5,
    image: u("photo-1522992319-0365e5f11656"),
    category: "latte",
  },
  {
    id: "lat-3",
    name: "Caramel Macchiato",
    description: "Vanilla-kissed milk marked with espresso and caramel drizzle.",
    price: 14.9,
    image: u("photo-1534778101976-62847782c213"),
    category: "latte",
    tag: "Best Seller",
  },
  // Cappuccino
  {
    id: "cap-1",
    name: "Cappuccino",
    description: "The classic trio — espresso, steamed milk, and cloud-like foam.",
    price: 11.5,
    image: u("photo-1572442388796-11668a67e53d"),
    category: "cappuccino",
  },
  {
    id: "cap-2",
    name: "Flat White",
    description: "Double ristretto with velvety microfoam. Small, strong, perfect.",
    price: 13.5,
    image: u("photo-1504754524776-8f4f37790ca0"),
    category: "cappuccino",
  },
  {
    id: "cap-3",
    name: "Mocha",
    description: "Espresso, chocolate ganache and steamed milk, crowned with cream.",
    price: 14.5,
    image: u("photo-1578314675249-a6910f80cc4e"),
    category: "cappuccino",
  },
  // Matcha
  {
    id: "mat-1",
    name: "Ceremonial Matcha Latte",
    description: "Stone-ground Uji matcha whisked to order with oat milk.",
    price: 15.9,
    image: u("photo-1521302200778-3358122e0307"),
    category: "matcha",
    tag: "Signature",
  },
  {
    id: "mat-2",
    name: "Iced Matcha",
    description: "Chilled matcha over ice with a touch of honey.",
    price: 14.9,
    image: u("photo-1515823064-d9039ef60c0f"),
    category: "matcha",
  },
  {
    id: "mat-3",
    name: "Matcha Cloud",
    description: "Creamy cold matcha topped with a vanilla cloud foam.",
    price: 17.9,
    image: u("photo-1536256263959-770b48d82b0a"),
    category: "matcha",
    tag: "New",
  },
  // Signature
  {
    id: "sig-1",
    name: "Ember & Oak Latte",
    description: "Our signature — smoked maple, oak-aged cold brew and velvet foam.",
    price: 19.9,
    image: u("photo-1461023058943-07fcbe16d735"),
    category: "signature",
    tag: "House Signature",
  },
  {
    id: "sig-2",
    name: "Golden Hour Flat White",
    description: "Honeycomb-infused espresso, turmeric latte art, toasted finish.",
    price: 18.5,
    image: u("photo-1600093463592-8e36ae95ef56"),
    category: "signature",
  },
  {
    id: "sig-3",
    name: "Midnight Pour Over",
    description: "Single-origin V60 brew, chocolate and plum tasting notes.",
    price: 16.5,
    image: u("photo-1524350876685-274059332603"),
    category: "signature",
  },
  // Pastries
  {
    id: "pas-1",
    name: "Butter Croissant",
    description: "Laminated in-house daily. Shatteringly flaky, golden outside.",
    price: 7.9,
    image: u("photo-1555507036-ab1f4038808a"),
    category: "pastries",
  },
  {
    id: "pas-2",
    name: "Basque Cheesecake",
    description: "Burnt-top Basque cheesecake with a custardy centre.",
    price: 12.9,
    image: u("photo-1533134242443-d4fd215305ad"),
    category: "pastries",
    tag: "Popular",
  },
  {
    id: "pas-3",
    name: "Cardamom Danish",
    description: "Twisted Danish with cardamom cream and pearl sugar.",
    price: 9.5,
    image: u("photo-1509365465985-25d11c17e812"),
    category: "pastries",
  },
  {
    id: "pas-4",
    name: "Tiramisu Cup",
    description: "Espresso-soaked ladyfingers, mascarpone cloud, cocoa dust.",
    price: 13.5,
    image: u("photo-1571877227200-a0d98ea607e9"),
    category: "pastries",
  },
];

export const SIGNATURE_DRINKS = MENU_ITEMS.filter((i) => i.category === "signature");

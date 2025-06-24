export type RootDrawerParamList = {
    Home: undefined;
    Cart: undefined;
  };

export type RootStackParamList = {
  Root: undefined; // le drawer
  Login: undefined;
  SignUp: undefined;
  ResetPassword: undefined;
  ChoosenProduct: {
    id: string;
    title: string;
    price: number;
    image: keyof typeof imageMap;
    description:string // type for the image key
  };
};

export const CategoryList = ["All Categories", "New", "Best Sellers", "Discount"] as const;
export type Category = typeof CategoryList[number];
export interface Product {
    id : string, // unique identifier for the product
    category : Category// category of the product
    title : string, // title of the product
    description: string, // description of the product
    price: number, // price of the product
    image : string, // image URL of the product
  }
export const imageMap: { [key: string]: any } = {
  "1": require("../images/img1(3).jpg"),
  "2": require("../images/img2.jpg"),
  "3": require("../images/img3.jpg"),
  "4": require("../images/img4.jpg"),
  "5": require("../images/img5.jpg"),
  "6": require("../images/img6.jpg"),
  "7": require("../images/img7.jpg"),
  "8": require("../images/img8.jpg"),
};

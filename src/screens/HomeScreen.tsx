import React, { useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, Text, StyleSheet,TouchableOpacity,ScrollView,Image } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../navigation/types'; 
import { Pressable } from 'react-native';

type SearchBarComponentProps = {};
type NavigationProp = DrawerNavigationProp<RootDrawerParamList, 'Home'>;

const HomeScreen: React.FunctionComponent<SearchBarComponentProps> = () => {
const [search, setSearch] = useState("");
const [hoveredElem, setHoveredElem] = useState<string | null>(null);
const [isHovered, setIsHovered] = useState(false);
// Define the categories and products
  const CategoryList = ["Categories", "All Categories", "New", "Best Sellers", "Discount"] as const;
  type Category = typeof CategoryList[number];
  interface Product {
    id : string, // unique identifier for the product
    category : Category// category of the product
    title : string, // title of the product
    description: string, // description of the product
    price: number, // price of the product
    image : string, // image URL of the product
  }
// Sample products data
  const userProducts: Product[] = [
    {id: "1", category: "New", title: "Wireless Bluetooth Earbuds", description: "Crystal clear sound with noise cancellation", price: 79.99, image: "../images/img1.jpg"},
    {id: "2", category: "Best Sellers", title: "Stainless Steel Water Bottle", description: "Keeps drinks cold for 24 hours or hot for 12", price: 24.95, image: "../images/img2.jpg"},
    {id: "3", category: "Discount", title: "Yoga Mat", description: "Non-slip eco-friendly mat with carrying strap", price: 19.99, image: "../images/img3.jpg"},
    {id: "4", category: "New", title: "Smart Watch", description: "Track your fitness and receive notifications", price: 129.99, image: "../images/img4.jpg"},
    {id: "5", category: "Best Sellers", title: "Organic Cotton T-Shirt", description: "Comfortable unisex tee in various colors", price: 22.50, image: "../images/img5.jpg"},
    {id: "6", category: "Discount", title: "Wireless Phone Charger", description: "Fast-charging pad compatible with all smartphones", price: 15.99, image: "../images/img6.jpg"},
    {id: "7", category: "New", title: "Portable Bluetooth Speaker", description: "Waterproof speaker with 20-hour battery life", price: 59.95, image: "../images/img7.jpg"},
    {id: "8", category: "All Categories", title: "Leather Wallet", description: "Slim design with RFID protection", price: 34.99, image: "../images/img8.jpg"},
    {id: "9", category: "All Categories", title: "Running Shoes", description: "Lightweight shoes with cushioned soles", price: 89.99, image: "../images/img9.jpg"},
    {id: "10", category: "All Categories", title: "Backpack", description: "Water-resistant backpack with laptop compartment", price: 45.50, image: "../images/img10.jpg"},
    {id: "11", category: "All Categories", title: "Desk Lamp", description: "Adjustable LED lamp with multiple brightness levels", price: 29.99, image: "../images/img11.jpg"},
    {id: "12", category: "All Categories", title: "Coffee Maker", description: "Programmable 12-cup coffee machine", price: 49.95, image: "../images/img12.jpg"},
    {id: "13", category: "All Categories", title: "Wireless Keyboard", description: "Slim Bluetooth keyboard with long battery life", price: 39.99, image: "../images/img13.jpg"},
    {id: "14", category: "All Categories", title: "Fitness Tracker", description: "Tracks steps, sleep and heart rate", price: 59.50, image: "../images/img14.jpg"},
    {id: "15", category: "All Categories", title: "Air Fryer", description: "Digital air fryer with multiple cooking functions", price: 89.99, image: "../images/img15.jpg"}
  ];

const navigation = useNavigation<NavigationProp>();
const updateSearch = (search: string) => {
  setSearch(search);
};

return (
  <View style={styles.view}>
      <View style={styles.container1}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <Ionicons name="menu"  style={styles.icons}/>
        </TouchableOpacity>
        <Text style={styles.title}>Home Page</Text>
      {/* <Link href='./CartScreen'><Ionicons name="cart-outline" style={styles.icons} /></Link> */}
      {/* we don'T use link but we use navigation in react native */}
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Ionicons name="cart-outline" style={styles.icons} />
      </TouchableOpacity>
      </View >
      <SearchBar style={styles.searchBar}
        placeholder="Search..."
        onChangeText={updateSearch}
        value={search}
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputText}/>
       <Text style={styles.title }>Shop now</Text>
{/*========================= Categorys List ============================  */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} 
             style={styles.scrollView1}>
          {CategoryList.map((label, index) => (
          <Pressable
            key={index}
            onHoverIn={() => setHoveredElem(label)}
            onHoverOut={() => setHoveredElem(null)}
            style={[
              styles.elem,
              hoveredElem === label && styles.elemHovered,
            ]}
          >
           <Text style={[
              styles.elemText,
              hoveredElem === label && styles.elemTextHovered,
            ]}>
                  {label}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
{/*=============================== Products List ============================  */}
      <ScrollView contentContainerStyle={styles.productlist} // All layout styles go here
        style={styles.scrollView2} horizontal={false} 
        showsHorizontalScrollIndicator={false}>
        {userProducts.map((product) => (
          <Pressable 
            key={product.id}
            onHoverIn={() => setHoveredElem(product.id)}
            onHoverOut={() => setHoveredElem(null)}
            style={[
              styles.productItem,
              hoveredElem === product.id && styles.elemHovered,
            ]}
          >
            <Text style={[
              styles.elemText,
              hoveredElem === product.id && styles.elemTextHovered,
            ]}>
              {product.title}
            </Text>
            <Image 
              source={require(product.image)} 
              style={{ width: 200, height: 200 }}
            />
          </Pressable>
        ))}
      </ScrollView>
  </View>
);
};

// CSS Styling 

const styles = StyleSheet.create({
view: {
  margin: 10,
  width:'100%',
  backgroundColor: 'white',
  color: 'white',
},
container1: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 10,
  padding: 10,
  backgroundColor: 'white',
  width:'100%',
   // fond du conteneur principal
},
title:{
  fontSize: 24,
  fontWeight: 'bold',
  color: 'black',
  margin: 10,
},
icons:{
  margin:10,
  fontSize: 24,
  color: 'black',
},
text: {
  fontSize: 20,
  marginBottom: 10,
},
searchBar: {
  width: '65%',
  marginBottom: 10,
  backgroundColor: 'white',
  color: 'white',
  borderColor: 'white',
  borderRadius : 10,
  padding : 0,
  borderWidth: 1,
  borderStyle: 'solid',
  marginTop: 10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

},
searchContainer: {
  backgroundColor: 'white', // fond du conteneur principal
  borderTopWidth: 0,
  borderBottomWidth: 0,
},

inputContainer: {
  backgroundColor: 'white', // fond du champ de saisie
  borderRadius: 10,
  borderWidth: 1,
  borderColor: '#ccc',
  
},

inputText: {
  color: 'black',
},
elem: {
  marginBottom: 10,
  margin: 10,
  borderWidth: 2,
  borderColor: 'black',
  borderRadius: 10,
  padding: 13,
  backgroundColor: 'white',
  width: 180,
  height: 60,
},

elemHovered: {
  backgroundColor: 'black',
  borderColor: '#333',
},

elemText: {
  fontSize: 20,
  textAlign: 'center',
},

elemTextHovered: {
  color: 'white',
},
//=================================== Scroll View styles ===============================
scrollView1: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },  

scrollView2: {
    backgroundColor: '#f8f8f8', // Example of non-layout style
  },
  productlist: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Now correctly applied
    padding: 10,
    flexGrow: 1,
    minHeight: '90%'
  },
productItem: {
    width: '40%',         // ~2 items per row (accounts for margin)
    marginBottom: 15,      // Space between rows
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    elevation: 3, // Elevation for Android
  },
});

export default HomeScreen;
import React, { useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, Text, StyleSheet,TouchableOpacity,ScrollView,Image } from 'react-native';
import { Link,useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../navigation/types'; 
import { RootStackParamList,Category,CategoryList,Product,imageMap } from '../navigation/types';
import { Pressable } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type SearchBarComponentProps = {};

type NavigationProp = DrawerNavigationProp<RootDrawerParamList>;


const HomeScreen: React.FunctionComponent<SearchBarComponentProps> = () => {
const stackNavigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
const navigation = useNavigation<NavigationProp>();
const [search, setSearch] = useState("");
const [hoveredElem, setHoveredElem] = useState<string | null>(null);
const [category, setCategory] = useState<Category | null>(null);
 const router = useRouter();

const [isHovered, setIsHovered] = useState(false);
// Sample products data
  const userProducts: Product[] = [
  {id: "1", category: "New", title: "Wireless Bluetooth Earbuds", description: "Crystal clear sound with noise cancellation", price: 79.99, image: "1"},
  {id: "2", category: "Best Sellers", title: "Stainless Steel Water Bottle", description: "Keeps drinks cold for 24 hours or hot for 12", price: 24.95, image: "2"},
  {id: "3", category: "Discount", title: "Yoga Mat", description: "Non-slip eco-friendly mat with carrying strap", price: 19.99, image: "3"},
  {id: "4", category: "New", title: "Smart Watch", description: "Track your fitness and receive notifications", price: 129.99, image: "4"},
  {id: "5", category: "Best Sellers", title: "Organic Cotton T-Shirt", description: "Comfortable unisex tee in various colors", price: 22.50, image: "5"},
  {id: "6", category: "Discount", title: "Wireless Phone Charger", description: "Fast-charging pad compatible with all smartphones", price: 15.99, image: "6"},
  {id: "7", category: "New", title: "Portable Bluetooth Speaker", description: "Waterproof speaker with 20-hour battery life", price: 59.95, image: "7"},
  {id: "8", category: "All Categories", title: "Leather Wallet", description: "Slim design with RFID protection", price: 34.99, image: "8"},
  {id: "9", category: "All Categories", title: "Running Shoes", description: "Lightweight shoes with cushioned soles", price: 89.99, image: "8"},
  {id: "10", category: "All Categories", title: "Backpack", description: "Water-resistant backpack with laptop compartment", price: 45.50, image: "8"},
  {id: "11", category: "All Categories", title: "Desk Lamp", description: "Adjustable LED lamp with multiple brightness levels", price: 29.99, image: "8"},
  {id: "12", category: "All Categories", title: "Coffee Maker", description: "Programmable 12-cup coffee machine", price: 49.95, image: "8"},
  {id: "13", category: "All Categories", title: "Wireless Keyboard", description: "Slim Bluetooth keyboard with long battery life", price: 39.99, image: "8"},
  {id: "14", category: "All Categories", title: "Fitness Tracker", description: "Tracks steps, sleep and heart rate", price: 59.50, image: "8"},
  {id: "15", category: "All Categories", title: "Air Fryer", description: "Digital air fryer with multiple cooking functions", price: 89.99, image: "8"}
];
const filteredProducts = userProducts.filter((product) =>
      !category || category === "All Categories" || product.category === category)
const updateSearch = (search: string) => {
  setSearch(search);
};

return (
  <View style={styles.mainView}>
     <View style={styles.container1}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <Ionicons name="menu"  style={styles.icons}/>
        </TouchableOpacity>
        <Text style={styles.title}>Home</Text>
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
      />

       <Text style={styles.title }>Shop now</Text>
{/*========================= Categorys List ============================  */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} 
             contentContainerStyle={styles.contentContainer} style={styles.scrollView1}>
          {CategoryList.map((label, index) => (
          <Pressable
            key={index}
            onPressIn={() => [setHoveredElem(label), setCategory(label)]}
            onPressOut={() => setHoveredElem(null)}
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
      <ScrollView contentContainerStyle={styles.contentContainer} 
       horizontal={false} 
        showsHorizontalScrollIndicator={false}>
        {filteredProducts.map((product) => (
           <View key={product.id}  style={styles.ProductsView}> {/* New container */}
      {/* Pressable only wraps the Image */}
      <Pressable 
        onPressIn={() => { 
          setHoveredElem(product.id);
         stackNavigation.navigate('ChoosenProduct', {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image as keyof typeof imageMap, 
          description:product.description
      });
  }}
        onPressOut={() => setHoveredElem(null)}
        style={[
          styles.productItem,
          hoveredElem === product.id && styles.elemHovered,
        ]}
      >
        <Image 
          source={imageMap[product.image]} 
          style={styles.ProductImage}
        />
      </Pressable>

      {/* Text placed outside Pressable but in the same container */}
      <Text style={styles.ProductText}>
        {product.title}
      </Text>
      <Text style={styles.ProductPrice}>
        ${product.price.toFixed(2)}
      </Text>
    </View>
        ))}
      </ScrollView>
  </View>
);
};

// CSS Styling 

const styles = StyleSheet.create({
mainView: {
  margin: 10,
  width:'100%',
  backgroundColor:'#f8f8f8',
  color: 'white',
},
container1: {
  marginLeft: -10,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 10,
  padding: 10,
  backgroundColor:'#f8f8f8',
  width:'100%',
},
title:{
  fontSize: 24,
  fontWeight: 'bold',
  color: 'black',
  margin: 10,
},
icons:{
  margin:10,
  fontSize: 28,
  padding:6,
  color: '#ff686e',
  borderRadius: 50,
  backgroundColor:'white',
},
text: {
  fontSize: 20,
  marginBottom: 10,
},
searchContainer: {
  backgroundColor: 'white', // fond du conteneur principal
  width: '94%',
  borderTopWidth: 0,
  borderBottomWidth: 0,
  borderRadius: 10,
},
inputContainer: {
  backgroundColor: 'white', // fond du champ de saisie
  borderRadius: 15,
},
searchBar: {
  width: '60%',
  marginBottom: 10,
  backgroundColor: 'white',
  color: 'black',
  borderColor: 'blue',
  borderRadius : 10,
  padding : 0,
  borderStyle: 'solid',
  marginTop: 10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
},

//=================================== Categories list styles ===============================
scrollView1: {
  height: 150, 
  backgroundColor: '#f8f8f8', // Light background for the category list
},  
contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexGrow: 1,
    minHeight: '90%',
},
elem: {
  marginBottom: 10,
  margin: 10,
  color: 'black',
  borderRadius: 10,
  padding: 10,
  backgroundColor: 'white',
  minWidth: 10, // Force a minimum width
  paddingHorizontal: 12,
  height: 50,
},

elemHovered: {
  backgroundColor: '#ff686e',
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
ProductsView: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    width : '46%',  
    height:275, 
  },
  productItem: {
    width: '92%',
    marginBottom: 5,      // Space between rows  
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    elevation: 3, // Elevation for Android
  },
  ProductText: {
    fontSize: 16,
    // fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
    color: 'black',
  },
  ProductPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    // color: '#ff686e',
    marginLeft: 10,
    marginBottom: 10,
  },
  ProductImage: {
  width: '100%',
  height: 150,
  borderRadius: 10,

  
  backgroundColor: '#f0f0f0', // placeholder color if image fails to load
  objectFit: 'cover', // pour Web, sinon "resizeMode" côté React Native
},

});

export default HomeScreen;
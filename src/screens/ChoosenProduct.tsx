import React from "react";
import { View,ScrollView, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { imageMap, RootStackParamList } from '../navigation/types';
import { useRoute, RouteProp } from '@react-navigation/native';

export default function ChoosenProduct() {
  const route = useRoute<RouteProp<RootStackParamList, 'ChoosenProduct'>>();
  const { id, title, price, image,description } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* Product Image */}
      <View style={styles.imageContainer}>
        <Image 
          source={imageMap[image]} 
          style={styles.productImage}
          resizeMode="contain"
        />
      </View>

      {/* Product Info */}
      <View style={styles.infoContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>${price.toFixed(2)}</Text>
        </View>

        {/* Rating */}
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>4.5 (15 Reviews)</Text>
        </View>

        {/* Details */}
        <Text style={styles.sectionTitle}>Details</Text>
        <Text style={styles.description}>
        {description}
        </Text>

        {/* Color Selection */}
        <Text style={styles.sectionTitle}>Color:</Text>
        <View style={styles.colorOptions}>
          <View style={[styles.colorOption, { backgroundColor: '#000000' }]} />
          <View style={[styles.colorOption, { backgroundColor: '#FF0000' }]} />
          <View style={[styles.colorOption, { backgroundColor: '#FFFFFF', borderWidth: 1 }]} />
        </View>

        {/* Buy Button */}
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae saepe eligendi quod molestias officiis perferendis tempore dolorum, unde nisi laborum omnis a, dicta, quidem laboriosam velit nostrum. Nulla, porro necessitatibus.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  imageContainer: {
    width: '100%',
    height: 320,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: 280,
    height: 280,
    resizeMode: 'contain',
  },
  infoContainer: {
    paddingHorizontal: 20,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff686e',
  },
  ratingContainer: {
    marginBottom: 16,
  },
  rating: {
    fontSize: 16,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
    marginBottom: 16,
  },
  colorOptions: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  colorOption: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
    borderColor: '#ddd',
  },
  buyButton: {
    backgroundColor: '#ff686e',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buyButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
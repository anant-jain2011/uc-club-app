import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="light" />

      {/* Section 1: Welcome Section */}
      <View style={styles.heroSection}>
        <Image
          source={{ uri: 'https://www.blog.shippypro.com/hubfs/Blog/fashion-ecommerce.jpg' }}
          style={styles.heroImage}
        />
        <View style={styles.overlay}>
          <View style={styles.textContainer}>
            <Text style={styles.heroTitle}>Welcome to UC Club</Text>
            <Text style={styles.heroSubtitle}>Discover the latest fashion trends and shop your favorite winter wear</Text>
            <TouchableOpacity style={styles.heroButton}>
              <Text style={styles.buttonText}>Shop Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Section 2: Categories */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shop by Categories</Text>
        <View style={styles.categoriesContainer}>
          <CategoryItem imageUrl="https://fcity.in/images/products/50874994/kqiov_512.jpg" title="Jackets" />
          <CategoryItem imageUrl="https://www.jiomart.com/images/product/original/rvdsxr6iry/kaps-women-s-kashmiri-aari-embroided-matka-cashmilon-stoles-shawls-wraps-size-30-x-80-black-product-images-rvdsxr6iry-2-202312100855.jpg?im=Resize=(500,630)" title="Shawls" />
          <CategoryItem imageUrl="https://fcity.in/images/products/168026173/yzel9_512.jpg" title="Sweaters" />
          <View style={styles.categoryItem}>
            <Text style={styles.categoryTitle}>And many more...</Text>
          </View>
        </View>
      </View>

      {/* Section 3: Popular Products */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Products</Text>
        <View style={styles.productsContainer}>
          {/* Repeat this ProductItem component for each product */}
          <ProductItem imageUrl="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg" title="Product Name" price="$50.00" />
          <ProductItem imageUrl="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg" title="Product Name" price="$50.00" />
          <ProductItem imageUrl="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg" title="Product Name" price="$50.00" />
          <ProductItem imageUrl="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg" title="Product Name" price="$50.00" />
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 UC Club of Clothing. All rights reserved.</Text>
        <View style={styles.footerLinks}>
          <Text style={styles.footerLink}>Facebook</Text>
          <Text style={styles.footerLink}>Instagram</Text>
          <Text style={styles.footerLink}>Twitter</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const CategoryItem = ({ imageUrl, title }) => (
  <View style={styles.categoryItem}>
    <Image source={{ uri: imageUrl }} style={styles.categoryImage} />
    <Text style={styles.categoryTitle}>{title}</Text>
  </View>
);

const ProductItem = ({ imageUrl, title, price }) => (
  <View style={styles.productItem}>
    <Image source={{ uri: imageUrl }} style={styles.productImage} />
    <Text style={styles.productTitle}>{title}</Text>
    <Text style={styles.productPrice}>{price}</Text>
    <TouchableOpacity style={styles.productButton}>
      <Text style={styles.buttonText}>Add to Cart</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  heroSection: {
    height: 500,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  textContainer: {
    padding: 20,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  heroButton: {
    backgroundColor: '#e60000',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  section: {
    paddingVertical: 20,
    backgroundColor: '#f5f5f5',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: 10,
  },
  categoryItem: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  categoryImage: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: 15,
  },
  productItem: {
    backgroundColor: 'white',
    padding: 15,
    width: '45%',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  productImage: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  productButton: {
    backgroundColor: '#e60000',
    paddingVertical: 12,
    borderRadius: 8,
  },
  footer: {
    backgroundColor: '#333',
    paddingVertical: 20,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 14,
  },
  footerLinks: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 10,
  },
  footerLink: {
    color: 'white',
    fontSize: 16,
  },
});

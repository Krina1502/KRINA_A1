import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, StatusBar } from 'react-native';

const categories = ['All', 'Music', 'Podcasts', 'Audiobooks'];
const playlists = [
  'Hot Hits Canada', 'Pop Favourites', 'Hip-Hop Central', '80s Hard Rock',
  'All About Country', 'Upbeat mix', 'Daily Wellness', 'Release Radar'
];
const recents = ['Pop mix', 'Hot Hits', 'Upbeat Mix', 'Daily Wellness', 'Hip-Hop Central', '80s Hard Rock'];

const audiobooks = [
  {
    title: 'Mastering Conversation...',
    author: 'Helen Stone',
    description: 'Included in Premium',
    image: require('./assets/2.jpg')
  },
  {
    title: 'Control your mind and...',
    author: 'Eric Robertson',
    description: 'Included in Premium',
    image: require('./assets/2.jpg')
  },
  {
    title: 'Ikigai: The Japanese Sec...',
    author: 'Hector Garcia',
    description: 'Included in Premium',
    image: require('./assets/2.jpg')
  }
];

export default function MusicAppScreen() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* Combined Apple Logo and Filters in one line */}
      <View style={styles.headerRow}>
        <Text style={styles.appleLogo}></Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScrollContainer}
        >
          {categories.map(category => (
            <TouchableOpacity
              key={category}
              style={[styles.filterButton, activeCategory === category && styles.activeButton]}
              onPress={() => setActiveCategory(category)}
            >
              <Text style={styles.filterText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Playlist Grid */}
      <View style={styles.gridContainer}>
        {playlists.map((item, index) => (
          <TouchableOpacity key={index} style={styles.playlistCard}>
            <Image 
              source={require('./assets/apple.png')} 
              style={styles.playlistImage}
              resizeMode="cover"
            />
            <Text style={styles.playlistTitle}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Recents Section */}
      <Text style={styles.sectionTitle}>Recents</Text>
      <View style={styles.gridContainer}>
        {recents.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.recentCard}
            activeOpacity={0.7}
          >
            <View style={styles.recentImageContainer}>
              <Image 
                source={require('./assets/2.jpg')} 
                style={styles.recentIcon}
                resizeMode="cover"
              />
              <Text style={styles.recentTitle}>{item}</Text>
            </View>
            <Text style={styles.recentMeta}>Playlist • User 1</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Audiobooks Section */}
      <Text style={styles.sectionTitle}>Audiobooks for you</Text>
      <View style={styles.gridContainer}>
        {audiobooks.map((book, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.audiobookBox}
            activeOpacity={0.7}
          >
            <Image 
              source={book.image} 
              style={styles.audiobookImageSquare}
              resizeMode="cover"
            />
            <View style={styles.heartIconContainer}>
              <Text style={styles.heartIcon}>♡</Text>
            </View>
            <View style={styles.audiobookTextContainer}>
              <Text style={styles.audiobookTitleSquare}>{book.title}</Text>
              <Text style={styles.audiobookAuthorSquare}>{book.author}</Text>
              <Text style={styles.audiobookDescriptionSquare}>{book.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    padding: 10,
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 15,
    paddingHorizontal: 10,
  },
  appleLogo: {
    color: '#fff',
    fontSize: 24,
    marginRight: 15,
    fontWeight: 'bold',
  },
  filterScrollContainer: {
    paddingRight: 20,
  },
  filterButton: {
    backgroundColor: '#333',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 8,
  },
  activeButton: {
    backgroundColor: '#1DB954',
  },
  filterText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  playlistCard: {
    width: '48%',
    backgroundColor: '#222',
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  playlistImage: {
    width: 40,
    height: 40,
    borderRadius: 4,
    backgroundColor: '#555',
  },
  playlistTitle: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 10,
    flexShrink: 1,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  recentCard: {
    width: '30%',
    backgroundColor: '#444',
    borderRadius: 10,
    padding: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  recentImageContainer: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recentIcon: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#555',
  },
  recentTitle: {
    position: 'absolute',
    top: 4,
    left: 4,
    right: 4,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.5)',
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    textAlign: 'center',
  },
  recentMeta: {
    color: '#bbb',
    fontSize: 10,
    marginTop: 4,
  },
  audiobookBox: {
    width: '48%',
    backgroundColor: '#222',
    borderRadius: 10,
    marginBottom: 14,
    overflow: 'hidden',
  },
  audiobookImageSquare: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#555',
  },
  heartIconContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#111',
    borderRadius: 12,
    padding: 4,
  },
  heartIcon: {
    color: '#fff',
    fontSize: 14,
  },
  audiobookTextContainer: {
    padding: 10,
  },
  audiobookTitleSquare: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  audiobookAuthorSquare: {
    color: '#bbb',
    fontSize: 12,
    marginVertical: 2,
  },
  audiobookDescriptionSquare: {
    color: '#1DB954',
    fontSize: 12,
  },
});
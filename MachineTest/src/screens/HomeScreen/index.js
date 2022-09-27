import react from 'react';
import { View, Text, TextInput, FlatList, Image } from 'react-native';
import styles from './styles';
import ResultData from '../../utils/Data.json';

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTextStyle}>{'Search'}</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={{ height: 10, width: 10, backgroundColor: 'black' }} />
        <TextInput
          placeholder="Food name"
          placeholderTextColor={'#7e8a9a)'}
          style={styles.searchTextBoxStyle}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          key="#"
          data={ResultData}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          ListHeaderComponent={<Text style={styles.listHeader}>{"Foods"}</Text>}
          renderItem={({ item }) => {
            return (
              <View style={styles.itemContainer}>
                <Image source={{ uri: item.imageUrl }} style={styles.imageStyle} />
                <Text style={styles.itemNameStyle}>{item.Ingredient}</Text>
                <Text style={styles.shorttextStyle}>{item.Shorttext}</Text>
              </View>
            )
          }
          }
        />
      </View>
    </View>
  );
};

export default HomeScreen;

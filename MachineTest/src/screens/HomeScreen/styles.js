import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  },
  headerContainer: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    justifyContent: 'center',
  },
  headerTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#30384d',
    paddingLeft: 20,
  },
  searchContainer: {
    backgroundColor: '#f0f0f0',
    height: 40,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  searchTextBoxStyle: {
    paddingLeft: 10,
    fontSize: 14,
    color: '#30384d',
    flex: 1,
  },
  listHeader: {
    fontWeight: 'bold',
    fontSize: 14,
    paddingHorizontal: 10
  },
  listContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  itemContainer: {
    margin: 10,
    flex:1,
    flexShrink:1,
    borderRadius: 4,
  },
  itemNameStyle: {
    color: '#30384d',
    fontWeight: '700',
    fontSize: 12,
    paddingVertical: 4,
  },
  shorttextStyle: {
    color: '#7e8a9a',
    fontWeight: '500',
    fontSize: 10,
  },
  imageStyle: {
    height: 100,
    borderRadius: 5
  }
});
export default styles;

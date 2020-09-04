import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]
   
const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
      navigation.navigate('Weather', {zipCode: code})
    }}>

    <View stye={styles.zipItem}>
        <Text style={styles.zipPlace}>{place}</Text>
        <Text style={styles.zipCode}>{code}</Text>
    </View>

    </TouchableHighlight>

)

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return(
    <FlatList 
        data = {availableZipItems}
        keyExtractor = {item => item.code}
        renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
        />
    )
}

const styles = StyleSheet.create({
    zipItem: {
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    zipPlace: {
        textAlign: 'left',
        color: 'blue',
        fontSize: 20,
        paddingLeft: 20,
    },
    zipCode: {
        textAlign: 'right',
        color: 'pink',
        fontSize: 20,
        paddingRight: 20,
    },
   
    header:{ paddingLeft: 115}
});
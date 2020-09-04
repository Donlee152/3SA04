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
        <Text style={{ fontSize: 30, color: 'blue'}}>{place}</Text>
        <Text styele={{ fontSize: 30, color: 'blue'}}>{code}</Text>
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
        flex: 1,
        alignItems: 'center',
        paddingTop: 10
    },
    zipPlace: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    zipCode: {
        flex: 1,
        
    }
})
import React from 'react'
import {FlatList, StyleSheet, Text, View,Image} from "react-native";
import Card from "../../components/Card";
import NotFound from '../../assets/notFound.png'

function Details ({route }){
    const {data}= route.params

    if(data===undefined){
        return(
            <View style={styles.noData}>
                <Image source={NotFound} style={styles.imageStyle}/>
                <Text>This place does not have a tour available </Text>
            </View>
        )

    }
    return (
        <FlatList
            data={data && data}
            keyExtractor={(item, index) => index}
            renderItem={({item, index}) =>{
                return  <Card key={item.id} data={item} />
            }}
        />

    )
}
const styles = StyleSheet.create({
    noData: {
        flex: 1,
        display:'flex',
        alignItems:'center',
        backgroundColor: 'white',
    },
    imageStyle:{width:200,height:200}
})
export default Details;
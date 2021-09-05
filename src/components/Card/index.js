import React from 'react'
import {View, Text, TouchableOpacity,StyleSheet, ImageBackground} from "react-native";
import {Rating} from "react-native-ratings";
import {convertMinToHrsMin} from "../../helper";

function Card(props){
    const {thumbnail_url,number_of_reviews,price_in_usd,duration_in_minutes,average_rating}= props.data
    return (
        <TouchableOpacity>
            <View style={styles.mainCardView}>
                <View style={styles.subCardView}>
                    <ImageBackground
                        borderTopRightRadius={15}
                        borderTopLeftRadius={15}
                        source={{uri:thumbnail_url}}
                        resizeMode="cover"
                        style={styles.imageStyle}
                    >
                        <View style={styles.cardContent}>
                            <Text
                                style={styles.cityName}>
                                {props.data.city}
                            </Text>
                            <View
                                style={styles.holderName}>
                                <Text
                                    style={styles.tourName}>
                                    {props.data.name}
                                </Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.cardDetails}>
                    <Rating
                        type='star'
                        imageSize={15}
                        ratingCount={average_rating}
                    />
                    <Text style={styles.textStyle}>
                        Reviews:{number_of_reviews}
                    </Text>
                </View>
                <View style={styles.cardDetails}>
                    <Text style={styles.textStyle}>
                        Price:{price_in_usd}$
                    </Text>
                    <Text style={styles.textStyle}>
                        diuration:{convertMinToHrsMin(duration_in_minutes)}
                    </Text>
                </View>

            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    mainCardView: {
        height: 300,
        width:'95%',
        backgroundColor: '#fff',
        borderRadius: 15,
        shadowColor: '#e2e2e2',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 5,
        marginRight: 5,
    },
    subCardView: {
        height: 200,
        width: '100%',
        borderColor: '#eee',
        borderStyle: 'solid',
        borderRadius: 15,
    },
    cardContent:{
        marginTop: 'auto',
        paddingLeft:10,
        paddingBottom:5,
        paddingTop:5,
        backgroundColor:'rgba(255,255,255,0.4)'
    },
    cardDetails:{
        display:'flex',
        flexWrap:'wrap',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
        paddingLeft:25,
        paddingRight:25,
        paddingTop: 10
    },
    imageStyle:{
        height: '100%',
        width: '100%',
        borderTopRightRadius:15,
        borderTopLeftRadius:15
    },
    cityName:{
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    holderName:{
        marginTop: 4,
        borderWidth: 0,
        width: '85%',
    },
    tourName:{
        color: 'black',
        fontSize: 14,
        width:200
    },
    holderReview:{
        height: 25,
        backgroundColor: 'pink',
        borderWidth: 0,
        width: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    textStyle:{
        fontWeight:'bold'
    }
});
export default Card;
import React from 'react'
import {ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, View} from "react-native";
import {useDebounce} from "../../hooks/useDebounce";
import SearchBar from "../../components/SearchBar";
import {useState} from "react";
import {fetchTours,fetchSearch} from "../../helper/api";

function Home ({ navigation }){
    const [search, setSearch] = useState({ term: '', fetchPredictions: false })
    const [predictions, setPredictions] = useState([])
    const [showPredictions, setShowPredictions] = useState(false)
    const { container, body } = styles


    const onChangeText = async () => {
        if (search.term === ''){
            setPredictions([])
            setShowPredictions(false)
        }
        if (!search.fetchPredictions) return
       await fetchSearch(search.term).then(response=>{
           setPredictions(response)
           setShowPredictions(true)
       })
    }
    useDebounce(onChangeText, 1000, [search.term])
    const onPredictionTapped = async (lat,lng,name) => {
      const response =  await fetchTours(lat,lng)
      navigation.navigate('Details', { data: response,name:name })
    }
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={container}>
                <View style={body}>
                    <SearchBar
                        value={search.term}
                        onChangeText={(text) => {
                            setSearch({ term: text, fetchPredictions: true })
                        }}
                        showPredictions={showPredictions}
                        predictions={predictions}
                        onPredictionTapped={onPredictionTapped}
                    />
                    <ActivityIndicator animating={search.term!==''&&!showPredictions} style={{marginTop:20}} size="large" color="blue" />
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        paddingHorizontal: 20
    }
})
export default Home
import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    TextInput,
    ViewStyle,
    FlatList,
    TouchableOpacity,
    Text
} from 'react-native'

const SearchBar=(props) => {
    const [inputSize, setInputSize] = useState({ width: 0, height: 0 })
    const {
        value,
        style,
        onChangeText,
        onPredictionTapped,
        predictions,
        showPredictions
    } = props
    const inputBottomRadius = showPredictions ?
        {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
        }
        :
        {
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20
        }

    const {
        container,
        inputStyle
    } = styles



    const _renderPredictions = (predictions) => {
        const {
            predictionsContainer,
            predictionRow
        } = styles
        const calculatedStyle = {
            width: inputSize.width
        }

        return (
            <FlatList
                data={predictions}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            style={predictionRow}
                            onPress={() => onPredictionTapped(item.lat,item.lng,item.name)}
                        >
                            <Text
                                numberOfLines={1}
                            >
                                {item.name}

                            </Text>
                            <Text
                                numberOfLines={1}
                            >
                                {item.country_name}

                            </Text>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item) => item.feature_id}
                keyboardShouldPersistTaps='handled'
                style={[predictionsContainer, calculatedStyle]}
            />
        )
    }
    const passedStyles = Array.isArray(style) ? Object.assign({}, ...style) : style
    return (
        <View style={[container, { ...passedStyles }]}>
            <TextInput
                style={[inputStyle, inputBottomRadius]}
                placeholder='Search by address'
                placeholderTextColor='gray'
                value={value}
                onChangeText={onChangeText}
                returnKeyType='search'
                onLayout={(event) => {
                    const { height, width } = event.nativeEvent.layout
                    setInputSize({ height, width })
                }}
            />
            {showPredictions && _renderPredictions(predictions)}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop:10
    },
    inputStyle: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: '#cfcfcf',
        borderRadius: 20,
        color: 'black',
        fontSize: 16
    },
    predictionsContainer: {
        backgroundColor: '#cfcfcf',
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    predictionRow: {
        paddingBottom: 15,
        marginBottom: 15,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    }
})
export default SearchBar;
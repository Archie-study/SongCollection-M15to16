import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { songData } from '../../data/SongData'
import { ButtonComponents } from '../components/ButtonComponents'

const HomeScreen = (props) => {

    const { navigation } = props;

    // State to sort by rating
    const [recommended, setRecommended] = useState([]);

    // Sorting Data by rating
    const compareRating = (a, b) => {
        const ratingA = a.rating
        const ratingB = b.rating

        if(ratingA > ratingB){
            return -1;
        } else if (ratingA < ratingB){
            return 1;
        } else {
            return 0;
        }
    };

    useEffect(() => {
        const sortedRecommended = [...songData].sort(compareRating)
        setRecommended(sortedRecommended)

        // setAllRecommended(sortedRecommended)
    }, [])

    return (
        <View style={styles.mainContainer}>
        <FlatList 
            data={recommended}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.flatListContainer}
            renderItem={({item}) => {
                return (
                    <View style={styles.dataContainer}>
                        <Image 
                            style={styles.songAlbumImage}
                            source={{ uri: item.imageLink }}
                        />
                        <View style={styles.songDescriptionContainer}>
                            
                            {/* TITLE */}
                            <View style={styles.titleContainer}>
                                <Text style={styles.songTitle}>
                                    {item.title}
                                </Text>
                            </View>


                            {/* SINGER */}
                            <View style={styles.singerContainer}>
                                <Text style={styles.singer}>
                                    {item.singer}
                                </Text>
                            </View>

                            {/* RATING */}
                            <View style={styles.ratingContainer}>
                                {
                                    item.rating === 5 ? 
                                        <Image 
                                            style={styles.ratingStar}
                                            source={require('../../assets/images/five-stars.png')}
                                        />
                                        :
                                        item.rating === 4 ? 
                                            <Image 
                                                style={styles.ratingStar}
                                                source={require('../../assets/images/four-stars.png')}
                                            />
                                            :
                                            item.rating === 3 ? 
                                                <Image 
                                                    style={styles.ratingStar}
                                                    source={require('../../assets/images/three-stars.png')}
                                                />
                                                :
                                                item.rating === 2 ? 
                                                    <Image 
                                                        style={styles.ratingStar}
                                                        source={require('../../assets/images/two-stars.png')}
                                                    />
                                                    :
                                                    item.rating === 1 ? 
                                                        <Image 
                                                            style={styles.ratingStar}
                                                            source={require('../../assets/images/star.png')}
                                                        />
                                                        :
                                                        null
                                                    
                                }
                            </View>

                            {/* BUTTON */}
                            <ButtonComponents
                            onPress={ () => navigation.navigate('Detail', {item})}/>

                        </View>
                    </View>
                )
            }}
        
        />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    flatListContainer: {
        padding: 8
    },
    dataContainer:{
        margin: 8,
        borderWidth: 2, 
        borderColor: '#a6a6bd',
        // borderRadius: 10,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    songAlbumImage:{
        width: 120,
        height: 120,
        // borderRadius: 10
    },
    songDescriptionContainer: {
        marginLeft: 8,
        flex: 1
    },
    titleContainer:{},
    songTitle:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    singerContainer:{},
    singer:{
        marginTop: 8,
        marginBottom: 8,
    },
    ratingContainer:{
        width: 100
    },
    ratingStar:{
        width: 100,
        height: 20
    }


});

export default HomeScreen
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export const SongDetail = (props) => {
    const { name, value, isRating, rating } = props;
    return (
        <View style={styles.mainContainer}>
            <View style={styles.nameContainer}>
                <Text style={styles.generalFontSize}>{name}</Text>
            </View>
            <Text style={styles.generalFontSize}>: </Text>
            <View style={styles.valueContainer}>
            {
                    isRating ?
                        rating === 5 ?
                            <Image
                                style={styles.ratingImage}
                                source={require('../../assets/images/five-stars.png')}
                            />
                            :
                            rating === 4 ?
                                <Image
                                    style={styles.ratingImage}
                                    source={require('../../assets/images/four-stars.png')}
                                />
                                :
                                rating === 3 ?
                                    <Image
                                        style={styles.ratingImage}
                                        source={require('../../assets/images/three-stars.png')}
                                    />
                                    :
                                    rating === 2 ?
                                        <Image
                                            style={styles.ratingImage}
                                            source={require('../../assets/images/two-stars.png')}
                                        />
                                        :
                                        <Image
                                            style={styles.ratingImage}
                                            source={require('../../assets/images/star.png')}
                                        />
                   
                    :
                    <Text>{value}</Text>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        marginLeft: 8,
        marginTop: 8,
        marginBottom: 8,
        // marginRight: 6
    },
    nameContainer: {
        flex: 1,
    },

    generalFontSize: {
        fontSize: 16,
    },
    valueContainer: {
        flex: 3,
    },

    textValue: {
        textAlign: 'justify',
    },

    ratingImage: {
        width: 100,
        height: 20,
    }
})
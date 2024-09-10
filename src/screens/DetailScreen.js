import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { SongDetail } from '../components/SongDetail';

const DetailScreen = (props) => {

    const { route } = props;
    const song = route.params.item;

    useEffect(() => {
        console.log(song)
    }, [])
    return (
        <View style={styles.mainContainer}>
            <ScrollView>
                <View style={styles.songContainer}>

                    {/* SONG ALBUM */}
                    <View style={styles.middle}>
                        <Image 
                            style={styles.image}
                            source={{ uri: song.imageLink}}
                        />
                    </View>

                    {/* SONG TITLE */}
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{song.title}</Text>
                    </View>

                    {/* SONG DESCRIPTION */}
                    <SongDetail 
                        name="Singer"
                        value={song.singer}
                    />
                    <SongDetail 
                        name="Year"
                        value={song.year}
                    />
                    <SongDetail 
                        name="Genre"
                        value={song.genre}
                    />
                    <SongDetail 
                        name="Songwriters"
                        value={song.songwriters}
                    />
                    <SongDetail 
                        name="Rating"
                        isRating={true}
                        rating={song.rating}
                    />


                </View>
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1
    },
    songContainer:{
        margin: 16
    },
    middle:{
        alignItems: 'center'
    },
    image:{
        width: 200,
        height: 200,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'salmon'
    },
    titleContainer:{
        marginTop: 8,
        marginBottom: 16,
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold'
    }


});

export default DetailScreen
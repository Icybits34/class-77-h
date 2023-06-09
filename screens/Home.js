import React, { Component } from 'react';
import { Text, View, ImageBackground, TouchableOpacity, Image, Platform, StatusBar, SafeAreaView, StyleSheet } from 'react-native';

export default class HomeScreen extends Component {
    render() {

        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground style={styles.backgroundImage} source={require("./assets/stars.gif")}>
                    <View style={styles.titleBar} >

                        <Text>Stellar App</Text>
                    </View>
                    <TouchableOpacity style={styles.rootCard}
                        onPress={() => this.props.navigation.navigate("SpaceCraft")}
                    >
                        <Text style={styles.rootText}>Space Crafts</Text>
                        <Image style={styles.ImageIcon} source={require("./assets/space_crafts.png")}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard}
                        onPress={() => this.props.navigation.navigate("StarMap")}
                    >
                        <Text style={styles.routeText}>Star Map</Text>
                        <Image style={styles.ImageIcon} source={require("./assets/star_map.png")}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard}
                        onPress={() => this.props.navigation.navigate("DailyPic")}
                    >
                        <Text style={styles.routeText}>Daily Pictures</Text>
                        <Image style={styles.ImageIcon} source={require("./assets/daily_pictures.png")}></Image>
                    </TouchableOpacity>

                </ImageBackground>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },

    titleBar: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center',

    },

    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginTop: 50,
        marginRight: 50,
        borderRadius: 10,
        backgroundColor: 'white',
    },

    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: 'black',
        marginTop: 75,
        paddingLeft: 30,

    },

    knowMore: {
        paddingLeft: 30,
        color: 'red',
        fontSize: 15,
    },

    digit: {
        position: "absolute",
        color: "rgba(183,183,183,0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1,
    },

    ImageIcon: {
        position: 'absolute',
        height: 200,
        width: 200,
        resizeMode: 'contain',
        right: 20,
        top: -80,
    },

})
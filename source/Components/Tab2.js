import React, { Component } from "react";
import {
    Text,
    View,
    StatusBar,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions
} from "react-native";
const { width, height } = Dimensions.get("window");
import cab from "../Images/Cab.png";
import { DrawerActions } from "react-navigation-drawer";


export default class Tab2 extends Component {

    icon = (label, image) => {
        return (
            <View style={styles.iconViewer}>
                <View style={styles.iconView}>

                    <Image style={styles.icon} source={image} />
                </View>
                <Text style={styles.iconLabel}>{label}</Text>
            </View>
        );
    };

    common() {
        return <View style={{ marginTop: 50, height: 30, width: 250, borderRadius: 25, backgroundColor: '#C2C2C2' }} >
            <Text style={{ color: 'black', fontSize: 20, textAlign: 'center' }}>content</Text>
        </View>

    }

    render() {
        const { navigate } = this.props.navigation;


        return (
            <View style={styles.container}>

                <View style={styles.view1}>
                    <View style={styles.subView1}>
                        <View>
                            <Text style={[styles.view1Font, { marginLeft: 50 }]}>B-207</Text>
                            <Text style={[styles.view1Font, { fontWeight: "bold" }]}>
                                Bhavyas Thulsi Vanam
                  </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.view2}>
                    <View style={styles.subView2}>
                        {this.icon("Cab", require("../Images/Cab.png"))}
                        {this.icon("Delivery", require("../Images/Delivery.png"))}
                        {this.icon("Guest", require("../Images/Gust.png"))}
                        {this.icon("Alert", require("../Images/Alert.png"))}
                        {this.icon("Help", require("../Images/Help.png"))}
                        {this.icon("Security", require("../Images/Security.png"))}
                    </View>

                    <View style={{ flex: 1, alignItems: 'center' }}>


                        {this.common()}



                        {this.common()}


                        {this.common()}

                        {this.common()}


                    </View>
                </View>



            </View >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#333951",
        zIndex: 0
    },
    view1: {
        flex: 0.15,
        flexDirection: "column",
        justifyContent: "center"
    },
    view2: {
        flex: 0.85,
        backgroundColor: "#E6E7FA",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        zIndex: 10,
    },
    subView2: {
        flex: 0.2,
        backgroundColor: "white",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10
    },
    iconView: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#E6E6EA",
        padding: 5
    },
    iconViewer: {
        paddingTop: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    iconLabel: {
        fontSize: 9,
        margin: 3,
        color: "#58585C"
    },
    view1Font: {
        fontSize: 13,
        color: "#fff"
    },
    subView1: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 40,
        justifyContent: "center"
    },
    bigCard: {
        height: 70,
        width: 0.9 * width,
        alignSelf: "center",
        backgroundColor: "white",
        marginTop: 20,
        flexDirection: "row"
    },
    cardView: {
        flex: 0.8
    },
    smallCardView: {
        flexDirection: "row"
        // justifyContent:"space-evenly"
    },
    smallCard: {
        height: 70,
        width: 0.38 * width,
        marginLeft: 0.05 * width,
        backgroundColor: "white",
        marginTop: 20,
        justifyContent: "center",
        paddingLeft: 8,
        flexDirection: "row"
    },
    text: {
        fontSize: 12,
        padding: 2
    },
    text2: {
        fontSize: 9,
        padding: 2,
        color: "grey"
    },
    icon: {
        width: 30,
        height: 30
        // margin: 5,
    }
});


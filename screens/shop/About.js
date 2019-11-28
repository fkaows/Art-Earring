import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Platform, } from 'react-native';

import MapView from 'react-native-maps';
var { width, height } = Dimensions.get('window');
//import { HeaderButtons, Item } from 'react-navigation-header-buttons';

//import HeaderButton from '../../components/UI/HeaderButton';

export default class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 14.0689,
                longitude: 100.6075,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            },
            markers: [
                {
                    latlng: { latitude: 14.0689, longitude: 100.6075 },
                    image: 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pf-icon2-ake0365-jj-l.jpg?auto=format&bg=F4F4F3&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1200&s=581e8da1f9b5c8531002aca95ea50300',
                    photo: 'https://www.logoarena.com/contestimages/public_new/8228/11687_1499562662_artearrings2.jpg',
                    title: "Art Earring",
                    description: "A Famous Earring Stone in Thailand."
                },
            ]
        };
        this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this);
    }

    onRegionChangeComplete(region) {
        this.setState({ region });
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView style={styles.map}
                    region={this.state.region}
                    onRegionChangeComplete={this.onRegionChangeComplete}
                >
                    {this.state.markers.map((marker, i) => {
                        return (
                            <MapView.Marker
                                key={i}
                                coordinate={marker.latlng}
                                image={marker.photo}
                                title={marker.title}
                                description={marker.description}
                            >
                                <MapView.Callout>
                                    <View style={styles.callout}>
                                        <Image style={styles.calloutPhoto} source={marker.photo} />
                                        <Text style={styles.calloutTitle}>{marker.title}</Text>
                                        <Text>{marker.description}</Text>
                                    </View>
                                </MapView.Callout>
                            </MapView.Marker>
                        );
                    })}
                </MapView>
                <View style={styles.container}>
                    <Text style={styles.text}>
                        ART EARRING SHOP{'\n'}
                        Contect: +66 89xxxxxxx{'\n'}
                        Stone address: SIIT, Phahonyothin Rd, Khlong Nueng, Khlong Luang District, Pathum Thani 12120{'\n'}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F08080',
        
    },
    text:{
        color: '#FDFEFE'
    },
    map: {
        width: width,
        height: Math.floor(height * 2 / 3)
    },
    callout: {
        flex: 1,
        paddingRight: 10,
        paddingBottom: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    calloutPhoto: {
        flex: 1,
        width: 16,
        height: 8
    },
    calloutTitle: {
        fontSize: 16,
    }
});

/*About.navigationOptions = navData => {
    return {
      headerTitle: 'About Us!!',
      headerRight: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Cart"
            iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
            onPress={() => {
              navData.navigation.navigate('Cart');
            }}
          />
        </HeaderButtons>
      )
    };
  };*/
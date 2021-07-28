import React from 'react';
import {
  BackHandler,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const Home = ({navigation}) => {
  const [nama, setnama] = React.useState('Cek INV');
  const [load, setload] = React.useState(null);

  return (
    <View style={styles.wrap}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Spinner
        visible={load}
        textContent={'Cek Jadwal Presensi'}
        textStyle={{color: '#FFF'}}
        animation="fade"
      />
      <View style={styles.header}>
        <Image
          source={require('../../assets/img/ddslogo.png')}
          style={styles.img}
        />
      </View>
      <View style={styles.body}>
        {/* tombol  */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Scan', {type: 'hide'})}>
          <View
            style={{
              marginBottom: 20,
              width: 100,
              height: 40,
              backgroundColor: 'grey',
              margin: 8,
              borderRadius: 40,
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 5},
              shadowOpacity: 0.34,
              shadowRadius: 6.27,
              elevation: 5,
            }}>
            <Text style={(styles.text, {color: 'white'})}>Hide INV</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Scan', {type: 'detail'})}>
          <View style={styles.tombol}>
            <Text style={styles.text}>{nama}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => BackHandler.exitApp()}>
          <View
            style={{
              marginTop: 20,
              width: 100,
              height: 40,
              backgroundColor: '#d11a2a',
              margin: 8,
              borderRadius: 40,
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 5},
              shadowOpacity: 0.34,
              shadowRadius: 6.27,
              elevation: 5,
            }}>
            <Text style={(styles.text, {color: 'white'})}>Keluar</Text>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Crm')}>
                    < View style={styles.tombol}>
                        <Text style={styles.text}>Crm</Text>
                    </View>
                </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {flex: 1, backgroundColor: '#fff'},
  header: {
    backgroundColor: '#ffffff',
    flex: 2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2380c3',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.34,
    shadowRadius: 7.27,
    elevation: 9,
  },
  img: {width: 240, height: 67, marginTop: 10, marginLeft: 40},
  body: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },
  tombol: {
    width: 150,
    height: 60,
    backgroundColor: '#2380c3',
    margin: 8,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#26abff',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Lato- Regular',
    color: '#fff',
  },
});
export default Home;

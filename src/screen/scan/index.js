import React, {Component} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import BarcodeMask from 'react-native-barcode-mask';
import {RNCamera} from 'react-native-camera';
import Spinner from 'react-native-loading-spinner-overlay';
import _postdata from '../../fungsi/scan';

class Scan extends Component {
  state = {
    barcode: '',
    load: false,
  };
  _post = async (barcode, type) => {
    if (barcode.type == 'QR_CODE') {
      this.setState({load: true});
      await _postdata(this.props.navigation, barcode, type);
      this.setState({load: false});
    } else {
      this.setState({load: false});
      this.setState({barcode: barcode.data});
    }
  };
  render() {
    const type = this.props.route.params.type;
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="black" />
        <Spinner
          visible={this.state.load}
          textContent={'Loading'}
          textStyle={styles.spinnerTextStyle}
          animation="fade"
        />
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          captureAudio={false}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onBarCodeRead={barcode => {
            // console.log(barcode);
            if (this.state.barcode !== barcode.data) {
              console.log(barcode);
              this._post(barcode, type);
              this.setState({barcode: barcode.data});
            } else {
            }
          }}>
          <BarcodeMask edgeColor={'#62B1F6'} showAnimatedLine={true} />
        </RNCamera>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF',
  },
});
export default Scan;

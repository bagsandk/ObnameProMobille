import {Vibration} from 'react-native';
import apiUrl from '../../config/API';

const _postdata = async (navigation, barcode, type) => {
  var formData = new FormData();
  console.log(type);
  console.log(barcode.data);
  try {
    if (type == 'hide') {
      var metod = 'PUT';
      var link = apiUrl + '/hide.php';
      formData.append('noInv', barcode.data);
      formData.append('hideData', 'Yes');
      await fetch(link, {
        method: metod,
        body: formData,
      })
        .then(response => response.json())
        .then(response => {
          console.log(response);
        });
    } else {
      var metod = 'GET';
      var link = apiUrl + '/detail.php?noInv=' + barcode.data;
      await fetch(link, {
        method: metod,
      })
        .then(response => response.json())
        .then(response => {
          console.log(response);
        });
    }
    console.log(formData);
  } catch (e) {
    console.log(e);
    navigation.navigate('Home');
    // AlertHelper.show('error', 'Gagal', 'Barqode Tidak Sesuai');
  }
};
export default _postdata;

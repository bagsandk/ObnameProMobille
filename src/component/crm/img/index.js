import React from 'react';
import { Image, View, Text } from 'react-native';


const Crmimg = ({ data }) => {
    return (
        <View style={{ height: '25%', justifyContent: 'center', backgroundColor: '#ffffff', }}>
            <View style={{ alignItems: 'center', }}>
                <Image source={require('../../../assets/img/runsyn.png')} style={{ width: 124, height: 35, marginVertical: '5%' }} />
            </View>
            {data !== null ? (
                <View style={{ flexDirection: 'row'}}>
                    <View style={{ marginLeft: 15 }}>
                        <Text style={{color:'#3373ba',fontWeight:'bold'}}>EMP Code</Text>
                        <Text style={{color:'#3373ba',fontWeight:'bold'}}>Nama</Text>
                        <Text style={{color:'#3373ba',fontWeight:'bold'}}>Email</Text>
                        <Text style={{color:'#3373ba',fontWeight:'bold'}}>Mobile</Text>
                    </View>
                    <View>
                        <Text style={{color:'#3373ba'}}> : </Text>
                        <Text style={{color:'#3373ba'}}> : </Text>
                        <Text style={{color:'#3373ba'}}> : </Text>
                        <Text style={{color:'#3373ba'}}> : </Text>
                    </View>
                    <View>
                        <Text style={{color:'#3373ba'}}>{data.EmpCode}</Text>
                        <Text style={{color:'#3373ba'}}>{data.EmpName}</Text>
                        <Text style={{color:'#3373ba'}}>{data.Email}</Text>
                        <Text style={{color:'#3373ba'}}>{data.Mobile}</Text>
                    </View>
                </View>) : (<View></View>)}
        </View>
    )
    // return (
    //     <View style={{ height: '15%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', }}>
    //         <Image source={require('../../../assets/img/runsyn.png')} style={{ width: 124, height: 35, marginVertical: '5%' }} />
    //     </View>
    // )
}

export default Crmimg

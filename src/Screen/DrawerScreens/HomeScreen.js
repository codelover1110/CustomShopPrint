// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Button, ScrollView } from 'react-native';
import SelectInput from 'react-native-select-input-ios';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import { ColorPicker } from 'react-native-color-picker'
import InputSpinner from "react-native-input-spinner";
import color from 'color';

import DropDownPicker from "react-native-custom-dropdown";

const HomeScreen = () => {
  const selectOptionsFont = [
    { label: '', value: 'normal', icon: () => <Text style={{ fontFamily: 'normal' }} >normal</Text> },
    { label: '', value: 'notoserif', icon: () => <Text style={{ fontFamily: 'notoserif' }} >notoserif</Text> },
    { label: '', value: 'sans-serif', icon: () => <Text style={{ fontFamily: 'sans-serif' }} >sans-serif</Text> },
    { label: '', value: 'sans-serif-light', icon: () => <Text style={{ fontFamily: 'sans-serif-light' }} >sans-light</Text> },
    { label: '', value: 'sans-serif-thin', icon: () => <Text style={{ fontFamily: 'sans-serif-thin' }} >sans-thin</Text> },
    { label: '', value: 'sans-serif-condensed', icon: () => <Text style={{ fontFamily: 'sans-serif-condensed' }} >sans-condensed</Text> },
    { label: '', value: 'sans-serif-medium', icon: () => <Text style={{ fontFamily: 'sans-serif-medium' }} >sans-medium</Text> },
    { label: '', value: 'serif', icon: () => <Text style={{ fontFamily: 'serif' }} >serif</Text> },
    { label: '', value: 'Roboto', icon: () => <Text style={{ fontFamily: 'Roboto' }} >Roboto</Text> },
    { label: '', value: 'monospace', icon: () => <Text style={{ fontFamily: 'monospace' }} >monospace</Text> },
  ]

  // const selectOptionsColor = [
  //   { label: 'Lilac Purple', value: '#000000', icon: () => <View style={{ width: 50, height: 20, flex: 1, alignItems: 'center', backgroundColor: '#000000' }}><Text style={{ color: '#fff' }} ></Text></View> },
  //   { label: '', value: '#0050A2', icon: () => <View style={{ width: 50, height: 20, flex: 1, alignItems: 'center', backgroundColor: '#0050A2' }}><Text style={{ color: '#fff' }} ></Text></View> },
  //   { label: '', value: '#3DA1D2', icon: () => <View style={{ width: 50, height: 20, flex: 1, alignItems: 'center', backgroundColor: '#3DA1D2' }}><Text style={{ color: '#fff' }} ></Text></View> },
  //   { label: '', value: '#B0000D', icon: () => <View style={{ width: 50, height: 20, flex: 1, alignItems: 'center', backgroundColor: '#B0000D' }}><Text style={{ color: '#fff' }} ></Text></View> },
  //   { label: '', value: '#ED84B6', icon: () => <View style={{ width: 50, height: 20, flex: 1, alignItems: 'center', backgroundColor: '#ED84B6' }}><Text style={{ color: '#fff' }} ></Text></View> },
  //   { label: '', value: '#C22B6B', icon: () => <View style={{ width: 50, height: 20, flex: 1, alignItems: 'center', backgroundColor: '#C22B6B' }}><Text style={{ color: '#fff' }} ></Text></View> },
  //   { label: '', value: '#B893BC', icon: () => <View style={{ width: 50, height: 20, flex: 1, alignItems: 'center', backgroundColor: '#B893BC' }}><Text style={{ color: '#fff' }} ></Text></View> },
  //   { label: '', value: '#AD9347', icon: () => <View style={{ width: 50, height: 20, flex: 1, alignItems: 'center', backgroundColor: '#AD9347' }}><Text style={{ color: '#fff' }} ></Text></View> },
  //   { label: '', value: '#9EA09D', icon: () => <View style={{ width: 50, height: 20, flex: 1, alignItems: 'center', backgroundColor: '#9EA09D' }}><Text style={{ color: '#fff' }} ></Text></View> },
  //   { label: '', value: '#5FCDB7', icon: () => <View style={{ width: 50, height: 20, flex: 1, alignItems: 'center', backgroundColor: '#5FCDB7' }}><Text style={{ color: '#fff' }} ></Text></View> },
  //   { label: '', value: '#6AA72D', icon: () => <View style={{ width: 50, height: 20, flex: 1, alignItems: 'center', backgroundColor: '#6AA72D' }}><Text style={{ color: '#fff' }} ></Text></View> },
  //   { label: '', value: '#5FCDB7', icon: () => <View style={{ width: 50, height: 20, flex: 1, alignItems: 'center', backgroundColor: '#5FCDB7' }}><Text style={{ color: '#fff' }} ></Text></View> },
  //   { label: '', value: '#00818C', icon: () => <View style={{ width: 50, height: 20, flex: 1, alignItems: 'center', backgroundColor: '#00818C' }}><Text style={{ color: '#fff' }} ></Text></View> },
  //   { label: '', value: '#004028', icon: () => <View style={{ width: 50, height: 20, flex: 1, alignItems: 'center', backgroundColor: '#004028' }}><Text style={{ color: '#fff' }} ></Text></View> },
  //   { label: '', value: '#EA6700', icon: () => <View style={{ width: 50, height: 20, flex: 1, alignItems: 'center', backgroundColor: '#EA6700' }}><Text style={{ color: '#fff' }} ></Text></View> },
  //   { label: '', value: '#DF4A06', icon: () => <View style={{ width: 50, height: 20, flex: 1, alignItems: 'center', backgroundColor: '#DF4A06' }}><Text style={{ color: '#fff' }} ></Text></View> },
  //   { label: '', value: '#A16D2B', icon: () => <View style={{ width: 50, height: 20, flex: 1, alignItems: 'center', backgroundColor: '#A16D2B' }}><Text style={{ color: '#fff' }} ></Text></View> },
  //   { label: '', value: '#757D7C', icon: () => <View style={{ width: 50, height: 20, flex: 1, alignItems: 'center', backgroundColor: '#757D7C' }}><Text style={{ color: '#fff' }} ></Text></View> },
  //   { label: '', value: '#F2CA00', icon: () => <View style={{ width: 50, height: 20, flex: 1, alignItems: 'center', backgroundColor: '#F2CA00' }}><Text style={{ color: '#fff' }} ></Text></View> },
  // ]


  const selectOptionsColor = [
    { label: 'Matte Black', value: '#000000', icon: () => <View style={{ width: 20, height: 20, backgroundColor: '#000000' }}><Text style={{ color: '#fff' }} ></Text></View> },
    { label: 'Blue', value: '#0050A2', icon: () => <View style={{ width: 20, height: 20, backgroundColor: '#0050A2' }}><Text style={{ color: '#fff' }} ></Text></View> },
    { label: 'Ice Blue', value: '#3DA1D2', icon: () => <View style={{ width: 20, height: 20, backgroundColor: '#3DA1D2' }}><Text style={{ color: '#fff' }} ></Text></View> },
    { label: 'Red', value: '#B0000D', icon: () => <View style={{ width: 20, height: 20, backgroundColor: '#B0000D' }}><Text style={{ color: '#fff' }} ></Text></View> },
    { label: 'Soft Pink', value: '#ED84B6', icon: () => <View style={{ width: 20, height: 20, backgroundColor: '#ED84B6' }}><Text style={{ color: '#fff' }} ></Text></View> },
    { label: 'Pink', value: '#C22B6B', icon: () => <View style={{ width: 20, height: 20, backgroundColor: '#C22B6B' }}><Text style={{ color: '#fff' }} ></Text></View> },
    { label: 'Lilac Purple', value: '#B893BC', icon: () => <View style={{ width: 20, height: 20, backgroundColor: '#B893BC' }}><Text style={{ color: '#fff' }} ></Text></View> },
    { label: 'Gold Metallic', value: '#AD9347', icon: () => <View style={{ width: 20, height: 20, backgroundColor: '#AD9347' }}><Text style={{ color: '#fff' }} ></Text></View> },
    { label: 'Silver Metallic', value: '#9EA09D', icon: () => <View style={{ width: 20, height: 20, backgroundColor: '#9EA09D' }}><Text style={{ color: '#fff' }} ></Text></View> },
    { label: 'Mint Teal', value: '#5FCDB7', icon: () => <View style={{ width: 20, height: 20, backgroundColor: '#5FCDB7' }}><Text style={{ color: '#fff' }} ></Text></View> },
    { label: 'Lime-tree Green', value: '#6AA72D', icon: () => <View style={{ width: 20, height: 20, backgroundColor: '#6AA72D' }}><Text style={{ color: '#fff' }} ></Text></View> },
    { label: 'Mint Teal', value: '#5FCDB7', icon: () => <View style={{ width: 20, height: 20, backgroundColor: '#5FCDB7' }}><Text style={{ color: '#fff' }} ></Text></View> },
    { label: 'Turquoise Blue', value: '#00818C', icon: () => <View style={{ width: 20, height: 20, backgroundColor: '#00818C' }}><Text style={{ color: '#fff' }} ></Text></View> },
    { label: 'Dark Green', value: '#004028', icon: () => <View style={{ width: 20, height: 20, backgroundColor: '#004028' }}><Text style={{ color: '#fff' }} ></Text></View> },
    { label: 'Light Orange', value: '#EA6700', icon: () => <View style={{ width: 20, height: 20, backgroundColor: '#EA6700' }}><Text style={{ color: '#fff' }} ></Text></View> },
    { label: 'Orange', value: '#DF4A06', icon: () => <View style={{ width: 20, height: 20, backgroundColor: '#DF4A06' }}><Text style={{ color: '#fff' }} ></Text></View> },
    { label: 'Copper Metallic', value: '#A16D2B', icon: () => <View style={{ width: 20, height: 20, backgroundColor: '#A16D2B' }}><Text style={{ color: '#fff' }} ></Text></View> },
    { label: 'Grey', value: '#757D7C', icon: () => <View style={{ width: 20, height: 20, backgroundColor: '#757D7C' }}><Text style={{ color: '#fff' }} ></Text></View> },
    { label: 'Light Yellow', value: '#F2CA00', icon: () => <View style={{ width: 20, height: 20, backgroundColor: '#F2CA00' }}><Text style={{ color: '#fff' }} ></Text></View> },
  ]

  const [selectFont, setSelectFont] = useState("normal")
  const [selectColor, setSelectColor] = useState("#000000")
  const [selectWidth, setSelectWidth] = useState(10.5)
  const [selectHeight, setSelectHeight] = useState(2.0)
  const [selectQuantity, setSelectQuantity] = useState(1)
  const [isModalVisible, setModalVisible] = useState(false);
  const [mainText, setMainText] = useState('[Enter Text]')
  const [selectAlign, setSelectAlign] = useState('center')
  const [startColor, setStartColor] = useState('#fff')
  const [centerColor, setCenterColor] = useState('#ccc')
  const [endColor, setEndColor] = useState('#fff')
  const [applyFont, setApplyFont] = useState('normal')
  const [applyColor, setApplyColor] = useState('#ccc')
  const [applyAlign, setApplyAlign] = useState('center')

  const handleApply = () => {
    // setApplyFont(selectFont)
    // setApplyColor(selectColor)
    // setApplyAlign(selectAlign)
  }

  const handleAlign = (align_type) => {
    setSelectAlign(align_type)
    if (align_type == 'flex-start') {
      setStartColor('#ccc')
      setCenterColor('#fff')
      setEndColor('#fff')
    }
    else if (align_type == 'center') {
      setStartColor('#fff')
      setCenterColor('#ccc')
      setEndColor('#fff')
    }
    else if (align_type == 'flex-end') {
      setStartColor('#fff')
      setCenterColor('#fff')
      setEndColor('#ccc')
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Modal isVisible={isModalVisible}>
            <View style={{ flex: 1 }}>
              <ColorPicker
                onColorSelected={color => { setSelectColor(color); setModalVisible(false) }}
                style={{ flex: 1 }}
              />
            </View>
          </Modal>
          <View style={styles.mainContainer}>
            <View style={styles.editWraper}>
              <View style={styles.titleWrpaer}>
                <View style={styles.titlePicCicle}>
                  <Text style={{ fontSize: 16, color: 'white' }}>1</Text>
                </View>
                <Text style={styles.titleText}>Edit Your Text</Text>
              </View>
              <View style={styles.editControlWraper}>
                <DropDownPicker
                  items={selectOptionsFont}
                  defaultValue={selectFont}
                  containerStyle={{ height: 30 }}
                  style={{ backgroundColor: '#fafafa', width: 90, marginRight: 5 }}
                  itemStyle={{
                    justifyContent: 'flex-start'
                  }}

                  dropDownStyle={{ backgroundColor: '#fafafa' }}
                  onChangeItem={(item) => setSelectFont(item.value)}
                />
                <DropDownPicker
                  items={selectOptionsColor}
                  defaultValue={selectColor}
                  containerStyle={{ height: 30 }}
                  style={{ backgroundColor: '#fafafa', width: 135 }}
                  itemStyle={{
                    justifyContent: 'flex-start'
                  }}
                  selectedLabelLength={1000}
                  dropDownStyle={{ backgroundColor: '#fafafa' }}
                  onChangeItem={(item) => setSelectColor(item.value)}
                />
                {/* <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <View style={styles.colorPickerWraper} >
                    <Text style={[styles.colorPickerText, { color: selectColor }]}>A</Text>
                  </View>
                </TouchableOpacity> */}
                <View style={styles.textStyleWrape}>
                  <TouchableOpacity onPress={() => handleAlign('flex-start')}>
                    <View style={[styles.textStyleItem, { backgroundColor: startColor }]} >
                      <Icon
                        name="align-left"
                        size={15}
                        color="#000000"
                      />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleAlign('center')}>
                    <View style={[styles.textStyleItem, { backgroundColor: centerColor }]} >
                      <Icon
                        name="align-center"
                        size={15}
                        color="#000000"
                      />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleAlign('flex-end')}>
                    <View style={[styles.textStyleItem, { backgroundColor: endColor }]}>
                      <Icon
                        name="align-right"
                        size={15}
                        color="#000000"
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.textAreaContainer} >
                <TextInput
                  style={styles.textArea}
                  underlineColorAndroid="transparent"
                  placeholderTextColor="grey"
                  numberOfLines={10}
                  multiline={true}
                  value={mainText}
                  onChangeText={(value) => setMainText(value)}
                />
              </View>
            </View>
            <View style={styles.editWraper}>
              <View style={styles.titleWrpaer}>
                <View style={styles.titlePicCicle}>
                  <Text style={{ fontSize: 16, color: 'white' }}>2</Text>
                </View>
                <Text style={styles.titleText}>Choose Decal Size</Text>
              </View>
              <View style={styles.sizeEditWrape}>
                <Text style={styles.sizeEditText1}>Width</Text>
                <View style={styles.sizeEditInput}>
                  <InputSpinner
                    value={selectWidth}
                    style={styles.spinner}
                    type={"real"}
                    step={0.1}
                    precision={1}
                    skin="Clean"
                    editable={false}
                    onChange={(num) => {
                      setSelectWidth(num)
                    }}
                  />
                </View>
                <Text style={styles.sizeEditText}>inches</Text>
              </View>
              <View style={styles.sizeEditWrape}>
                <Text style={styles.sizeEditText1}>Height</Text>
                <View style={styles.sizeEditInput}>
                  <InputSpinner
                    value={selectHeight}
                    style={styles.spinner}
                    type={"real"}
                    step={0.1}
                    precision={1}
                    skin="Clean"
                    editable={false}
                    onChange={(num) => {
                      setSelectHeight(num)
                    }}
                  />
                </View>
                <Text style={styles.sizeEditText}>inches</Text>
              </View>
              <View style={{ flex: 1, marginTop: 20 }}>
                <View style={{ position: 'absolute', right: '50%', top: 5, zIndex: 1 }}>
                  <Text style={{ color: '#000' }}>{selectWidth}</Text>
                </View>
                <View style={{ position: 'absolute', top: '50%', left: 5, zIndex: 1 }}>
                  <Text style={{ color: '#000', transform: [{ rotate: '-90deg' }] }}>{selectHeight}</Text>
                </View>
                <View style={[styles.mainTextWrape, { alignItems: selectAlign }]}>
                  <Text
                    style={
                      {
                        fontSize: 30,
                        fontWeight: 'bold',
                        fontFamily: selectFont,
                        color: selectColor
                      }
                    }>{mainText}</Text>
                </View>
              </View>
            </View>
            <View style={styles.editWraper}>
              <View style={styles.titleWrpaer}>
                <View style={styles.titlePicCicle}>
                  <Text style={{ fontSize: 16, color: 'white' }}>3</Text>
                </View>
                <Text style={styles.titleText}>Order Decals</Text>
              </View>
              <View style={styles.sizeEditWrape}>
                <Text style={styles.quantityText}>Quantity</Text>
                <View style={styles.sizeEditInput}>
                  <InputSpinner
                    value={selectQuantity}
                    style={styles.spinner}
                    type={"real"}
                    step={1}
                    precision={1}
                    skin="Clean"
                    editable={false}
                    onChange={(num) => {
                      setSelectQuantity(num)
                    }}
                  />
                </View>
                <Text style={styles.sizeEditText}>Buy</Text>
              </View>
              <View style={styles.orderDescrWrape}>
                <View style={styles.flexStyle}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', marginRight: 55 }}>TOTAL</Text>
                  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>${selectQuantity * 10.75}</Text>
                </View>
                <View style={styles.flexStyle}>
                  <Text style={{ fontSize: 15 }}>Your price per decal</Text>
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>${10.75}</Text>
                </View>
              </View>
            </View>
            <View style={[styles.flexStyle, { marginTop: 30, marginBottom: 30 }]}>
              <View>
                <Text style={{ fontSize: 13, fontStyle: 'italic' }}>Price in USD, taxes {"\n"}and shipping not included</Text>
              </View>
              <TouchableOpacity onPress={handleApply}>
                <View style={styles.applyBtnWraper} >
                  <Text style={styles.btnText}>ADD TO CART</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    marginBottom: 30
  },
  mainContainer: {
    flex: 1,
    width: '100%'
  },
  editWraper: {
    margin: 10,
  },
  textAreaContainer: {
    // borderColor: COLORS.grey20,
    borderColor: 'grey',
    borderWidth: 1,
    padding: 5,
    marginTop: 5
  },
  textArea: {
    height: 80,
    justifyContent: "flex-start",
    textAlignVertical: "top",
    fontSize: 20
  },
  titleWrpaer: {
    flexDirection: 'row',
    textAlign: 'center',
  },
  titlePicCicle: {
    width: 20,
    height: 20,
    borderRadius: 60 / 2,
    color: 'grey',
    backgroundColor: 'grey',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: 'grey',
    alignSelf: 'center',
    paddingHorizontal: 5,
    fontWeight: 'bold',
    fontSize: 16
  },
  selectInput: {
    width: '100%',
    fontWeight: 'bold'
  },
  editControlWraper: {
    flexDirection: "row",
    alignItems: 'center',
    width: '100%',
    marginTop: 10
  },
  colorPickerWraper: {
    height: 30,
    flexDirection: "row",
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    width: 30,
    marginLeft: 5,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  colorPickerText: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  textStyleWrape: {
    height: 30,
    flexDirection: 'row',
    marginLeft: 5
  },
  textStyleItem: {
    height: 30,
    flexDirection: "row",
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    width: 30,
    marginLeft: 5,
    justifyContent: 'center',
  },
  textStyleItemActive: {
    backgroundColor: '#ccc'
  },
  applyBtnWraper: {
    height: 35,
    flexDirection: "row",
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    marginLeft: 5,
    justifyContent: 'center',
    backgroundColor: '#ccc',
    borderRadius: 10,
    paddingLeft: 5,
    paddingRight: 5,
    elevation: 8,
    width: 150
  },
  btnText: {
    color: '#000',
    fontSize: 15
  },
  spinner: {
    flex: 1,
    marginRight: 10,
    minWidth: 150,
  },
  sizeEditWrape: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    justifyContent: 'center'
  },
  orderDescrWrape: {
    // alignItems: 'center',
    marginTop: 20,
    // justifyContent: 'center',
    backgroundColor: '#ccc',
    padding: 10
  },
  sizeEditText: {
    fontSize: 13,
    color: 'grey'
  },
  sizeEditText1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'grey',
    marginRight: 10
  },
  quantityText: {
    fontSize: 13,
    color: '#000',
    marginRight: 10
  },
  mainText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  mainTextWrape: {
    padding: 10,
    marginLeft: 5,
    marginTop: 5,
    minHeight: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: '#ccceee'
  },
  flexStyle: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly'
  }

});

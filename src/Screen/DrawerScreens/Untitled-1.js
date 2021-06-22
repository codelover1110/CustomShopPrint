// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';
import SelectInput from 'react-native-select-input-ios';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  const selectOptionsFont = [
    { value: 'normal', label: 'normal' },
    { value: 'notoserif', label: 'notoserif' },
    { value: 'sans-serif', label: 'sans-serif' },
    { value: 'sans-serif-light', label: 'sans-serif-light' },
    { value: 'sans-serif-thin', label: 'sans-serif-thin' },
    { value: 'sans-serif-condensed', label: 'sans-serif-condensed' },
    { value: 'sans-serif-medium', label: 'sans-serif-medium' },
    { value: 'serif', label: 'serif' },
    { value: 'Roboto', label: 'Roboto' },
    { value: 'monospace', label: 'monospace' },
  ]
  const [selectFont, setSelectFont] = useState("normal")
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <View style={styles.editWraper}>
            <View style={styles.titleWrpaer}>
              <View style={styles.titlePicCicle}>
                <Text style={{ fontSize: 16, color: 'white' }}>1</Text>
              </View>
              <Text style={styles.titleText}>Edit Your Text</Text>
            </View>
            <View style={styles.editControlWraper}>
              <View style={styles.selectBoxWraper}>
                <SelectInput
                  value={selectFont}
                  options={selectOptionsFont}
                  onSubmitEditing={(value) => setSelectFont(value)}
                  style={styles.selectInput}
                />
              </View>
              <TouchableOpacity onPress={() => alert("ko")}>
                <View style={styles.colorPickerWraper} >
                  <Text style={styles.colorPickerText}>A</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.textStyleWrape}>
                <TouchableOpacity onPress={() => alert("ko")}>
                  <View style={styles.textStyleItemActive} >
                    <Icon
                      name="align-left"
                      size={15}
                      color="#000000"
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert("ko")}>
                  <View style={styles.textStyleItem} >
                    <Icon
                      name="align-center"
                      size={15}
                      color="#000000"
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert("ko")}>
                  <View style={styles.textStyleItem} >
                    <Icon
                      name="align-right"
                      size={15}
                      color="#000000"
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => alert("ko")}>
                <View style={styles.applyBtnWraper} >
                  <Text style={styles.btnText}>Apply Change</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.textAreaContainer} >
              <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="[Enter Text]"
                placeholderTextColor="grey"
                numberOfLines={10}
                multiline={true}
              />
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              color: 'grey',
            }}>
            DecalsHut.ca Custom Decals
          </Text>
          <Text
            style={{
              fontSize: 16,
              textAlign: 'center',
              color: 'grey',
            }}>
            www.decalsht.ca.com
          </Text>
        </View>
      </View>
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
    textAlignVertical: "top"
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
  selectBoxWraper: {
    justifyContent: "center",
    height: 30,
    width: '35%',
    borderWidth: 1,
    borderColor: '#bdc3c7',
    overflow: 'hidden',
    marginVertical: 5,
  },
  selectInput: {
    width: '100%',
    fontWeight: 'bold'
  },
  editControlWraper: {
    flexDirection: "row",
    alignItems: 'center'
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
    color: 'red',
    fontSize: 15
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
    backgroundColor: '#ffffff'
  },
  textStyleItemActive: {
    height: 30,
    flexDirection: "row",
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    width: 30,
    marginLeft: 5,
    justifyContent: 'center',
    backgroundColor: '#ccc'
  },
  applyBtnWraper: {
    height: 30,
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
  },
  btnText: {
    color: '#000',
    fontSize: 15
  },

});

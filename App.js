import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TouchableHighlight, Image, BackHandler } from "react-native";
import { styles } from "./styles.js";
import image from "./assets/kitsuneicon.png";

const App = () => {
	const aboutView = (
		<View style={styles.containerSettings}>
			<TouchableOpacity onPress={() => changeView('settingsView')} style={styles.backFromSettings}>
				<Text style={styles.backFromSettingsText}>About</Text>
			</TouchableOpacity>
		</View>
	);

	const settingsView = (
		<View style={styles.containerSettings}>
			<TouchableOpacity onPress={() => changeView('mainView')} style={styles.backFromSettings}>
				<Text style={styles.backFromSettingsText}>Settings</Text>
			</TouchableOpacity>
			<TouchableHighlight style={styles.settingWrapper} activeOpacity={1} underlayColor="#7000FF" onPress={() => pressedSetting('Rate')}>
				<Text style={styles.setting}>Rate</Text>
			</TouchableHighlight>
			<TouchableHighlight style={styles.settingWrapper} activeOpacity={1} underlayColor="#7000FF" onPress={() => pressedSetting('API Key')}>
				<Text style={styles.setting}>API Key</Text>
			</TouchableHighlight>
			<TouchableHighlight style={styles.settingWrapper} activeOpacity={1} underlayColor="#7000FF" onPress={() => changeView('aboutView')}>
				<Text style={styles.setting}>About</Text>
			</TouchableHighlight>
		</View>
	);

	const mainView = (
		<View style={styles.container}>
		<Text style={styles.mainCLock}>Hello World!</Text>

		<TouchableOpacity onPress={() => changeView('settingsView')}>
			<Image source={image} style={styles.mainImg} />
		</TouchableOpacity>

		<Text style={styles.mainText}>sss</Text>
		</View>
	);

	const [currentView, setCurrentView] = useState(mainView);
	const [currentViewTxt, setCurrentViewTxt] = useState("mainView");

	function pressedSetting(setting_){
		console.log("pressed setting:", setting_);
	}

	function getVariableName(value) {
		return Object.keys(this).find(key => this[key] === value);
	}

	function changeView(view_){
		if(view_ == "aboutView"){
			setCurrentView(aboutView); setCurrentViewTxt("aboutView");
		}
		if(view_ == "settingsView"){
			setCurrentView(settingsView); setCurrentViewTxt("settingsView");
		}
		if(view_ == "mainView"){
			setCurrentView(mainView); setCurrentViewTxt("mainView");
		}
	}

	useEffect(() => {
		const backAction = () => {
			console.log("back detected", currentViewTxt)

			if (currentViewTxt === "aboutView") {
				changeView("settingsView");
				return true;
			} else if (currentViewTxt === "settingsView") {
				changeView("mainView");
				return true;
			} else if (currentViewTxt === "mainView") {
				return false;
			}

			return false;
		};
	
		const backHandler = BackHandler.addEventListener( "hardwareBackPress", backAction);
	
		return () => backHandler.remove();
	}, [currentViewTxt]);

	return currentView
};

export default App;

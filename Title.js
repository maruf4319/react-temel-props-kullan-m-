import React from "react";
import {View, Text, StyleSheet } from "react-native";

const Title = (props) => {
    return (
        <view>
            <text>{props.number + 1}</text>
            <text style={[styles.title, { color: props.color}]}>{props.text}</text>
        </view>
    );
};

const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        fontWeight:"700",
    },
});
export default Title;
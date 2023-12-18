import React, { FC, useEffect, useRef } from "react";

import { View, Text, Pressable, StyleSheet, Animated } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { regular } from "components/text";
import config from "config";

export interface IResponseToastProps {
  onClose: () => void;
  message: string;
  type: "SUCCESS" | "ERROR";
  timeout?: number;
  show: boolean;
  testID?: string;
}

export const ResponseToast: FC<IResponseToastProps> = ({
  onClose,
  message,
  type,
  timeout = 5000,
  show,
  testID,
}) => {
  const slideAnimationRef = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    let slideInAnimation: Animated.CompositeAnimation;
    let slideOutAnimation: Animated.CompositeAnimation;

    if (show) {
      slideInAnimation = Animated.timing(slideAnimationRef, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      });
      slideOutAnimation = Animated.timing(slideAnimationRef, {
        toValue: -100,
        duration: 500,
        useNativeDriver: true,
      });

      slideInAnimation.start();

      setTimeout(() => {
        slideInAnimation.stop();
        slideOutAnimation.start(() => onClose());
      }, timeout);
    } else {
      slideOutAnimation = Animated.timing(slideAnimationRef, {
        toValue: -100,
        duration: 500,
        useNativeDriver: true,
      });
    }

    return () => {
      slideInAnimation?.stop();
      slideOutAnimation?.stop();
    };
  }, [show, onClose, slideAnimationRef, timeout]);

  const successType = type === "SUCCESS";

  const handlePress = () => {
    const slideOutAnimation = Animated.timing(slideAnimationRef, {
      toValue: -100,
      duration: 500,
      useNativeDriver: true,
    });

    slideOutAnimation.start(() => onClose());
  };

  return (
    <Animated.View
      testID={testID}
      style={[
        styles.container,
        { transform: [{ translateY: slideAnimationRef }] },
      ]}>
      <View style={styles.innerContainer}>
        <View
          style={successType ? styles.successTabLeft : styles.errorTabLeft}
        />
        {successType ? (
          <Icon
            size={45}
            color="green"
            name="check-circle"
            style={styles.icon}
          />
        ) : (
          <Icon size={45} color="red" name="times-circle" style={styles.icon} />
        )}
        <Text style={[regular.s, styles.messageText]}>{message}</Text>
        <Pressable
          style={({ pressed }) => [{ opacity: pressed ? 0.75 : 1 }]}
          onPress={handlePress}>
          <View style={styles.closeContainer}>
            <View style={styles.divider} />
            <Text style={[regular.m, styles.closeText]}>Close</Text>
          </View>
        </Pressable>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: config.colors.secondary,
    borderRadius: 10,
    position: "absolute",
    marginTop: 20,
    marginHorizontal: 16,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: config.colors.white,
  },
  innerContainer: {
    flexDirection: "row",
    height: 64,
    alignItems: "center",
  },
  closeContainer: {
    alignItems: "center",
    flexDirection: "row",
    height: 64,
  },
  closeText: {
    paddingHorizontal: 8,
  },
  messageText: {
    flex: 1,
  },
  divider: {
    backgroundColor: config.colors.secondary,
    width: 2,
    height: "100%",
  },
  icon: {
    paddingHorizontal: 8,
  },
  errorTabLeft: {
    backgroundColor: "red",
    width: 6,
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  successTabLeft: {
    backgroundColor: "green",
    width: 6,
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

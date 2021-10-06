import React from 'react';
import { ScrollView, ScrollViewProps, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';


export const PageScrollView: React.FC<ScrollViewProps & {
  /** Shortcut to apply the background color to the viewStyle. */
  backgroundColor?: string;
  /** The style of the inner view, where your children will be.
   *
   * You will most usually use this to apply the stylings. */
  viewStyle?: StyleProp<ViewStyle>; // Works with ScaledSheet.
}> = ({
  backgroundColor,
  contentContainerStyle,
  children,
  viewStyle,
  ...rest
}) => {
  return (<ScrollView
    overScrollMode='never'
    bounces={false}
    keyboardShouldPersistTaps='handled'
    contentContainerStyle={[
      styles.container,
      contentContainerStyle,
    ]}
    {...rest}
  >
    <View style={[styles.view, viewStyle, backgroundColor && { backgroundColor }]}>
      {children}
    </View>
  </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    // https://github.com/facebook/react-native/issues/4099#issuecomment-307541206
    // If using flex: 1, the screen would fill everything as intended, but the scroll
    // wouldn't work.
    flexGrow: 1,
  },
  view: {
    flex: 1,
  },
});
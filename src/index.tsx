import React from 'react';
import { FlatList, ScrollView, ScrollViewProps, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';


export const PageScrollView: React.FC<ScrollViewProps & {
  /** Shortcut to apply the background color to the viewStyle. */
  backgroundColor?: string;
  /** The style of the inner view, where your children will be.
   *
   * You will usually use this to apply the styles. */
  viewStyle?: StyleProp<ViewStyle>; // Works with ScaledSheet.
  /** If it shall use FlatList instead of ScrollView. Useful if there is an inner FlatList-like component,
   * as React Native complains when having a ScrollView Wrapping a VirtualList.
   *
   * It is designed to have the same behavior of the normal PageScrollView.
   *
   * Your children will be rendered in `ListFooterComponent`, inside a View with viewStyle prop. */
  flatList?: boolean
}> = ({
  backgroundColor,
  contentContainerStyle,
  children,
  viewStyle,
  flatList,
  ...rest
}) => {
  if (flatList)
    return (
      <FlatList
        renderItem={null}
        data={[]}
        contentContainerStyle={{ flexGrow: 1 }} // Required for footer to grow.
        ListFooterComponentStyle={{ flex: 1 }} // Same
        ListFooterComponent={() => (
          <View style={[viewStyle, !!backgroundColor && { backgroundColor }]}>{children}</View>
        )}
        bounces={false}
        overScrollMode='never'
        keyboardShouldPersistTaps='handled'
        nestedScrollEnabled
        {...rest}
      />
    );

  else
    return (<ScrollView
      bounces={false}
      overScrollMode='never'
      keyboardShouldPersistTaps='handled'
      contentContainerStyle={[styles.container, contentContainerStyle]}
      nestedScrollEnabled
      {...rest}
    >
      <View style={[styles.view, viewStyle, !!backgroundColor && { backgroundColor }]}>
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
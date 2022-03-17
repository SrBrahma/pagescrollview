import type React from 'react';
import type { FlatListProps, StyleProp, ViewStyle } from 'react-native';
import { FlatList, StyleSheet } from 'react-native';



export type PageScrollViewProps<T = unknown> = Partial<FlatListProps<T>> & {
  /** Shortcut to apply the background color to the viewStyle. */
  backgroundColor?: string;
  /** The style of the inner view, where your children will be.
   *
   * You will usually use this to apply the styles. */
  viewStyle?: StyleProp<ViewStyle>; // Works with ScaledSheet.
};

export const PageScrollView: React.FC<PageScrollViewProps> = ({
  backgroundColor,
  contentContainerStyle,
  children,
  viewStyle,
  ...rest
}) => {
  return (
    <FlatList
      contentContainerStyle={[styles.flexGrow, contentContainerStyle]}
      ListFooterComponentStyle={[styles.flex, !!backgroundColor && { backgroundColor }, viewStyle]}
      // If ListFooterComponent was function it would for example lose TextInput focus:
      // https://github.com/callstack/react-native-paper/issues/736#issuecomment-455680813
      ListFooterComponent={<>{children}</>}
      bounces={false}
      overScrollMode='never'
      keyboardShouldPersistTaps='handled'
      nestedScrollEnabled
      {...rest}
      renderItem={null}
      data={[]}
    />
  );
};


const styles = StyleSheet.create({
  flexGrow: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
});
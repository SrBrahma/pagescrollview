import type React from 'react';
import type { FlatListProps, StyleProp, ViewStyle } from 'react-native';
import { FlatList, StyleSheet } from 'react-native';



export type PageScrollViewProps = Omit<FlatListProps<unknown>,
  'ListFooterComponentStyle' | 'ListFooterComponent' | 'data' | 'renderItem' | 'style' | 'keyExtractor'
> & {
  /** Shortcut to apply the backgroundColor to the `style`. */
  backgroundColor?: string;
  /** The style of the View that wraps your children. Use this for styles such as paddings and
   * background color. */
  // Here just to improve the default comment.
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

export function PageScrollView({
  backgroundColor,
  contentContainerStyle,
  children,
  style,
  ...rest
}: PageScrollViewProps): JSX.Element {
  return (
    <FlatList
      contentContainerStyle={[styles.container, contentContainerStyle]}
      ListFooterComponentStyle={[styles.style, !!backgroundColor && { backgroundColor }, style]}
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
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  style: {
    flex: 1,
  },
});
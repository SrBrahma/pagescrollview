import type React from 'react';
import type { FlatListProps } from 'react-native';
import { FlatList, StyleSheet } from 'react-native';



export type PageScrollViewProps<T = unknown> = Partial<FlatListProps<T>> & {
  /** Shortcut to apply the background color to the `style`. */
  backgroundColor?: string;
};

export const PageScrollView: React.FC<PageScrollViewProps> = ({
  backgroundColor,
  contentContainerStyle,
  children,
  style,
  ...rest
}) => {
  return (
    <FlatList
      contentContainerStyle={[styles.flexGrow, contentContainerStyle]}
      // If ListFooterComponent was function it would for example lose TextInput focus:
      // https://github.com/callstack/react-native-paper/issues/736#issuecomment-455680813
      bounces={false}
      overScrollMode='never'
      keyboardShouldPersistTaps='handled'
      nestedScrollEnabled
      {...rest}
      style={[styles.flex, style, !!backgroundColor && { backgroundColor }]}
      renderItem={({ item }) => <>{item}</>}
      data={[children]}
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
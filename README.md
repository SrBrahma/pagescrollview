
<h1 align="center">
  <!-- <img src=".logo.png" alt=pagescrollview/><br/> -->
  pagescrollview
</h1>

<div align="center">

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![TypeScript](https://badgen.net/npm/types/env-var)](http://www.typescriptlang.org/)
[![npm](https://img.shields.io/npm/v/pagescrollview)](https://www.npmjs.com/package/pagescrollview)
[![npm](https://img.shields.io/npm/dw/pagescrollview)](https://www.npmjs.com/package/pagescrollview)
</div>

Very simple React Native / Expo ScrollView component that fills all the available area and have a working scrolling.

It fixes some very common issues in ScrollView: [1](https://github.com/facebook/react-native/issues/4099#issuecomment-307541206), [2](https://stackoverflow.com/questions/34880660/react-native-children-of-scrollview-wont-fill-full-height), [3](https://stackoverflow.com/questions/46805135/scrollview-with-flex-1-makes-it-un-scrollable), [4](https://github.com/facebook/react-native/issues/3825)

I did it because I kept copy-pasting this same component over different RN projects. No more!



It will also include those commonly used props as default in the ScrollView:

* `overScrollMode='never'` - Won't allow over scrolling.
* `bounces={false}` - Won't bounce when reaching an extreme.
* `keyboardShouldPersistTaps='handled'` - [Allows pressing pressables when Keyboard is open. Pressing a non-pressable area will dismiss the keyboard.](https://stackoverflow.com/a/57941568/10247962) - [You will still need to Keyboard.dismiss() to hide the keyboard when pressing a pressable.](https://stackoverflow.com/a/39772206/10247962)

Compatible with Web.

Implementation: [./src/index.tsx](./src/index.tsx)


# 💿 Installation
```bash
npm install pagescrollview
# or
yarn add pagescrollview
```


# 📖 Usage

> The usage is actually exactly how you would use the ScrollView, without having to deal with the said bugs above! This example is just to have something pretty in this simple lib!

```tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PageScrollView } from 'pagescrollview'

const items = 20;

export default () => {
  return (
    <PageScrollView backgroundColor='#ebf3f3' viewStyle={styles.viewStyle}>
      {[...Array(items)].map((_,i) => {
        const backgroundColor = `hsl(${Math.floor((360/items)*i)}, 90%, 62%)`
        return (<View key={i} style={[styles.itemView, { backgroundColor }]}>
          <Text style={styles.itemText}>{`${i+1}/${items}`}</Text>
        </View>)
      })}
    </PageScrollView>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    padding: 10,
  },
  itemView: {
    width: '100%',
    margin: 5,
    padding: 40,
  },
  itemText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
```

<img src="./resources/README/example.png" width="25%" height="25%" />

### 🍟 [Snack of the code above](https://snack.expo.io/@srbrahma/887706)
<!-- also in https://expo.io/@srbrahma/pagescrollview but snack seems better -->
## Type
```ts
PageScrollView: React.FC<ScrollViewProps & {
  /** Shortcut to apply the background color to the viewStyle. */
  backgroundColor?: string;
  /** The style of the inner view, where your children will be.
   *
   * You will usually use this to apply the styles. */
  viewStyle?: StyleProp<ViewStyle>;
}>
```
# 📰 [Changelog](CHANGELOG.md)

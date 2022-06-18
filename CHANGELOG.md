# Changelog

<!-- Template, # for major version, ## for minor and patch

# 1.0.0 (YYYY-MM-DD)
### Added
*
### Changed
*
### Fixed
*
-->

## 2.2.0 - 2022-06-18
* `backgroundColor` property now has style priority over `styles` property.
* `backgroundColor` now also changes `style` besides `ListFooterComponentStyle` to support iOS `bounces`, its overscroll mode to pull-to-refresh.

## 2.1.0 - 2022-06-18
* Removed the default `bounces={false}` property. It's a iOS option only and if it's false it won't enable RefreshControl on iOS for some reason.

## 2.0.0 - 2022-06-16
* Removed `flatList` property. It now always uses `FlatList` instead of `ScrollView`, to support common cases when wrapping another VirualList component (FlatList, SectionList).
* Removed wrapping `<View>` in `ListFooterComponent`, now wrapped by a Fragment. Its styles were moved to `ListFooterComponentStyle`.
* Removed `viewStyle`. You should now use the default `style`.

## 1.3.2 - 2022-02-04
* Added export of `PageScrollViewProps`

## 1.3.1 - 2022-01-26
* Changed `ListFooterComponent` from a function to component, when using `flatList` prop.

## 1.3.0 - 2022-01-26
* Added `flatList` prop, to use `FlatList` instead of `ScrollView`, as RN will complain when having
a ScrollView wrapping a VirtualList.

## 1.2.1 - 2021-10-05
* backgroundColor with priority over viewStyle **only if defined**.

## 1.2.0 - 2021-10-05
* backgroundColor with priority over viewStyle.

## 1.1.0 - 2021-09-01
* Added `keyboardShouldPersistTaps='handled'`
* Added GitHub Action to auto publish to npm

## 1.0.3 (2021-07-09)

* Updated npm README

# 1.0.0~2 (2021-07-04)

* Release

## 0.1.0 (2021-07-03)

* Project started

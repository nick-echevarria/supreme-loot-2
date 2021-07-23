import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = memoize((collectionUrlParam) => {
  return createSelector(
    [selectCollections],
    (collections) => collections ? collections[collectionUrlParam] : null
  );
});

// export const selectCollection = (collectionUrlParam) =>
//   createSelector([selectCollections], (collections) => {
//     return collections.find((collection) => {
//       return collection.routeName === collectionUrlParam;
//     });
//   });

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);

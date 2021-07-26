import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { createStructuredSelector } from "reselect";
import { fetchCollectionsStartAsync } from "../../redux/shop/shops.actions";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";
// import { updateCollections } from "../../redux/shop/shops.actions";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  // Promise-Style Version //
  // componentDidMount() {
  //   const { updateCollections } = this.props;
  //   const collectionRef = firestore.collection("collections");

  //   collectionRef.get().then((snapshot) => {
  //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //     updateCollections(collectionsMap);
  //     this.setState({ loading: false });
  //   });
  // }

  // Fetch-Style Version //
  // componentDidMount() {
  //   const { updateCollections } = this.props;
  //   const collectionRef = firestore.collection("collections");

  //   fetch("https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents/")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }

  render() {
    const { match, isCollectionFetching, isCollectionsLoaded } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionsLoaded} //We have to reverse it since selector uses !! to produce value
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

import React from "react";
import SafeAreaView from "react-native-safe-area-view";
import {
  StreamApp,
  FlatFeed,
  Activity,
  LikeButton,
  StatusUpdateForm
} from "expo-activity-feed";

const CustomActivity = props => {
  return <Activity {...props} Footer={<LikeButton {...props} />} />;
};

const Feed = ({ token }) => {
  console.log("feed init token:", token);
  return (
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: "always" }}>
      <StreamApp
        apiKey="tz7ht7p9pf8p"
        appId="53044"
        token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidXNlci1vbmUifQ.LjTWUNiUbwrIF60zkeAtayT9pLfbO-GBBT0oAVoUFvI"
      >
        <FlatFeed Activity={CustomActivity} notify />
        <StatusUpdateForm feedGroup="timeline" />
      </StreamApp>
    </SafeAreaView>
  );
};

export default Feed;

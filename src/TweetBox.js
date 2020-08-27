import React, { useState } from "react";
import "./TweetBox.css";
import db from "./firebase";

import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Zeeshan",
      userName: "cleverBanana",
      varified: true,
      text: tweetMessage,
      avatar:
        "https://scontent.fisb5-1.fna.fbcdn.net/v/t31.0-8/25531812_518269151863707_3093127063590304193_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=srBeg79tIQEAX-YaGcA&_nc_ht=scontent.fisb5-1.fna&oh=ee47f47b7078838e3f41307c00c56c21&oe=5F569B81",
      image: tweetImage,
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://scontent.fisb5-1.fna.fbcdn.net/v/t31.0-8/25531812_518269151863707_3093127063590304193_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=srBeg79tIQEAX-YaGcA&_nc_ht=scontent.fisb5-1.fna&oh=ee47f47b7078838e3f41307c00c56c21&oe=5F569B81" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="Whats Happening?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter Image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;

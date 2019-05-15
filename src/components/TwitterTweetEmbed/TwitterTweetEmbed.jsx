import React, { Component } from "react";
import PropTypes from "prop-types";
import TWITTER_WIDGET_JS from "../TwitterWidgetJS";

class TwitterTweetEmbed extends Component {

    componentDidMount() {
        let that = this;
        let script = require("scriptjs");
        script(TWITTER_WIDGET_JS, function() {
            if(!window.twttr) {
                console.error('Twitter Widgets JS not initialized, aborting');
                return;
            }
            window.twttr.widgets.createTweet(
                that.props.id,
                that.refs.twitterMomentContainer,
                that.props.options
            );
        });
    }

    render() {
        return(
            <div ref="twitterMomentContainer" />
        );
    }
}

TwitterTweetEmbed.propTypes = {
    /**
     * Tweet ID. E.g. 933354946111705097
     */
    id: PropTypes.number,

    /**
     * Embedded Tweet Options: https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference
     */
    options: PropTypes.object
};

export default TwitterTweetEmbed;

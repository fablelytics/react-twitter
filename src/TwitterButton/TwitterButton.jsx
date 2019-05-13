import React, { Component } from "react";
import PropTypes from "prop-types";
import TWITTER_WIDGET_JS from "../TwitterWidgetJS";

class TwitterButton extends Component {

    componentDidMount() {
        let that = this;
        let script = require("scriptjs");
        script(TWITTER_WIDGET_JS, function() {
            if(!window.twttr) {
                console.error('Twitter Widgets JS not initialized, aborting');
                return;
            }
            if(that.props.hashtag) {
                window.twttr.widgets.createHashtagButton(
                    that.props.hashtag,
                    that.refs.twitterShareContainer,
                    that.props.options
                )
            } else if(that.props.mention) {
                window.twttr.widgets.createMentionButton(
                    that.props.mention,
                    that.refs.twitterShareContainer,
                    that.props.options
                )
            } else if(that.props.follow) {
                window.twttr.widgets.createFollowButton(
                    that.props.follow,
                    that.refs.twitterShareContainer,
                    that.props.options
                )
            } else if(that.props.dm) {
                window.twttr.widgets.createDMButton(
                    that.props.dm,
                    that.refs.twitterShareContainer,
                    that.props.options
                )
            } else {
                window.twttr.widgets.createShareButton(
                    that.props.tweet,
                    that.refs.twitterShareContainer,
                    that.props.options
                )
            }
        });
    }

    render() {
        return(
            <div ref="twitterShareContainer" />
        );
    }
}

TwitterButton.propTypes = {
    /**
     * Hashtag to include in tweet. Do not include pound symbol. E.g. cybersecurity
     */
    hashtag: PropTypes.string,

    /**
     * Mention username in the tweet. E.g. _kunalnagar
     */
    mention: PropTypes.string,
    /**
     * Follow username. E.g. _kunalnagar
     */
    follow: PropTypes.string,
    /**
     * Direct message user ID (not username). E.g. 73747822
     */
    dm: PropTypes.number,
    /**
     * Tweet username. E.g. _kunalnagar
     */
    tweet: PropTypes.string,
    /**
     * Twitter API Options. Available here: https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/scripting-factory-functions
     */
    options: PropTypes.object
};

export default TwitterButton;

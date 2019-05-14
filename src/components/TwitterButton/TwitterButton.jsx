import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TWITTER_WIDGET_JS from '../TwitterWidgetJS';

class TwitterButton extends Component {

    componentDidMount() {
        let that = this;
        let script = require('scriptjs');
        script(TWITTER_WIDGET_JS, function() {
            if(!window.twttr) {
                console.error('Twitter Widgets JS not initialized, aborting');
                return;
            }
            let _sourceType = '';
            let _method = '';
            if(that.props.hashtag) {
                _sourceType = that.props.hashtag;
                _method = 'createHashtagButton';
            } else if(that.props.mention) {
                _sourceType = that.props.mention;
                _method = 'createMentionButton';
            } else if(that.props.follow) {
                _sourceType = that.props.follow;
                _method = 'createFollowButton';
            } else if(that.props.dm) {
                _sourceType = that.props.dm;
                _method = 'createDMButton';
            } else if(that.props.periscope) {
                _sourceType = that.props.periscope;
                _method = 'createPeriscopeOnAirButton';
            } else if(that.props.tweet) {
                _sourceType = that.props.tweet;
                _method = 'createShareButton';
            } else {
                _sourceType = '_kunalnagar';
                _method = 'createFollowButton';
            }
            window.twttr.widgets[_method](
                _sourceType,
                that.refs.twitterShareContainer,
                that.props.options
            )
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
     * Periscope username. E.g. KatmaiNPS
     */
    periscope: PropTypes.string,

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

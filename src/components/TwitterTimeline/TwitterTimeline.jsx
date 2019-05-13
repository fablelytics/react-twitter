import React, { Component } from "react";
import PropTypes from "prop-types";
import TWITTER_WIDGET_JS from "../TwitterWidgetJS";

class TwitterTimeline extends Component {

    componentDidMount() {
        let that = this;
        let script = require("scriptjs");
        script(TWITTER_WIDGET_JS, function() {
            if(!window.twttr) {
                console.error('Twitter Widgets JS not initialized, aborting');
                return;
            }
            let _obj = {};
            _obj.sourceType = that.props.sourceType;
            if(that.props.sourceType === 'list') {
                _obj.ownerScreenName = that.props.screenName;
                _obj.slug = that.props.slug;
            } else if(that.props.sourceType === 'collection') {
                _obj.id = that.props.id;
            } else {
                _obj.screenName = that.props.screenName;
            }
            window.twttr.widgets.createTimeline(
                _obj,
                that.refs.twitterTimelineContainer,
                that.props.options
            );
        });
    }

    render() {
        return(
            <div ref="twitterTimelineContainer" />
        );
    }
}

TwitterTimeline.propTypes = {
    /**
     * Timeline source. E.g. profile
     */
    sourceType: PropTypes.string,

    /**
     * Timeline source (Likes). E.g. profile
     */
    slug: PropTypes.string,

    /**
     * Twitter username. E.g. _kunalnagar
     */
    screenName: PropTypes.string,

    /**
     * Collection ID. E.g. 539487832448843776
     */
    id: PropTypes.string,

    /**
     * Timeline Profile Options. Available here: https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference
     */
    options: PropTypes.object
};

export default TwitterTimeline;

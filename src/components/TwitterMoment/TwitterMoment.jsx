import React, { Component } from "react";
import PropTypes from "prop-types";
import TWITTER_WIDGET_JS from "../TwitterWidgetJS";

class TwitterMoment extends Component {

    componentDidMount() {
        let that = this;
        let script = require("scriptjs");
        script(TWITTER_WIDGET_JS, function() {
            if(!window.twttr) {
                console.error('Twitter Widgets JS not initialized, aborting');
                return;
            }
            window.twttr.widgets.createMoment(
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

TwitterMoment.propTypes = {
    /**
     * Moment ID. E.g. 650667182356082688
     */
    id: PropTypes.number,

    /**
     * Timeline Profile Options.
     */
    options: PropTypes.object
};

export default TwitterMoment;

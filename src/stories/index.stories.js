import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import TwitterButton from "../../src/TwitterButton/TwitterButton.jsx";

storiesOf('Twitter Button', module)
    .add(
        'Hashtag',
        withInfo({
          text: 'Twitter Hashtag'
        })(() => (
            <TwitterButton
                hashtag="#cybersecurity"
                options={{ size: "large" }}
            />
        ))
    )
    .add(
        'Mention',
        withInfo({
          text: 'Twitter Mention'
        })(() => (
            <TwitterButton
                mention="_kunalnagar"
                options={{ size: "large" }}
            />
        ))
    )
    .add(
        'Follow',
        withInfo({
          text: 'Twitter Follow'
        })(() => (
            <div>
                <TwitterButton
                    follow="_kunalnagar"
                    options={{ size: "large" }}
                />
                <TwitterButton
                    follow="_kunalnagar"
                    options={{ size: "large", count: "none" }}
                />
            </div>
        ))
    )
    .add(
        'Direct message',
        withInfo({
          text: 'Twitter Direct Message'
        })(() => (
            <TwitterButton
                dm="73747822"
                options={{ size: "large" }}
            />
        ))
    )
    .add(
        'Tweet',
        withInfo({
          text: 'Twitter Tweet'
        })(() => (
            <TwitterButton
                tweet="_kunalnagar"
                options={{ size: "large" }}
            />
        ))
    );

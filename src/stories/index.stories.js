import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import TwitterButton from '../../src/components/TwitterButton/TwitterButton.jsx';
import TwitterTimeline from '../../src/components/TwitterTimeline/TwitterTimeline.jsx';
import TwitterMoment from '../../src/components/TwitterMoment/TwitterMoment.jsx';
import TwitterTweetEmbed from '../../src/components/TwitterTweetEmbed/TwitterTweetEmbed.jsx';

storiesOf('Twitter Button', module)
    .add(
        'Hashtag',
        withInfo({
          text: 'Twitter Hashtag'
        })(() => (
            <TwitterButton
                hashtag='#cybersecurity'
                options={{ size: 'large' }}
            />
        ))
    )
    .add(
        'Mention',
        withInfo({
          text: 'Twitter Mention'
        })(() => (
            <TwitterButton
                mention='_kunalnagar'
                options={{ size: 'large' }}
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
                    follow='_kunalnagar'
                    options={{ size: 'large' }}
                />
                <TwitterButton
                    follow='_kunalnagar'
                    options={{ size: 'large', count: 'none' }}
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
                dm={73747822}
                options={{ size: 'large' }}
            />
        ))
    )
    .add(
        'Tweet',
        withInfo({
          text: 'Twitter Tweet'
        })(() => (
            <TwitterButton
                tweet='_kunalnagar'
                options={{ size: 'large' }}
            />
        ))
    )
    .add(
        'Periscope',
        withInfo({
          text: 'Periscope'
        })(() => (
            <TwitterButton
                periscope='KatmaiNPS'
                options={{ size: 'large' }}
            />
        ))
    );

storiesOf('Twitter Timeline', module)
    .add(
        'Profile',
        withInfo({
          text: 'Twitter Profile'
        })(() => (
            <TwitterTimeline
                sourceType='profile'
                screenName='_kunalnagar'
            />
        ))
    )
    .add(
        'List',
        withInfo({
          text: 'Twitter List'
        })(() => (
            <TwitterTimeline
                sourceType='list'
                slug='national-parks'
                screenName='TwitterDev'
            />
        ))
    )
    .add(
        'Likes',
        withInfo({
          text: 'Twitter Likes'
        })(() => (
            <TwitterTimeline
                sourceType='likes'
                screenName='_kunalnagar'
            />
        ))
    )
    .add(
        'Parameterized Profile',
        withInfo({
          text: 'Twitter Profile with Parameters'
        })(() => (
            <TwitterTimeline
                sourceType='profile'
                screenName='_kunalnagar'
                options={{
                    height: 400,
                    chrome: "nofooter",
                    linkColor: "#820bbb",
                    borderColor: "#a80000"
                }}
            />
        ))
    )
    .add(
        'Collections',
        withInfo({
          text: 'Twitter Timeline Collections'
        })(() => (
            <TwitterTimeline
                sourceType='collection'
                id='539487832448843776'
            />
        ))
    )

storiesOf('Twitter Moment', module)
    .add(
        'Moment',
        withInfo({
          text: 'Twitter Moment'
        })(() => (
            <TwitterMoment
                id='650667182356082688'
                options={{ limit: 3 }}
            />
        ))
    )

storiesOf('Twitter Tweet Embed', module)
    .add(
        'Tweet Embed',
        withInfo({
          text: 'Twitter Tweet Embed'
        })(() => (
            <TwitterTweetEmbed
                id='933354946111705097'
            />
        ))
    )
    .add(
        'Tweet Media Embed',
        withInfo({
          text: 'Twitter Tweet Media Embed'
        })(() => (
            <TwitterTweetEmbed
                id='1083592734038929408'
            />
        ))
    )
    .add(
        'Tweet Media Embed (hidden media)',
        withInfo({
          text: 'Twitter Tweet Media Embed (hidden media)'
        })(() => (
            <TwitterTweetEmbed
                id='1083592734038929408'
                options={{
                    cards: 'hidden'
                }}
            />
        ))
    )
    .add(
        'Tweet Media Embed (video)',
        withInfo({
          text: 'Twitter Tweet Media Embed (video)'
        })(() => (
            <TwitterTweetEmbed
                id='560070183650213889'
            />
        ))
    )

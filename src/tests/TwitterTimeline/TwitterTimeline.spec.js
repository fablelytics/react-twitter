import React from 'react';
import { configure, mount } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16'
import TwitterTimeline from '../../components/TwitterTimeline/TwitterTimeline.jsx';

configure({ adapter: new Adapter() });

describe('Twitter Timeline', () => {

    it('should create a twitter timeline from profile', () => {
        const wrapper = mount(
            <TwitterTimeline
                sourceType='profile'
                screenName='_kunalnagar'
            />
        );
        expect(wrapper.props().sourceType).to.exist;
        expect(wrapper.props().sourceType).to.equal('profile');
        expect(wrapper.props().screenName).to.exist;
        expect(wrapper.props().screenName).to.equal('_kunalnagar');
    });

    it('should create a twitter timeline from list', () => {
        const wrapper = mount(
            <TwitterTimeline
                sourceType='list'
                slug='national-parks'
                screenName='TwitterDev'
            />
        );
        expect(wrapper.props().sourceType).to.exist;
        expect(wrapper.props().sourceType).to.equal('list');
        expect(wrapper.props().slug).to.exist;
        expect(wrapper.props().slug).to.equal('national-parks');
        expect(wrapper.props().screenName).to.exist;
        expect(wrapper.props().screenName).to.equal('TwitterDev');
    });

    it('should create a twitter timeline from likes', () => {
        const wrapper = mount(
            <TwitterTimeline
                sourceType='likes'
                screenName='_kunalnagar'
            />
        );
        expect(wrapper.props().sourceType).to.exist;
        expect(wrapper.props().sourceType).to.equal('likes');
        expect(wrapper.props().screenName).to.exist;
        expect(wrapper.props().screenName).to.equal('_kunalnagar');
    });

    it('should create a parameterized twitter timeline', () => {
        const wrapper = mount(
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
        );
        expect(wrapper.props().sourceType).to.exist;
        expect(wrapper.props().sourceType).to.equal('profile');
        expect(wrapper.props().screenName).to.exist;
        expect(wrapper.props().screenName).to.equal('_kunalnagar');
        expect(wrapper.props().options).to.have.property('height');
        expect(wrapper.props().options.height).to.be.a('number');
        expect(wrapper.props().options.height).to.equal(400);
        expect(wrapper.props().options).to.have.property('chrome');
        expect(wrapper.props().options.chrome).to.equal('nofooter');
        expect(wrapper.props().options).to.have.property('linkColor');
        expect(wrapper.props().options.linkColor).to.equal('#820bbb');
        expect(wrapper.props().options).to.have.property('borderColor');
        expect(wrapper.props().options.borderColor).to.equal('#a80000');
    });

    it('should create a twitter timeline from collections', () => {
        const wrapper = mount(
            <TwitterTimeline
                sourceType='collection'
                id={539487832448843776}
            />
        );
        expect(wrapper.props().sourceType).to.exist;
        expect(wrapper.props().sourceType).to.equal('collection');
        expect(wrapper.props().id).to.exist;
        expect(wrapper.props().id).to.be.a('number');
        expect(wrapper.props().id).to.equal(539487832448843776);
    });

});

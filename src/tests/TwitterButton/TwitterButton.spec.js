import React from 'react';
import { configure, mount } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16'
import TwitterButton from '../../components/TwitterButton/TwitterButton.jsx';

configure({ adapter: new Adapter() });

describe('Twitter Button', () => {

    describe('Twitter Hashtag button', () => {
        it('should create a hashtag button', () => {
            const wrapper = mount(
                <TwitterButton
                    hashtag='#cybersecurity'
                />
            );
            expect(wrapper.props().hashtag).to.exist;
            expect(wrapper.props().hashtag).to.equal('#cybersecurity');
        });
    });

    describe('Twitter Mention button', () => {
        it('should create a mention button', () => {
            const wrapper = mount(
                <TwitterButton
                    mention='_kunalnagar'
                />
            );
            expect(wrapper.props().mention).to.exist;
            expect(wrapper.props().mention).to.equal('_kunalnagar');
        });
    });

    describe('Twitter Follow button', () => {
        it('should create a normal follow button', () => {
            const wrapper = mount(<TwitterButton follow="_kunalnagar" />);
            expect(wrapper.props().follow).to.exist;
            expect(wrapper.props().follow).to.equal('_kunalnagar');
        });
        it('should create a large follow button', () => {
            const wrapper = mount(
                <TwitterButton
                    follow="_kunalnagar"
                    options={{ size: "large" }}
                />
            );
            expect(wrapper.props().follow).to.exist;
            expect(wrapper.props().follow).to.equal('_kunalnagar');
            expect(wrapper.props().options).to.exist;
            expect(wrapper.props().options).to.have.property('size');
            expect(wrapper.props().options.size).to.equal('large');
        });
        it('should create a normal follow button without count', () => {
            const wrapper = mount(
                <TwitterButton
                    follow="_kunalnagar"
                    options={{ size: "large", count: "none" }}
                />
            );
            expect(wrapper.props().options).to.exist;
            expect(wrapper.props().options).to.have.property('count');
            expect(wrapper.props().options.count).to.equal('none');
        });
    });

    describe('Twitter Direct Message button', () => {
        it('should create a direct message button', () => {
            const wrapper = mount(
                <TwitterButton
                    dm={73747822}
                />
            );
            expect(wrapper.props().dm).to.exist;
            expect(wrapper.props().dm).to.be.a('number');
            expect(wrapper.props().dm).to.equal(73747822);
        });
    });

    describe('Twitter Tweet button', () => {
        it('should create a tweet button', () => {
            const wrapper = mount(
                <TwitterButton
                    tweet="_kunalnagar"
                />
            );
            expect(wrapper.props().tweet).to.exist;
            expect(wrapper.props().tweet).to.equal('_kunalnagar');
        });
    });

    describe('Twitter Periscope (On-Air) button', () => {
        it('should create a Periscope (on-air) button', () => {
            const wrapper = mount(
                <TwitterButton
                    periscope='KatmaiNPS'
                />
            );
            expect(wrapper.props().periscope).to.exist;
            expect(wrapper.props().periscope).to.equal('KatmaiNPS');
        });
    });

});

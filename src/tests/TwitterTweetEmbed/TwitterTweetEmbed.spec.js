import React from 'react';
import { configure, mount } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16'
import TwitterTweetEmbed from '../../components/TwitterTweetEmbed/TwitterTweetEmbed.jsx';

configure({ adapter: new Adapter() });

describe('Twitter Tweet Embed', () => {

    it('should create a normal twitter tweet embed', () => {
        const wrapper = mount(
            <TwitterTweetEmbed
                id={933354946111705097}
            />
        );
        expect(wrapper.props().id).to.exist;
        expect(wrapper.props().id).to.be.a('number');
        expect(wrapper.props().id).to.equal(933354946111705097);
    });

    it('should create a twitter media tweet embed with hidden card', () => {
        const wrapper = mount(
            <TwitterTweetEmbed
                id={1083592734038929408}
                options={{
                    cards: 'hidden'
                }}
            />
        );
        expect(wrapper.props().id).to.exist;
        expect(wrapper.props().id).to.be.a('number');
        expect(wrapper.props().id).to.equal(1083592734038929408);
        expect(wrapper.props().options).to.have.property('cards');
        expect(wrapper.props().options.cards).to.equal('hidden');
    });

});

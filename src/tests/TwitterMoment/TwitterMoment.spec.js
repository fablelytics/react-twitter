import React from 'react';
import { configure, mount } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16'
import TwitterMoment from '../../components/TwitterMoment/TwitterMoment.jsx';

configure({ adapter: new Adapter() });

describe('Twitter Moment', () => {

    it('should create a twitter moment', () => {
        const wrapper = mount(
            <TwitterMoment
                id={650667182356082688}
                options={{ limit: 3 }}
            />
        );
        expect(wrapper.props().id).to.exist;
        expect(wrapper.props().id).to.be.a('number');
        expect(wrapper.props().id).to.equal(650667182356082688);
        expect(wrapper.props().options).to.have.property('limit');
        expect(wrapper.props().options.limit).to.equal(3);
    });

});

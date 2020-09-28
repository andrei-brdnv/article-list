import React from 'react'
import Enzyme, {render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ArticleList from './index'
import mockedArticles from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() });

describe('ArticleList', () => {
    it('should render', () => {
        const wrapper = render(
            <ArticleList articles={mockedArticles}/>
        )

        expect(wrapper.find('article-list__li').length)
            .toEqual(7)
    });
});
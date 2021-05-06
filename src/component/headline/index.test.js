import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";


const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('checking proptypes',()=>{

  describe('should not throw warning',()=>{
  
    it('should not throw warning',()=>{

      const expectedProps = {
        header:'test',
        desc:'test desc',
        tempArr:[{
        fname:'john',
        lname:'blogs',
        email:'jonhblogs@email.com',
        age:24,
        onlineStatus:true

        }]
      };

      const propError = checkPropTypes(Headline.propTypes,expectedProps,'props',Headline.name);

      expect(propsError).toBeUndefined();

    })

  })
})

describe("Headline comp", () => {
  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test",
        desc: "desc",
      };
      wrapper = setup(props);
    });

    it("should render headline", () => {
      let headline = wrapper.find(".headlineComponent");
      expect(headline.length).toBe(1);
    });

    it("should render h1", () => {
      let header = wrapper.find(".header");
      expect(header.length).toBe(1);
    });

    it("should render desc", () => {
      let desc = wrapper.find(".header");
      expect(desc.length).toBe(1);
    });
  });

  describe("Have no  props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup();
    });
    it("should not render headline", () => {
      let headline = wrapper.find(".headlineComponent");
      expect(headline.length).toBe(0);
    });
  });
});

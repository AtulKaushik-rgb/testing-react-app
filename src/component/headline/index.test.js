import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

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
      let headline = wrapper.find('.headlineComponent')
      expect(headline.length).toBe(1);
    });

    it("should render h1", () => {
      let header = wrapper.find('.header')
      expect(header.length).toBe(1);
    });

    it("should render desc", () => {
      let desc = wrapper.find('.header')
      expect(desc.length).toBe(1);
    });


  });

  describe("Have no  props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup();
    });
    it("should not render headline", () => {
      let headline = wrapper.find('.headlineComponent')
      expect(headline.length).toBe(0);
    });

  });
});

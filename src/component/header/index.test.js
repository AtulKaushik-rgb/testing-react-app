import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import {findByTestAttr} from './../../../Utils/index'

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

// const findByTestAttr = (component,attr) =>{
//   const wrapper = component.find(`[data-test = ${attr}]`)
//   return wrapper;
// }

describe("header component", () => {
  let component = null;

  beforeEach(() => {
    component = setUp();
  });

  it("it should render without errors", () => {
    //const wrapper = findByTestAttr(component,'headerComponent');
    const wrapper = component.find('.headerComponent')
    expect(wrapper.length).toBe(1);
  });

  it("should render a logo", () => {
    //const logo = findByTestAttr(component,'logoPNG');
    const logo = component.find('.logoPNG')
    expect(logo.length).toBe(1);
  });
});

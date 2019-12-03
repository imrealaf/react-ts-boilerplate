import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { BrowserRouter as Router } from "react-router-dom";
import App from "../components/App";

configure({ adapter: new Adapter() });

describe("<App />", () => {
  const app = (
    <Router>
      <App />
    </Router>
  );

  it("renders without crashing", () => {
    const wrapper = mount(app);
    wrapper.unmount();
  });

  it("receives location prop from route and sets data-attribute to DOM", () => {
    const wrapper = shallow(app);
    setTimeout(() => {
      expect(wrapper.prop("location")).toBeInstanceOf("object");
      expect(document.body.dataset.route).toBeInstanceOf("string");
    });
  });
});

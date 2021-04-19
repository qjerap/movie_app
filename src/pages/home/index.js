import React from "react";

import Header from "./header";
import Section from "./section";

export default () => {
  return (
    <div>
      <Header />
      <Section title="New Releases" />
      <Section title="TV Shows" />
      <Section title="Most appreciated" />
    </div>
  );
};

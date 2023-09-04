import React from "react";
import Content from "../../components/Home/Content";
import Screen from "../../components/common/Screen";

const Home: React.FC<{}> = () => {
  return <Screen children={<Content />} />
};

export default Home;

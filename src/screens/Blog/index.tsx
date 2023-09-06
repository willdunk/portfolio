import React from "react";
import Screen from "../../components/common/Screen";
import List from "../../components/Blog/List";

const Blog: React.FC<{}> = () => {
  return <Screen children={<List />} />
};

export default Blog;

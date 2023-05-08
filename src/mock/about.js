import Mock from "mockjs";
Mock.mock("/api/about", "get", {
  code: 0,
  msg: "",
  data: "https://blog.csdn.net/m0_50739915?spm=1000.2115.3001.5343",
});
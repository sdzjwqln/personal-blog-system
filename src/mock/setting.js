import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "https://w.wallhaven.cc/full/l3/wallhaven-l3xk6q.jpg",
    siteTitle: "我的个人空间",
    github: "https://gitee.com/there-are-loquat-trees",
    qq: "1004670741",
    qqQrCode: "http://www.duyiedu.com/source/img/%E5%B0%8F%E6%B8%A1%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
    weixin: "tt1984_",
    weixinQrCode: "http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
    mail: "tt19872022@163.com",
    icp: "黑ICP备17001719号",
    githubName: "庭有枇杷树",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
});
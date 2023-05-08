import Mock from "mockjs";
import qs from "querystring";

Mock.mock("/api/message", "post", {
  code: 0,
  msg: "",
  data: {
    id: "@guid",
    nickname: "@cname",
    content: "@cparagraph(1, 10)",
    createDate: Date.now(),
    "avatar|1": [
      "https://img1.baidu.com/it/u=3980915418,1248031224&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
      "https://img2.baidu.com/it/u=1979952864,1020128620&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
      "https://img0.baidu.com/it/u=659407261,3805446612&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
      "https://img2.baidu.com/it/u=4273261164,3818698&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    ],
  },
});

Mock.mock(/^\/api\/message\/?(\?.+)?$/, "get", function (options) {
  const query = qs.parse(options.url);

  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      total: 52,
      [`rows|${query.limit || 10}`]: [{
        id: "@guid",
        nickname: "@cname",
        content: "@cparagraph(1, 10)",
        createDate: Date.now(),
        "avatar|1": [
          "https://img1.baidu.com/it/u=3980915418,1248031224&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          "https://img2.baidu.com/it/u=1979952864,1020128620&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          "https://img0.baidu.com/it/u=659407261,3805446612&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          "https://img2.baidu.com/it/u=4273261164,3818698&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        ],
      }, ],
    },
  });
});
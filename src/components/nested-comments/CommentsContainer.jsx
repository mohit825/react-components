import React from "react";
import Comments from "./comments";

const commentData = [
  {
    userName: "User1",
    comment: "Lorem Ipsum sit amer dit aret",
    replies: [
      {
        userName: "User2",
        comment: "Lorem Ipsum sit amer dit aret",
        replies: [
          {
            userName: "User4",
            comment: "Lorem Ipsum sit amer dit aret",
            replies: [
              {
                userName: "User4",
                comment: "Lorem Ipsum sit amer dit aret",
                replies: [],
              },
              {
                userName: "User4",
                comment: "Lorem Ipsum sit amer dit aret",
                replies: [],
              },
              {
                userName: "User4",
                comment: "Lorem Ipsum sit amer dit aret",
                replies: [
                  {
                    userName: "User4",
                    comment: "Lorem Ipsum sit amer dit aret",
                    replies: [
                      {
                        userName: "User4",
                        comment: "Lorem Ipsum sit amer dit aret",
                        replies: [
                          {
                            userName: "User4",
                            comment: "Lorem Ipsum sit amer dit aret",
                            replies: [
                              {
                                userName: "User4",
                                comment: "Lorem Ipsum sit amer dit aret",
                                replies: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    userName: "User3",
    comment: "Lorem Ipsum sit amer dit aret",
    replies: [
      {
        userName: "User5",
        comment: "Lorem Ipsum sit amer dit aret",
        replies: [],
      },
    ],
  },
];

const CommentsContainer = () => {
  return <Comments data={commentData} />;
};

export default CommentsContainer;

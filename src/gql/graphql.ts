/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any };
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any };
};

export type Comment = {
  __typename?: "Comment";
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["Int"]["output"];
  post: Post;
  text: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  user: User;
};

export type ErrorType = {
  __typename?: "ErrorType";
  code?: Maybe<Scalars["String"]["output"]>;
  message: Scalars["String"]["output"];
};

export type Like = {
  __typename?: "Like";
  id: Scalars["Int"]["output"];
  postId: Scalars["Int"]["output"];
  userId: Scalars["Int"]["output"];
};

export type LoginDto = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type LoginResponse = {
  __typename?: "LoginResponse";
  error?: Maybe<ErrorType>;
  user: User;
};

export type Mutation = {
  __typename?: "Mutation";
  createComment: Comment;
  createPost: Post;
  deleteComment: Comment;
  deletePost: Post;
  likePost: Like;
  login: LoginResponse;
  logout: Scalars["String"]["output"];
  refreshToken: Scalars["String"]["output"];
  register: RegisterResponse;
  unlikePost: Like;
  updateUserProfile: User;
};

export type MutationCreateCommentArgs = {
  postId: Scalars["Float"]["input"];
  text: Scalars["String"]["input"];
};

export type MutationCreatePostArgs = {
  text: Scalars["String"]["input"];
  video: Scalars["Upload"]["input"];
};

export type MutationDeleteCommentArgs = {
  id: Scalars["Float"]["input"];
};

export type MutationDeletePostArgs = {
  id: Scalars["Float"]["input"];
};

export type MutationLikePostArgs = {
  postId: Scalars["Float"]["input"];
};

export type MutationLoginArgs = {
  loginInput: LoginDto;
};

export type MutationRegisterArgs = {
  registerInput: RegisterDto;
};

export type MutationUnlikePostArgs = {
  postId: Scalars["Float"]["input"];
};

export type MutationUpdateUserProfileArgs = {
  bio?: InputMaybe<Scalars["String"]["input"]>;
  fullname?: InputMaybe<Scalars["String"]["input"]>;
  image?: InputMaybe<Scalars["Upload"]["input"]>;
};

export type Post = {
  __typename?: "Post";
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["Int"]["output"];
  likes?: Maybe<Array<Like>>;
  text: Scalars["String"]["output"];
  user: User;
  video: Scalars["String"]["output"];
};

export type PostDetails = {
  __typename?: "PostDetails";
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["Int"]["output"];
  likes?: Maybe<Array<Like>>;
  otherPostIds?: Maybe<Array<Scalars["Float"]["output"]>>;
  text: Scalars["String"]["output"];
  user: User;
  video: Scalars["String"]["output"];
};

export type Query = {
  __typename?: "Query";
  getCommentsByPostId: Array<Comment>;
  getPostById: PostDetails;
  getPosts: Array<Post>;
  getPostsByUserId: Array<Post>;
  getUsers: Array<User>;
};

export type QueryGetCommentsByPostIdArgs = {
  postId: Scalars["Float"]["input"];
};

export type QueryGetPostByIdArgs = {
  id: Scalars["Float"]["input"];
};

export type QueryGetPostsArgs = {
  skip?: Scalars["Int"]["input"];
  take?: Scalars["Int"]["input"];
};

export type QueryGetPostsByUserIdArgs = {
  userId: Scalars["Float"]["input"];
};

export type RegisterDto = {
  confirmPassword: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  fullname: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type RegisterResponse = {
  __typename?: "RegisterResponse";
  error?: Maybe<ErrorType>;
  user?: Maybe<User>;
};

export type User = {
  __typename?: "User";
  bio?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  email: Scalars["String"]["output"];
  fullname: Scalars["String"]["output"];
  id: Scalars["Float"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  password: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
};

export type CreateCommentMutationVariables = Exact<{
  text: Scalars["String"]["input"];
  postId: Scalars["Float"]["input"];
}>;

export type CreateCommentMutation = {
  __typename?: "Mutation";
  createComment: {
    __typename?: "Comment";
    text: string;
    id: number;
    createdAt: any;
    user: { __typename?: "User"; id: number; fullname: string; email: string };
    post: { __typename?: "Post"; id: number; text: string; video: string };
  };
};

export type CreatePostMutationVariables = Exact<{
  text: Scalars["String"]["input"];
  video: Scalars["Upload"]["input"];
}>;

export type CreatePostMutation = {
  __typename?: "Mutation";
  createPost: { __typename?: "Post"; id: number; text: string; video: string };
};

export type DeleteCommentMutationVariables = Exact<{
  id: Scalars["Float"]["input"];
}>;

export type DeleteCommentMutation = {
  __typename?: "Mutation";
  deleteComment: { __typename: "Comment"; id: number };
};

export type LikePostMutationVariables = Exact<{
  postId: Scalars["Float"]["input"];
}>;

export type LikePostMutation = {
  __typename?: "Mutation";
  likePost: { __typename?: "Like"; id: number; userId: number; postId: number };
};

export type LoginUserMutationVariables = Exact<{
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}>;

export type LoginUserMutation = {
  __typename?: "Mutation";
  login: {
    __typename?: "LoginResponse";
    user: { __typename?: "User"; email: string; id: number; fullname: string };
  };
};

export type LogoutUserMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutUserMutation = { __typename?: "Mutation"; logout: string };

export type RegisterUserMutationVariables = Exact<{
  fullname: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  confirmPassword: Scalars["String"]["input"];
}>;

export type RegisterUserMutation = {
  __typename?: "Mutation";
  register: {
    __typename?: "RegisterResponse";
    user?: {
      __typename?: "User";
      id: number;
      fullname: string;
      email: string;
    } | null;
  };
};

export type UnlikePostMutationVariables = Exact<{
  postId: Scalars["Float"]["input"];
}>;

export type UnlikePostMutation = {
  __typename?: "Mutation";
  unlikePost: {
    __typename?: "Like";
    id: number;
    userId: number;
    postId: number;
  };
};

export type UpdateUserProfileMutationVariables = Exact<{
  fullname: Scalars["String"]["input"];
  bio: Scalars["String"]["input"];
  image?: InputMaybe<Scalars["Upload"]["input"]>;
}>;

export type UpdateUserProfileMutation = {
  __typename?: "Mutation";
  updateUserProfile: {
    __typename?: "User";
    id: number;
    fullname: string;
    bio?: string | null;
    image?: string | null;
  };
};

export type GetCommentsByPostIdQueryVariables = Exact<{
  postId: Scalars["Float"]["input"];
}>;

export type GetCommentsByPostIdQuery = {
  __typename?: "Query";
  getCommentsByPostId: Array<{
    __typename?: "Comment";
    id: number;
    text: string;
    createdAt: any;
    user: {
      __typename?: "User";
      id: number;
      fullname: string;
      email: string;
      image?: string | null;
    };
    post: { __typename?: "Post"; id: number; text: string; video: string };
  }>;
};

export type GetPostByIdQueryVariables = Exact<{
  id: Scalars["Float"]["input"];
}>;

export type GetPostByIdQuery = {
  __typename?: "Query";
  getPostById: {
    __typename?: "PostDetails";
    id: number;
    text: string;
    video: string;
    createdAt: any;
    otherPostIds?: Array<number> | null;
    user: { __typename?: "User"; id: number; email: string; fullname: string };
    likes?: Array<{
      __typename?: "Like";
      id: number;
      userId: number;
      postId: number;
    }> | null;
  };
};

export type GetPostsQueryVariables = Exact<{
  skip: Scalars["Int"]["input"];
  take: Scalars["Int"]["input"];
}>;

export type GetPostsQuery = {
  __typename?: "Query";
  getPosts: Array<{
    __typename?: "Post";
    id: number;
    text: string;
    video: string;
    user: { __typename?: "User"; id: number; fullname: string; email: string };
    likes?: Array<{
      __typename?: "Like";
      id: number;
      userId: number;
      postId: number;
    }> | null;
  }>;
};

export type GetPostsByUserIdQueryVariables = Exact<{
  userId: Scalars["Float"]["input"];
}>;

export type GetPostsByUserIdQuery = {
  __typename?: "Query";
  getPostsByUserId: Array<{
    __typename?: "Post";
    id: number;
    text: string;
    video: string;
    user: { __typename?: "User"; fullname: string; email: string; id: number };
  }>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  __typename?: "Query";
  getUsers: Array<{
    __typename?: "User";
    id: number;
    fullname: string;
    email: string;
    image?: string | null;
  }>;
};

export const CreateCommentDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateComment" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "text" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "postId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createComment" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "text" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "text" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "postId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "postId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "text" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "fullname" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "post" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "text" } },
                      { kind: "Field", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateCommentMutation,
  CreateCommentMutationVariables
>;
export const CreatePostDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreatePost" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "text" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "video" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "Upload" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createPost" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "text" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "text" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "video" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "video" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "text" } },
                { kind: "Field", name: { kind: "Name", value: "video" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreatePostMutation, CreatePostMutationVariables>;
export const DeleteCommentDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DeleteComment" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteComment" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteCommentMutation,
  DeleteCommentMutationVariables
>;
export const LikePostDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "LikePost" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "postId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "likePost" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "postId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "postId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                { kind: "Field", name: { kind: "Name", value: "postId" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LikePostMutation, LikePostMutationVariables>;
export const LoginUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "LoginUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "email" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "password" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "login" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "loginInput" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "email" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "email" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "password" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "password" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "fullname" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "LogoutUser" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "logout" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LogoutUserMutation, LogoutUserMutationVariables>;
export const RegisterUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "RegisterUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "fullname" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "email" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "password" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "confirmPassword" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "register" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "registerInput" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "fullname" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "fullname" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "email" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "email" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "password" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "password" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "confirmPassword" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "confirmPassword" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "fullname" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RegisterUserMutation,
  RegisterUserMutationVariables
>;
export const UnlikePostDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UnlikePost" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "postId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "unlikePost" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "postId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "postId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                { kind: "Field", name: { kind: "Name", value: "postId" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UnlikePostMutation, UnlikePostMutationVariables>;
export const UpdateUserProfileDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateUserProfile" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "fullname" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "bio" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "image" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Upload" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateUserProfile" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "fullname" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "fullname" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "bio" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "bio" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "image" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "image" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "fullname" } },
                { kind: "Field", name: { kind: "Name", value: "bio" } },
                { kind: "Field", name: { kind: "Name", value: "image" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateUserProfileMutation,
  UpdateUserProfileMutationVariables
>;
export const GetCommentsByPostIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetCommentsByPostId" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "postId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getCommentsByPostId" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "postId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "postId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "text" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "fullname" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      { kind: "Field", name: { kind: "Name", value: "image" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "post" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "text" } },
                      { kind: "Field", name: { kind: "Name", value: "video" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCommentsByPostIdQuery,
  GetCommentsByPostIdQueryVariables
>;
export const GetPostByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetPostById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getPostById" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "text" } },
                { kind: "Field", name: { kind: "Name", value: "video" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "fullname" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "likes" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "userId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "postId" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "otherPostIds" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPostByIdQuery, GetPostByIdQueryVariables>;
export const GetPostsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetPosts" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "skip" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "take" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getPosts" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "skip" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "take" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "take" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "text" } },
                { kind: "Field", name: { kind: "Name", value: "video" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "fullname" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "likes" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "userId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "postId" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPostsQuery, GetPostsQueryVariables>;
export const GetPostsByUserIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getPostsByUserId" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getPostsByUserId" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "userId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "text" } },
                { kind: "Field", name: { kind: "Name", value: "video" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "fullname" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetPostsByUserIdQuery,
  GetPostsByUserIdQueryVariables
>;
export const GetUsersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetUsers" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getUsers" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "fullname" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "image" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */

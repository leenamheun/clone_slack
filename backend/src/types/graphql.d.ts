export const typeDefs = ["type Channel {\n  id: Int!\n  chnnelNickName: String!\n  messages: [Message]\n  createdAt: String!\n  updatedAt: String\n}\n\ntype GetMessagesResponse {\n  ok: Boolean!\n  error: String\n  messages: [Message]\n}\n\ntype Query {\n  GetMessages(innerChannelId: Int!): GetMessagesResponse!\n}\n\ntype Message {\n  id: Int!\n  nickname: String!\n  contents: String!\n  innerChannel: Channel!\n  innerChannelId: Int!\n  createAt: String!\n  updateAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  GetMessages: GetMessagesResponse;
}

export interface GetMessagesQueryArgs {
  innerChannelId: number;
}

export interface GetMessagesResponse {
  ok: boolean;
  error: string | null;
  messages: Array<Message> | null;
}

export interface Message {
  id: number;
  nickname: string;
  contents: string;
  innerChannel: Channel;
  innerChannelId: number;
  createAt: string;
  updateAt: string | null;
}

export interface Channel {
  id: number;
  chnnelNickName: string;
  messages: Array<Message> | null;
  createdAt: string;
  updatedAt: string | null;
}
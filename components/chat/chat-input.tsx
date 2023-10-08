"use client";

interface ChatInputProps {
  apiUrl: string;
  query: Record<string, any>;
  name: string;
  type: "conversation" | "channel";
}
export const ChatInput = () => {
  return <div>chat input</div>;
};

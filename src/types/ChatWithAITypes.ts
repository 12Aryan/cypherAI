export interface ChatWithAIType {
  aiResponse: string;
  inputPrompt: string;
  recentPrompt: string;
  previousPrompts: Array<string>;
  loading: boolean;
  showResult: boolean;
}

export interface ChatWithAIType {
  aiResponse: string | null;
  inputPrompt: string;
  recentPrompt: string;
  previousPrompts: Array<string>;
  loading: boolean;
  showResult: boolean;
}

import { describe, it, expect, vi, beforeEach } from "vitest";
import openAiRequest from "../utils/openAI";

global.fetch = vi.fn();

describe("openAiRequest", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should return the reply from the API when response is successful", async () => {
    (fetch as any).mockResolvedValue({
      ok: true,
      json: async () => ({ reply: "Hello from AI" }),
    });

    const result = await openAiRequest("Hello");
    expect(result).toBe("Hello from AI");
  });

  it("should throw an error if the message is invalid", async () => {
    await expect(openAiRequest(null as any)).rejects.toThrow(
      "Invalid message format"
    );
    await expect(openAiRequest(123 as any)).rejects.toThrow(
      "Invalid message format"
    );
  });

  it("should throw an error if fetch fails", async () => {
    (fetch as any).mockResolvedValue({ ok: false });

    await expect(openAiRequest("Hi")).rejects.toThrow(
      "Failed to fetch response from OpenAI"
    );
  });

  it("should throw an error if response format is invalid", async () => {
    (fetch as any).mockResolvedValue({
      ok: true,
      json: async () => ({}),
    });

    await expect(openAiRequest("Hi")).rejects.toThrow(
      "Invalid response format from OpenAI"
    );
  });
});

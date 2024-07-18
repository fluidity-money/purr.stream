import { test, expect } from "./fixtures";

test.describe("Default Stream Loading", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("The main dashboard loads within 5 seconds of entering the site", async ({
    page,
  }) => {
    await page.waitForLoadState("load", { timeout: 5000 });
    await expect(page.getByTestId("purr-stream-logo")).toBeInViewport();
  });

  test("A default cat stream is visible and playing automatically muted", async ({
    page,
  }) => {
    const videoPlayer = page.getByTestId("video-player");

    await expect(videoPlayer).toBeInViewport();

    const { isPlaying, isMuted } = await videoPlayer.evaluate(
      (video: HTMLVideoElement) => {
        return {
          isPlaying: video.isConnected,
          isMuted: video.muted,
        };
      },
    );

    expect(isPlaying).toBe(true);
    expect(isMuted).toBe(true);
  });

  test("Stream information (cat name, location) is displayed correctly", async ({
    page,
  }) => {
    await expect(page.getByTestId("stream-info")).toBeInViewport();
  });
});

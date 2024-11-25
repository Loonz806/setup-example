import { analytics } from "./analytics";
jest.mock("./analytics", () => ({
  analytics: {
    page: jest.fn(),
    track: jest.fn(),
    identify: jest.fn(),
  },
}));

describe("analytics", () => {
  it("tracks a page view", () => {
    const pageSpy = jest.spyOn(analytics, "page");
    analytics.page();
    expect(pageSpy).toHaveBeenCalled();
  });

  it("tracks a custom event", () => {
    const trackSpy = jest.spyOn(analytics, "track");
    analytics.track("playedVideo", {
      category: "Videos",
      label: "Fall Campaign",
      value: 42,
    });
    expect(trackSpy).toHaveBeenCalledWith("playedVideo", {
      category: "Videos",
      label: "Fall Campaign",
      value: 42,
    });
  });

  it("identifies a visitor", () => {
    const identifySpy = jest.spyOn(analytics, "identify");
    analytics.identify("user-id-xyz", {
      firstName: "bill",
      lastName: "murray",
    });
    expect(identifySpy).toHaveBeenCalledWith("user-id-xyz", {
      firstName: "bill",
      lastName: "murray",
    });
  });
});

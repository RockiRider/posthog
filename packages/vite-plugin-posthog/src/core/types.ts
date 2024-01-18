import posthogJs, { PostHogConfig } from "posthog-js";

type PostHogConfigOptions = Omit<PostHogConfig, "api_host">;
export type PostHogInitConfig = Partial<PostHogConfigOptions> & {
  api_host: string;
};

export type VitePostHogOptionsConfig = Partial<PostHogConfigOptions>;

export type VitePostHogOptions = {
  apiKey: string;
  hostUrl: string;
  isDevModeOn?: boolean;
  config?: VitePostHogOptionsConfig;
};

export type PostHog = typeof posthogJs;

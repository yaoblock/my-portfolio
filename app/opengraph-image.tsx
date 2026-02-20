import { ImageResponse } from "next/og";

export const alt = "Writer's Block — YAO";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            color: "#171717",
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          Writer&apos;s Block
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 28,
            fontWeight: 700,
            color: "#171717",
            letterSpacing: "-0.04em",
          }}
        >
          I AM YAO.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 12,
            fontSize: 22,
            color: "#a1a1aa",
            lineHeight: 1.5,
          }}
        >
          PR · Crypto · Cinema · Nanjing University · NYU
        </div>
      </div>
    ),
    { ...size }
  );
}

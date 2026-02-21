import { ImageResponse } from "next/og";

export const alt =
  "I AM YAO. A PR manager who now opens pull requests. No cut. Still rolling. Scene unknown.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const SITE_URL = "https://yaoblock.com";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#000000",
          gap: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
            flex: 1,
          }}
        >
          <div
            style={{
              fontSize: 88,
              fontWeight: 900,
              color: "#fafafa",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            I AM YAO.
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "#a1a1aa",
              letterSpacing: "-0.02em",
              lineHeight: 1.3,
            }}
          >
            A PR manager who now opens pull requests.
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 400,
              color: "#71717a",
              fontStyle: "italic",
              letterSpacing: "-0.01em",
              lineHeight: 1.4,
            }}
          >
            No cut. Still rolling. Scene unknown.
          </div>
        </div>
        <img
          src={`${SITE_URL}/avatar.png`}
          alt=""
          width={220}
          height={220}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #1a1a1a",
            flexShrink: 0,
          }}
        />
      </div>
    ),
    { ...size }
  );
}

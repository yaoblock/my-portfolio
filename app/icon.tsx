import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 35% 30%, #e9d5ff, #c084fc 40%, #a855f7 75%, #7c3aed 100%)",
            boxShadow:
              "inset -2px -2px 4px rgba(0,0,0,0.15), inset 3px 3px 5px rgba(255,255,255,0.35)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}

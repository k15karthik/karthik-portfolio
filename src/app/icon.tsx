import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
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
          background: "#0a0b0d",
          borderRadius: 14,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontFamily: "Georgia, serif",
            color: "#edece8",
            letterSpacing: "-1px",
          }}
        >
          KK
          <span style={{ color: "#4fd1ae" }}>.</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

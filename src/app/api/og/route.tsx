import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "RAFALIMANANA Ranto H.";
    const subtitle =
      searchParams.get("subtitle") || "Développeur Full-Stack Web & Mobile";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            backgroundColor: "#020617",
            backgroundImage:
              "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.05) 2px, transparent 0)",
            backgroundSize: "50px 50px",
            padding: "60px 80px",
            color: "#ffffff",
            fontFamily: "sans-serif",
          }}
        >
          {/* Top Brand / Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #06b6d4, #2563eb)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: "bold",
                color: "#ffffff",
              }}
            >
              R
            </div>
            <span
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                letterSpacing: "-0.02em",
                color: "#ffffff",
              }}
            >
              Ranto<span style={{ color: "#06b6d4" }}>.</span>
            </span>
          </div>

          {/* Main Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div
              style={{
                fontSize: "56px",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: "#ffffff",
                lineHeight: 1.1,
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: "32px",
                fontWeight: 700,
                color: "#06b6d4",
              }}
            >
              {subtitle}
            </div>
          </div>

          {/* Bottom Tech Pills */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            {["Next.js", "React", "Spring Boot", "TypeScript", "PostgreSQL"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    padding: "8px 20px",
                    borderRadius: "9999px",
                    backgroundColor: "rgba(15, 23, 42, 0.8)",
                    border: "1px solid rgba(51, 65, 85, 0.8)",
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#94a3b8",
                  }}
                >
                  {tech}
                </div>
              )
            )}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    return new Response("Failed to generate OG image", { status: 500 });
  }
}

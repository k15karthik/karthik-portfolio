import type { Project } from "@/data/content";

const wire = "var(--hairline-strong)";
const accent = "var(--accent)";
const dim = "var(--ink-faint)";

function Node({
  cx,
  cy,
  r = 4,
  fill = accent,
}: {
  cx: number;
  cy: number;
  r?: number;
  fill?: string;
}) {
  return <circle cx={cx} cy={cy} r={r} fill={fill} />;
}

function Pipeline() {
  const xs = [26, 72, 118, 164, 210, 256];
  return (
    <svg viewBox="0 0 282 140" fill="none" className="h-full w-full">
      <line x1={26} y1={70} x2={256} y2={70} stroke={wire} strokeWidth={1} />
      {xs.map((x, i) => (
        <g key={x}>
          <rect
            x={x - 14}
            y={52}
            width={28}
            height={36}
            rx={6}
            stroke={i % 2 === 0 ? accent : wire}
            strokeWidth={1.2}
            fill="var(--bg-elevated)"
          />
          <Node cx={x} cy={70} r={2.5} fill={i % 2 === 0 ? accent : dim} />
        </g>
      ))}
    </svg>
  );
}

function Board() {
  const center = { x: 141, y: 70 };
  const satellites = [
    { x: 141, y: 24 },
    { x: 196, y: 70 },
    { x: 141, y: 116 },
    { x: 86, y: 70 },
  ];
  return (
    <svg viewBox="0 0 282 140" fill="none" className="h-full w-full">
      {satellites.map((s, i) => (
        <line
          key={i}
          x1={center.x}
          y1={center.y}
          x2={s.x}
          y2={s.y}
          stroke={wire}
          strokeWidth={1}
        />
      ))}
      {satellites.map((s, i) => (
        <circle
          key={i}
          cx={s.x}
          cy={s.y}
          r={10}
          stroke={accent}
          strokeWidth={1.2}
          fill="var(--bg-elevated)"
        />
      ))}
      <circle cx={center.x} cy={center.y} r={14} fill={accent} opacity={0.18} />
      <circle
        cx={center.x}
        cy={center.y}
        r={14}
        stroke={accent}
        strokeWidth={1.4}
        fill="none"
      />
    </svg>
  );
}

function Tutor() {
  return (
    <svg viewBox="0 0 282 140" fill="none" className="h-full w-full">
      <circle cx={92} cy={70} r={22} stroke={wire} strokeWidth={1.2} fill="var(--bg-elevated)" />
      <circle cx={190} cy={70} r={22} stroke={accent} strokeWidth={1.4} fill="var(--bg-elevated)" />
      <path
        d="M118 58 Q154 38 164 58"
        stroke={accent}
        strokeWidth={1.2}
        fill="none"
        markerEnd="url(#arrow)"
      />
      <path
        d="M164 82 Q154 102 118 82"
        stroke={wire}
        strokeWidth={1.2}
        fill="none"
      />
      <ellipse cx={190} cy={108} rx={14} ry={5} stroke={dim} strokeWidth={1} fill="none" />
      <line x1={176} y1={108} x2={176} y2={96} stroke={dim} strokeWidth={1} />
      <line x1={204} y1={108} x2={204} y2={96} stroke={dim} strokeWidth={1} />
      <ellipse cx={190} cy={96} rx={14} ry={5} stroke={dim} strokeWidth={1} fill="none" />
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={accent} />
        </marker>
      </defs>
    </svg>
  );
}

function Risk() {
  const points = "20,112 60,96 100,100 140,70 180,80 220,42 260,54";
  return (
    <svg viewBox="0 0 282 140" fill="none" className="h-full w-full">
      <polyline points={points} stroke={accent} strokeWidth={1.4} fill="none" />
      {points.split(" ").map((p, i) => {
        const [x, y] = p.split(",").map(Number);
        const flagged = i === 5;
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={flagged ? 5 : 2.5}
            fill={flagged ? "none" : accent}
            stroke={flagged ? "#e08a4f" : "none"}
            strokeWidth={flagged ? 1.4 : 0}
          />
        );
      })}
      <line x1={20} y1={122} x2={262} y2={122} stroke={wire} strokeWidth={1} />
    </svg>
  );
}

function Db() {
  return (
    <svg viewBox="0 0 282 140" fill="none" className="h-full w-full">
      <g stroke={accent} strokeWidth={1.3}>
        <ellipse cx={141} cy={38} rx={38} ry={12} fill="var(--bg-elevated)" />
        <path d="M103 38 V96 Q103 108 141 108 Q179 108 179 96 V38" fill="none" />
        <path d="M103 68 Q141 80 179 68" fill="none" stroke={wire} />
      </g>
      {[66, 141, 216].map((x) => (
        <line key={x} x1={x} y1={108} x2={x} y2={124} stroke={wire} strokeWidth={1} />
      ))}
      {[66, 141, 216].map((x) => (
        <Node key={x} cx={x} cy={124} r={3} fill={dim} />
      ))}
    </svg>
  );
}

function Data() {
  const pts = [
    [24, 110], [48, 96], [70, 104], [92, 80], [118, 88], [142, 60],
    [166, 70], [190, 46], [214, 56], [238, 30], [258, 40],
  ];
  return (
    <svg viewBox="0 0 282 140" fill="none" className="h-full w-full">
      <line x1={16} y1={118} x2={266} y2={118} stroke={wire} strokeWidth={1} />
      {pts.map(([x, y], i) => (
        <Node key={i} cx={x} cy={y} r={2.6} fill={i % 3 === 0 ? accent : dim} />
      ))}
      <path
        d="M24 108 Q140 90 258 36"
        stroke={accent}
        strokeWidth={1}
        fill="none"
        opacity={0.5}
        strokeDasharray="2 4"
      />
    </svg>
  );
}

function Team() {
  const pts = [
    { x: 90, y: 40 },
    { x: 192, y: 40 },
    { x: 90, y: 100 },
    { x: 192, y: 100 },
  ];
  return (
    <svg viewBox="0 0 282 140" fill="none" className="h-full w-full">
      {pts.map((a, i) =>
        pts.slice(i + 1).map((b, j) => (
          <line
            key={`${i}-${j}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke={wire}
            strokeWidth={1}
          />
        ))
      )}
      {pts.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={11}
          stroke={i === 0 ? accent : dim}
          strokeWidth={1.3}
          fill="var(--bg-elevated)"
        />
      ))}
    </svg>
  );
}

const map: Record<Project["diagram"], () => React.JSX.Element> = {
  pipeline: Pipeline,
  board: Board,
  tutor: Tutor,
  risk: Risk,
  db: Db,
  data: Data,
  team: Team,
};

export function ProjectDiagram({ kind }: { kind: Project["diagram"] }) {
  const Diagram = map[kind];
  return <Diagram />;
}

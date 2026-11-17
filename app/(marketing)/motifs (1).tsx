import { useId, type CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { LOGO_PATH } from "./logo-path";

const r2 = (n: number) => Math.round(n * 100) / 100;
const polar = (r: number, deg: number) => {
  const a = ((deg - 90) * Math.PI) / 180;
  return [r2(r * Math.cos(a)), r2(r * Math.sin(a))] as const;
};

type MotifProps = { className?: string; title?: string };

/** odiaui temple mark, from the official favicon. */
export function LogoMark({ className }: MotifProps) {
  return (
    <svg viewBox="0 0 512 512" className={className} aria-hidden="true">
      <g transform="translate(64.40 35.84) scale(1.45283)">
        <path d={LOGO_PATH} fillRule="evenodd" fill="currentColor" />
      </g>
    </svg>
  );
}

/** Konark chakra: 8 wide spokes, 8 thin spokes, beaded rim, medallions. */
export function Chakra({
  className,
  title,
  style,
  detailed = true,
}: MotifProps & { detailed?: boolean; style?: CSSProperties }) {
  // Small, simplified wheels need heavier lines to stay legible.
  const k = detailed ? 1 : 2.4;
  const spokes = Array.from({ length: 16 }, (_, i) => i * 22.5);
  const rimBeads = Array.from({ length: 64 }, (_, i) => i * (360 / 64));
  const hubBeads = Array.from({ length: 16 }, (_, i) => i * 22.5 + 11.25);
  return (
    <svg
      viewBox="-100 -100 200 200"
      className={className}
      style={style}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      fill="none"
      stroke="currentColor"
    >
      {title ? <title>{title}</title> : null}
      <circle r="97" strokeWidth={2.2 * k} />
      <circle r="86" strokeWidth={1.4 * k} />
      {detailed &&
        rimBeads.map((a) => {
          const [x, y] = polar(91.5, a);
          return <circle key={a} cx={x} cy={y} r="1.5" fill="currentColor" stroke="none" />;
        })}
      <circle r="80" strokeWidth={1 * k} />
      {/* scallops between spokes */}
      {detailed &&
        spokes.map((a) => {
          const [x1, y1] = polar(80, a + 3);
          const [x2, y2] = polar(80, a + 19.5);
          return <path key={`s${a}`} d={`M${x1} ${y1} A14 14 0 0 1 ${x2} ${y2}`} strokeWidth={1 * k} />;
        })}
      {spokes.map((a, i) => {
        if (i % 2 === 0) {
          const [ax, ay] = polar(22, a - 6);
          const [bx, by] = polar(22, a + 6);
          const [cx, cy] = polar(80, a + 2.4);
          const [dx, dy] = polar(80, a - 2.4);
          const [mx, my] = polar(50, a);
          return (
            <g key={a}>
              <path
                d={`M${ax} ${ay} L${dx} ${dy} L${cx} ${cy} L${bx} ${by} Z`}
                fill="currentColor"
                fillOpacity="0.12"
                strokeWidth={1.4 * k}
                strokeLinejoin="round"
              />
              <circle cx={mx} cy={my} r="7.5" className="fill-background" strokeWidth={1.4 * k} />
              <circle cx={mx} cy={my} r="3" fill="currentColor" stroke="none" />
            </g>
          );
        }
        const [x1, y1] = polar(22, a);
        const [x2, y2] = polar(80, a);
        const [bx, by] = polar(57, a);
        return (
          <g key={a}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth={1.6 * k} />
            <circle cx={bx} cy={by} r="2.6" fill="currentColor" stroke="none" />
          </g>
        );
      })}
      <circle r="22" strokeWidth={1.8 * k} className="fill-background" />
      {detailed &&
        hubBeads.map((a) => {
          const [x, y] = polar(17, a);
          return <circle key={`h${a}`} cx={x} cy={y} r="1.1" fill="currentColor" stroke="none" />;
        })}
      <circle r="12" strokeWidth={1.4 * k} />
      <circle r="5" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Rekha deula: curvilinear temple tower with amalaka and kalasha. */
export function Deula({ className, title }: MotifProps) {
  const id = useId();
  const bands = Array.from({ length: 11 }, (_, i) => 34 + i * 10);
  return (
    <svg
      viewBox="0 0 120 160"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <clipPath id={`${id}-t`}>
          <path d="M30 150 L30 96 C30 62 37 38 47 24 L73 24 C83 38 90 62 90 96 L90 150 Z" />
        </clipPath>
      </defs>
      <line x1="60" y1="0" x2="60" y2="8" strokeWidth="1.2" />
      <path d="M60 1 L70 4 L60 7" fill="currentColor" stroke="none" />
      <path d="M55 15 C55 10 65 10 65 15 L63 18 L57 18 Z" fill="currentColor" stroke="none" />
      <ellipse cx="60" cy="21" rx="15" ry="4" strokeWidth="1.4" fill="currentColor" fillOpacity="0.12" />
      <path
        d="M30 150 L30 96 C30 62 37 38 47 24 L73 24 C83 38 90 62 90 96 L90 150 Z"
        strokeWidth="1.6"
        fill="currentColor"
        fillOpacity="0.06"
      />
      <g clipPath={`url(#${id}-t)`} strokeWidth="0.9">
        {bands.map((y) => (
          <line key={y} x1="20" y1={y} x2="100" y2={y} />
        ))}
        <rect x="53" y="20" width="14" height="140" fill="currentColor" fillOpacity="0.1" />
        <line x1="45" y1="20" x2="45" y2="150" />
        <line x1="75" y1="20" x2="75" y2="150" />
      </g>
      <path d="M52 150 L52 134 A8 8 0 0 1 68 134 L68 150" strokeWidth="1.4" className="fill-background" />
      <rect x="16" y="150" width="88" height="6" strokeWidth="1.4" />
    </svg>
  );
}

/** Padma: two rings of eight lotus petals. */
export function Padma({ className, title }: MotifProps) {
  const outer = Array.from({ length: 8 }, (_, i) => i * 45);
  const dots = Array.from({ length: 12 }, (_, i) => i * 30);
  return (
    <svg
      viewBox="-100 -100 200 200"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      fill="none"
      stroke="currentColor"
    >
      {title ? <title>{title}</title> : null}
      {outer.map((a) => (
        <path
          key={a}
          transform={`rotate(${a})`}
          d="M0 -12 C20 -34 22 -66 0 -94 C-22 -66 -20 -34 0 -12 Z M0 -26 L0 -80"
          strokeWidth="1.5"
          fill="currentColor"
          fillOpacity="0.06"
        />
      ))}
      {outer.map((a) => (
        <path
          key={`i${a}`}
          transform={`rotate(${a + 22.5}) scale(0.66)`}
          d="M0 -12 C20 -34 22 -66 0 -94 C-22 -66 -20 -34 0 -12 Z"
          strokeWidth="2"
          className="fill-background"
        />
      ))}
      <circle r="16" strokeWidth="1.5" className="fill-background" />
      {dots.map((a) => {
        const [x, y] = polar(10, a);
        return <circle key={`d${a}`} cx={x} cy={y} r="1.6" fill="currentColor" stroke="none" />;
      })}
      <circle r="3.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Stepped diamond, the base unit of Sambalpuri bandha (ikat). */
function steppedDiamond(cx: number, cy: number, half: number, step: number) {
  const rows: { x: number; y: number; w: number }[] = [];
  for (let dy = -half; dy < half; dy += step) {
    const d = Math.abs(dy + step / 2);
    const w = Math.max(step, Math.round((half - d) / step) * step * 2);
    rows.push({ x: cx - w / 2, y: cy + dy, w });
  }
  return rows;
}

/** A repeating ikat band. Edges are displaced slightly to read as dyed thread, not vector. */
export function IkatBand({ className }: { className?: string }) {
  const id = useId();
  const big = steppedDiamond(20, 14, 12, 2);
  const hole = steppedDiamond(20, 14, 5, 2);
  const small = steppedDiamond(0, 14, 4, 2);
  const smallR = steppedDiamond(40, 14, 4, 2);
  return (
    <svg className={className} aria-hidden="true" preserveAspectRatio="none">
      <defs>
        <filter id={`${id}-f`} x="-5%" y="-20%" width="110%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9 0.08" numOctaves="1" seed="4" />
          <feDisplacementMap in="SourceGraphic" scale="2.2" />
        </filter>
        <pattern id={`${id}-p`} width="40" height="28" patternUnits="userSpaceOnUse">
          <g fill="currentColor">
            {big.map((r, i) => (
              <rect key={`b${i}`} x={r.x} y={r.y} width={r.w} height="2" />
            ))}
            {small.map((r, i) => (
              <rect key={`s${i}`} x={r.x} y={r.y} width={r.w} height="2" />
            ))}
            {smallR.map((r, i) => (
              <rect key={`r${i}`} x={r.x} y={r.y} width={r.w} height="2" />
            ))}
          </g>
          <g className="fill-background">
            {hole.map((r, i) => (
              <rect key={`h${i}`} x={r.x} y={r.y} width={r.w} height="2" />
            ))}
          </g>
          <rect x="18" y="12" width="4" height="4" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id}-p)`} filter={`url(#${id}-f)`} />
    </svg>
  );
}

/** Corner crop marks for figure plates. */
export function CropMarks({ className }: { className?: string }) {
  const base = "pointer-events-none absolute size-3 border-foreground/50";
  return (
    <span aria-hidden="true" className={cn("contents", className)}>
      <span className={cn(base, "left-2 top-2 border-l border-t")} />
      <span className={cn(base, "right-2 top-2 border-r border-t")} />
      <span className={cn(base, "bottom-2 left-2 border-b border-l")} />
      <span className={cn(base, "bottom-2 right-2 border-b border-r")} />
    </span>
  );
}

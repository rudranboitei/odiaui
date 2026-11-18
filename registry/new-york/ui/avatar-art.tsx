"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------- */
/*  OdiaUI avatar illustrations                                               */
/*  Ten flat SVG portraits, drawn for OdiaUI and shipped with the registry so  */
/*  a consumer needs no image assets. Put one inside <Avatar> and it fills the */
/*  circle. Every portrait carries a default accessible label; pass `label`    */
/*  to rename it, or `aria-hidden` when the surrounding text already names the */
/*  person.                                                                    */
/* -------------------------------------------------------------------------- */

type AvatarArtName =
  | "adivasi-man"
  | "adivasi-woman"
  | "elder-man"
  | "elder-woman"
  | "folk-performer"
  | "odissi-dancer"
  | "pattachitra-artist"
  | "sambalpuri-artisan"
  | "young-man"
  | "young-woman"

const AVATAR_ART_LABELS: Record<AvatarArtName, string> = {
  "adivasi-man": "Adivasi community man",
  "adivasi-woman": "Adivasi community woman",
  "elder-man": "Elderly Odia man",
  "elder-woman": "Elderly Odia woman",
  "folk-performer": "Odisha folk performer",
  "odissi-dancer": "Odissi dancer",
  "pattachitra-artist": "Pattachitra artist",
  "sambalpuri-artisan": "Sambalpuri ikat weaver",
  "young-man": "Young Odia man",
  "young-woman": "Young Odia woman",
}

/* ------------------------------- Portraits -------------------------------- */

function AdivasiManArt() {
  const id = React.useId().replace(/:/g, "")
  const clip = `${id}-clip`

  return (
    <>
      <defs>
        <clipPath id={clip}>
          <circle cx="128" cy="128" r="128"/>
        </clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>
        <rect width="256" height="256" fill="#E3BC8F"/>
        <path d="M24 256 C24 206 76 190 128 190 C180 190 232 206 232 256 Z" fill="#F1E4C8"/>
        <path d="M40 214 C90 238 166 238 216 214" fill="none" stroke="#B3342B" strokeWidth="10"/>
        <path d="M112 160 H144 V200 C144 208 112 208 112 200 Z" fill="#613A24"/>
        <ellipse cx="80" cy="124" rx="8" ry="13" fill="#613A24"/>
        <ellipse cx="176" cy="124" rx="8" ry="13" fill="#613A24"/>
        <ellipse cx="128" cy="118" rx="48" ry="56" fill="#7A4B30"/>
        <path d="M80 114 C74 62 106 54 128 54 C150 54 182 62 176 114 C170 90 152 78 128 78 C104 78 86 90 80 114 Z" fill="#150D09"/>
        <ellipse cx="110" cy="122" rx="4" ry="5" fill="#2B1B14"/>
        <ellipse cx="146" cy="122" rx="4" ry="5" fill="#2B1B14"/>
        <circle cx="111.5" cy="120.5" r="1.3" fill="#fff"/>
        <circle cx="147.5" cy="120.5" r="1.3" fill="#fff"/>
        <path d="M98 110 Q110 104 121 109" fill="none" stroke="#2B1B14" strokeWidth="3.2" strokeLinecap="round"/>
        <path d="M135 109 Q146 104 158 110" fill="none" stroke="#2B1B14" strokeWidth="3.2" strokeLinecap="round"/>
        <path d="M128 124 Q122 138 127 141 Q131 142 134 140" fill="none" stroke="#613A24" strokeWidth="2.6" strokeLinecap="round"/>
        <path d="M113 150 Q128 162 143 150" fill="none" stroke="#7A2E2A" strokeWidth="3.2" strokeLinecap="round"/>
        <circle cx="100" cy="140" r="7" fill="#E57373" opacity=".18"/>
        <circle cx="156" cy="140" r="7" fill="#E57373" opacity=".18"/>
        <path d="M80 92 Q128 70 176 92" fill="none" stroke="#B3342B" strokeWidth="9" strokeLinecap="round"/>
        <path d="M80 92 Q128 70 176 92" fill="none" stroke="#F4C542" strokeWidth="2" strokeDasharray="4 6"/>
        <g transform="rotate(22 150 70)">
          <ellipse cx="150" cy="44" rx="9" ry="30" fill="#E8715A"/>
          <path d="M150 18 V76" stroke="#8E1B2B" strokeWidth="2"/>
        </g>
        <path d="M100 196 Q128 210 156 196" fill="none" stroke="#F4C542" strokeWidth="5" strokeLinecap="round" strokeDasharray="1 7"/>
        <path d="M100 202 Q128 226 156 202" fill="none" stroke="#F4C542" strokeWidth="5" strokeLinecap="round" strokeDasharray="1 7"/>
        <path d="M100 196 Q128 210 156 196" fill="none" stroke="#E8715A" strokeWidth="5" strokeLinecap="round" strokeDasharray="1 7"/>
        <circle cx="80" cy="140" r="5" fill="#DDE3E8"/>
        <circle cx="176" cy="140" r="5" fill="#DDE3E8"/>
      </g>
    </>
  )
}
function AdivasiWomanArt() {
  const id = React.useId().replace(/:/g, "")
  const clip = `${id}-clip`

  return (
    <>
      <defs>
        <clipPath id={clip}>
          <circle cx="128" cy="128" r="128"/>
        </clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>
        <rect width="256" height="256" fill="#E9C7A4"/>
        <ellipse cx="128" cy="44" rx="24" ry="22" fill="#1A110C"/>
        <circle cx="108" cy="40" r="5.5" fill="#F4C542"/>
        <circle cx="148" cy="40" r="5.5" fill="#E8715A"/>
        <circle cx="128" cy="24" r="5.5" fill="#FFF8E7"/>
        <circle cx="118" cy="28" r="5.5" fill="#E8715A"/>
        <circle cx="138" cy="28" r="5.5" fill="#F4C542"/>
        <path d="M24 256 C24 206 76 190 128 190 C180 190 232 206 232 256 Z" fill="#F4EBD8"/>
        <path d="M24 256 C24 206 76 190 128 190 L128 256Z" fill="#B3342B" opacity=".92"/>
        <path d="M60 205 L72 256 M92 195 L98 256 M164 195 L158 256 M196 205 L184 256" stroke="#1E2A5A" strokeWidth="5"/>
        <path d="M112 160 H144 V200 C144 208 112 208 112 200 Z" fill="#734729"/>
        <ellipse cx="80" cy="124" rx="8" ry="13" fill="#734729"/>
        <ellipse cx="176" cy="124" rx="8" ry="13" fill="#734729"/>
        <ellipse cx="128" cy="118" rx="48" ry="56" fill="#8D5A3B"/>
        <path d="M80 116 C72 62 106 52 128 52 C150 52 184 62 176 116 C172 92 154 80 130 76 C108 82 88 92 80 116 Z" fill="#1A110C"/>
        <path d="M128 54 L130 76" stroke="#00000033" strokeWidth="2"/>
        <ellipse cx="110" cy="122" rx="4" ry="5" fill="#2B1B14"/>
        <ellipse cx="146" cy="122" rx="4" ry="5" fill="#2B1B14"/>
        <circle cx="111.5" cy="120.5" r="1.3" fill="#fff"/>
        <circle cx="147.5" cy="120.5" r="1.3" fill="#fff"/>
        <path d="M98 110 Q110 104 121 109" fill="none" stroke="#2B1B14" strokeWidth="3.2" strokeLinecap="round"/>
        <path d="M135 109 Q146 104 158 110" fill="none" stroke="#2B1B14" strokeWidth="3.2" strokeLinecap="round"/>
        <path d="M128 124 Q122 138 127 141 Q131 142 134 140" fill="none" stroke="#734729" strokeWidth="2.6" strokeLinecap="round"/>
        <path d="M113 150 Q128 162 143 150" fill="none" stroke="#7A2E2A" strokeWidth="3.2" strokeLinecap="round"/>
        <circle cx="100" cy="140" r="7" fill="#E57373" opacity=".18"/>
        <circle cx="156" cy="140" r="7" fill="#E57373" opacity=".18"/>
        <circle cx="80" cy="140" r="5" fill="#DDE3E8"/>
        <circle cx="176" cy="140" r="5" fill="#DDE3E8"/>
        <path d="M100 196 Q128 210 156 196" fill="none" stroke="#E8715A" strokeWidth="5" strokeLinecap="round" strokeDasharray="1 7"/>
        <path d="M100 196 Q128 210 156 196" fill="none" stroke="#F4C542" strokeWidth="5" strokeLinecap="round" strokeDasharray="1 7"/>
        <path d="M100 202 Q128 226 156 202" fill="none" stroke="#F4C542" strokeWidth="5" strokeLinecap="round" strokeDasharray="1 7"/>
        <path d="M100 196 Q128 210 156 196" fill="none" stroke="#FFF8E7" strokeWidth="5" strokeLinecap="round" strokeDasharray="1 7"/>
        <path d="M100 202 Q128 226 156 202" fill="none" stroke="#FFF8E7" strokeWidth="5" strokeLinecap="round" strokeDasharray="1 7"/>
        <path d="M100 208 Q128 242 156 208" fill="none" stroke="#FFF8E7" strokeWidth="5" strokeLinecap="round" strokeDasharray="1 7"/>
        <path d="M122 80 L128 90 L134 80" fill="none" stroke="#C62828" strokeWidth="0"/>
      </g>
    </>
  )
}
function ElderManArt() {
  const id = React.useId().replace(/:/g, "")
  const clip = `${id}-clip`

  return (
    <>
      <defs>
        <clipPath id={clip}>
          <circle cx="128" cy="128" r="128"/>
        </clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>
        <rect width="256" height="256" fill="#F3E6CF"/>
        <path d="M24 256 C24 206 76 190 128 190 C180 190 232 206 232 256 Z" fill="#FBF7EC"/>
        <path d="M24 256 C40 214 80 200 128 214 C176 200 216 214 232 256 Z" fill="#F1E8D4"/>
        <path d="M30 236 C70 212 100 212 128 224 C156 212 186 212 226 236" fill="none" stroke="#C0392B" strokeWidth="5"/>
        <path d="M112 160 H144 V200 C144 208 112 208 112 200 Z" fill="#86593B"/>
        <ellipse cx="80" cy="124" rx="8" ry="13" fill="#86593B"/>
        <ellipse cx="176" cy="124" rx="8" ry="13" fill="#86593B"/>
        <ellipse cx="128" cy="118" rx="48" ry="56" fill="#A5714D"/>
        <path d="M80 122 C70 92 82 78 96 76 C86 92 86 108 88 124Z" fill="#EFEAE0"/>
        <path d="M176 122 C186 92 174 78 160 76 C170 92 170 108 168 124Z" fill="#EFEAE0"/>
        <ellipse cx="110" cy="122" rx="4" ry="5" fill="#2B1B14"/>
        <ellipse cx="146" cy="122" rx="4" ry="5" fill="#2B1B14"/>
        <circle cx="111.5" cy="120.5" r="1.3" fill="#fff"/>
        <circle cx="147.5" cy="120.5" r="1.3" fill="#fff"/>
        <path d="M98 110 Q110 104 121 109" fill="none" stroke="#CFCBC2" strokeWidth="3.6" strokeLinecap="round"/>
        <path d="M135 109 Q146 104 158 110" fill="none" stroke="#CFCBC2" strokeWidth="3.6" strokeLinecap="round"/>
        <path d="M128 124 Q122 138 127 141 Q131 142 134 140" fill="none" stroke="#86593B" strokeWidth="2.6" strokeLinecap="round"/>
        <path d="M113 150 Q128 162 143 150" fill="none" stroke="#7A2E2A" strokeWidth="3.2" strokeLinecap="round"/>
        <path d="M96 100 Q128 94 160 100" fill="none" stroke="#86593B" strokeWidth="1.6" opacity=".7"/>
        <path d="M104 134 Q100 140 104 146 M152 134 Q156 140 152 146" fill="none" stroke="#86593B" strokeWidth="1.6" opacity=".7"/>
        <circle cx="100" cy="140" r="7" fill="#E57373" opacity=".18"/>
        <circle cx="156" cy="140" r="7" fill="#E57373" opacity=".18"/>
        <path d="M106 146 Q117 136 128 143 Q139 136 150 146 Q139 151 128 148 Q117 151 106 146 Z" fill="#EFEAE0"/>
        <g fill="none" stroke="#3B2A22" strokeWidth="3">
          <circle cx="110" cy="122" r="13"/>
          <circle cx="146" cy="122" r="13"/>
          <path d="M123 120 H133"/>
          <path d="M97 120 L82 116 M159 120 L174 116"/>
        </g>
        <g fill="none" strokeLinecap="round">
          <path d="M117 74 V96 M139 74 V96" stroke="#F6EBD6" strokeWidth="4.5"/>
          <path d="M128 80 V98" stroke="#C62828" strokeWidth="3"/>
        </g>
        <path d="M100 196 Q128 210 156 196" fill="none" stroke="#6B4A2B" strokeWidth="5" strokeLinecap="round" strokeDasharray="1 7"/>
        <path d="M100 202 Q128 226 156 202" fill="none" stroke="#6B4A2B" strokeWidth="5" strokeLinecap="round" strokeDasharray="1 7"/>
      </g>
    </>
  )
}
function ElderWomanArt() {
  const id = React.useId().replace(/:/g, "")
  const clip = `${id}-clip`

  return (
    <>
      <defs>
        <clipPath id={clip}>
          <circle cx="128" cy="128" r="128"/>
        </clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>
        <rect width="256" height="256" fill="#EFD7BC"/>
        <path d="M62 150 C44 40 212 40 194 150 L204 256 H52 Z" fill="#FBF7EC"/>
        <path d="M24 256 C24 206 76 190 128 190 C180 190 232 206 232 256 Z" fill="#FBF7EC"/>
        <path d="M24 256 C24 206 76 190 128 190 C180 190 232 206 232 256" fill="none" stroke="#B3342B" strokeWidth="9"/>
        <path d="M112 160 H144 V200 C144 208 112 208 112 200 Z" fill="#92623F"/>
        <ellipse cx="80" cy="124" rx="8" ry="13" fill="#92623F"/>
        <ellipse cx="176" cy="124" rx="8" ry="13" fill="#92623F"/>
        <ellipse cx="128" cy="118" rx="48" ry="56" fill="#B07A55"/>
        <path d="M80 112 C80 76 100 68 128 66 C156 68 176 76 176 112 C168 92 150 82 128 82 C106 82 88 92 80 112Z" fill="#D9D6D0"/>
        <ellipse cx="110" cy="122" rx="4" ry="5" fill="#2B1B14"/>
        <ellipse cx="146" cy="122" rx="4" ry="5" fill="#2B1B14"/>
        <circle cx="111.5" cy="120.5" r="1.3" fill="#fff"/>
        <circle cx="147.5" cy="120.5" r="1.3" fill="#fff"/>
        <path d="M98 110 Q110 104 121 109" fill="none" stroke="#B9B6B0" strokeWidth="3.4" strokeLinecap="round"/>
        <path d="M135 109 Q146 104 158 110" fill="none" stroke="#B9B6B0" strokeWidth="3.4" strokeLinecap="round"/>
        <path d="M128 124 Q122 138 127 141 Q131 142 134 140" fill="none" stroke="#92623F" strokeWidth="2.6" strokeLinecap="round"/>
        <path d="M113 150 Q128 162 143 150" fill="none" stroke="#7A2E2A" strokeWidth="3.2" strokeLinecap="round"/>
        <path d="M96 100 Q128 94 160 100" fill="none" stroke="#92623F" strokeWidth="1.6" opacity=".7"/>
        <path d="M104 134 Q100 140 104 146 M152 134 Q156 140 152 146" fill="none" stroke="#92623F" strokeWidth="1.6" opacity=".7"/>
        <circle cx="100" cy="140" r="7" fill="#E57373" opacity=".18"/>
        <circle cx="156" cy="140" r="7" fill="#E57373" opacity=".18"/>
        <circle cx="128" cy="96" r="4" fill="#C62828"/>
        <circle cx="80" cy="140" r="5" fill="#DDE3E8"/>
        <circle cx="176" cy="140" r="5" fill="#DDE3E8"/>
        <path d="M62 150 C44 40 212 40 194 150" fill="none" stroke="#B3342B" strokeWidth="9"/>
        <path d="M62 150 C44 40 212 40 194 150" fill="none" stroke="#C9962B" strokeWidth="2" strokeDasharray="3 6" transform="translate(0,0)"/>
      </g>
    </>
  )
}
function FolkPerformerArt() {
  const id = React.useId().replace(/:/g, "")
  const clip = `${id}-clip`

  return (
    <>
      <defs>
        <clipPath id={clip}>
          <circle cx="128" cy="128" r="128"/>
        </clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>
        <rect width="256" height="256" fill="#F2CFA3"/>
        <path d="M24 256 C24 206 76 190 128 190 C180 190 232 206 232 256 Z" fill="#E8715A"/>
        <path d="M24 256 C24 206 76 190 128 190 C180 190 232 206 232 256" fill="none" stroke="#F4C542" strokeWidth="7"/>
        <path d="M112 160 H144 V200 C144 208 112 208 112 200 Z" fill="#7E4D32"/>
        <ellipse cx="80" cy="124" rx="8" ry="13" fill="#7E4D32"/>
        <ellipse cx="176" cy="124" rx="8" ry="13" fill="#7E4D32"/>
        <ellipse cx="128" cy="118" rx="48" ry="56" fill="#9A6240"/>
        <ellipse cx="110" cy="122" rx="4" ry="5" fill="#2B1B14"/>
        <ellipse cx="146" cy="122" rx="4" ry="5" fill="#2B1B14"/>
        <circle cx="111.5" cy="120.5" r="1.3" fill="#fff"/>
        <circle cx="147.5" cy="120.5" r="1.3" fill="#fff"/>
        <path d="M98 110 Q110 104 121 109" fill="none" stroke="#2B1B14" strokeWidth="3.2" strokeLinecap="round"/>
        <path d="M135 109 Q146 104 158 110" fill="none" stroke="#2B1B14" strokeWidth="3.2" strokeLinecap="round"/>
        <path d="M128 124 Q122 138 127 141 Q131 142 134 140" fill="none" stroke="#7E4D32" strokeWidth="2.6" strokeLinecap="round"/>
        <path d="M113 150 Q128 162 143 150" fill="none" stroke="#7A2E2A" strokeWidth="3.2" strokeLinecap="round"/>
        <circle cx="100" cy="140" r="7" fill="#E57373" opacity=".18"/>
        <circle cx="156" cy="140" r="7" fill="#E57373" opacity=".18"/>
        <path d="M106 146 Q117 136 128 143 Q139 136 150 146 Q139 151 128 148 Q117 151 106 146 Z" fill="#1B120D"/>
        <path d="M76 106 C64 44 192 44 180 106 C164 84 92 84 76 106 Z" fill="#B3342B"/>
        <path d="M80 96 C120 70 140 70 176 96" fill="none" stroke="#F4C542" strokeWidth="6"/>
        <path d="M82 84 C120 56 142 56 174 84" fill="none" stroke="#FFF8E7" strokeWidth="3" strokeDasharray="5 6"/>
        <path d="M178 70 C204 60 206 100 196 128" fill="none" stroke="#B3342B" strokeWidth="10" strokeLinecap="round"/>
        <circle cx="128" cy="62" r="7" fill="#F4C542"/>
        <circle cx="80" cy="140" r="5" fill="#C9962B"/>
        <circle cx="176" cy="140" r="5" fill="#C9962B"/>
        <path d="M100 196 Q128 210 156 196" fill="none" stroke="#F4C542" strokeWidth="5" strokeLinecap="round" strokeDasharray="1 7"/>
        <path d="M100 202 Q128 226 156 202" fill="none" stroke="#F4C542" strokeWidth="5" strokeLinecap="round" strokeDasharray="1 7"/>
        <path d="M100 196 Q128 210 156 196" fill="none" stroke="#FFF8E7" strokeWidth="5" strokeLinecap="round" strokeDasharray="1 7"/>
      </g>
    </>
  )
}
function OdissiDancerArt() {
  const id = React.useId().replace(/:/g, "")
  const clip = `${id}-clip`

  return (
    <>
      <defs>
        <clipPath id={clip}>
          <circle cx="128" cy="128" r="128"/>
        </clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>
        <rect width="256" height="256" fill="#F0D7B2"/>
        <ellipse cx="128" cy="46" rx="26" ry="24" fill="#1E1410"/>
        <circle cx="106" cy="44" r="5.2" fill="#FFF8E7"/>
        <circle cx="106" cy="44" r="1.6" fill="#E8C766"/>
        <circle cx="110" cy="30" r="5.2" fill="#FFF8E7"/>
        <circle cx="110" cy="30" r="1.6" fill="#E8C766"/>
        <circle cx="126" cy="22" r="5.2" fill="#FFF8E7"/>
        <circle cx="126" cy="22" r="1.6" fill="#E8C766"/>
        <circle cx="145" cy="30" r="5.2" fill="#FFF8E7"/>
        <circle cx="145" cy="30" r="1.6" fill="#E8C766"/>
        <circle cx="150" cy="46" r="5.2" fill="#FFF8E7"/>
        <circle cx="150" cy="46" r="1.6" fill="#E8C766"/>
        <circle cx="146" cy="60" r="5.2" fill="#FFF8E7"/>
        <circle cx="146" cy="60" r="1.6" fill="#E8C766"/>
        <circle cx="110" cy="60" r="5.2" fill="#FFF8E7"/>
        <circle cx="110" cy="60" r="1.6" fill="#E8C766"/>
        <path d="M24 256 C24 206 76 190 128 190 C180 190 232 206 232 256 Z" fill="#8E1B2B"/>
        <path d="M24 256 C24 206 76 190 128 190 C180 190 232 206 232 256 Z" fill="none" stroke="#C9962B" strokeWidth="7" transform="translate(0,0)"/>
        <path d="M168 196 C200 214 214 236 214 256 H236 C236 220 200 196 168 192Z" fill="#6E1220"/>
        <path d="M112 160 H144 V200 C144 208 112 208 112 200 Z" fill="#9A6340"/>
        <ellipse cx="80" cy="124" rx="8" ry="13" fill="#9A6340"/>
        <ellipse cx="176" cy="124" rx="8" ry="13" fill="#9A6340"/>
        <ellipse cx="128" cy="118" rx="48" ry="56" fill="#B77B50"/>
        <path d="M80 116 C72 62 106 52 128 52 C150 52 184 62 176 116 C172 92 154 80 130 76 C108 82 88 92 80 116 Z" fill="#1E1410"/>
        <path d="M128 54 L130 76" stroke="#00000033" strokeWidth="2"/>
        <ellipse cx="110" cy="122" rx="4" ry="5" fill="#2B1B14"/>
        <ellipse cx="146" cy="122" rx="4" ry="5" fill="#2B1B14"/>
        <circle cx="111.5" cy="120.5" r="1.3" fill="#fff"/>
        <circle cx="147.5" cy="120.5" r="1.3" fill="#fff"/>
        <path d="M98 110 Q110 104 121 109" fill="none" stroke="#2B1B14" strokeWidth="3.6" strokeLinecap="round"/>
        <path d="M135 109 Q146 104 158 110" fill="none" stroke="#2B1B14" strokeWidth="3.6" strokeLinecap="round"/>
        <path d="M128 124 Q122 138 127 141 Q131 142 134 140" fill="none" stroke="#9A6340" strokeWidth="2.6" strokeLinecap="round"/>
        <path d="M113 150 Q128 162 143 150" fill="none" stroke="#7A2E2A" strokeWidth="3.2" strokeLinecap="round"/>
        <circle cx="100" cy="140" r="7" fill="#E57373" opacity=".18"/>
        <circle cx="156" cy="140" r="7" fill="#E57373" opacity=".18"/>
        <circle cx="128" cy="96" r="4" fill="#C62828"/>
        <circle cx="121" cy="140" r="7" fill="none" stroke="#C9962B" strokeWidth="2.4"/>
        <circle cx="121" cy="147" r="2.4" fill="#C62828"/>
        <circle cx="80" cy="140" r="5" fill="#C9962B"/>
        <circle cx="176" cy="140" r="5" fill="#C9962B"/>
        <path d="M96 70 L128 6 L160 70 Q128 62 96 70 Z" fill="#C9962B"/>
        <path d="M128 14 V62" stroke="#F6E3A1" strokeWidth="2"/>
        <circle cx="128" cy="40" r="4" fill="#C62828"/>
        <circle cx="114" cy="58" r="3" fill="#FFF8E7"/>
        <circle cx="142" cy="58" r="3" fill="#FFF8E7"/>
        <path d="M100 196 Q128 210 156 196" fill="none" stroke="#C9962B" strokeWidth="3" strokeLinecap="round" />
        <path d="M100 202 Q128 226 156 202" fill="none" stroke="#C9962B" strokeWidth="3" strokeLinecap="round" />
      </g>
    </>
  )
}
function PattachitraArtistArt() {
  const id = React.useId().replace(/:/g, "")
  const clip = `${id}-clip`

  return (
    <>
      <defs>
        <clipPath id={clip}>
          <circle cx="128" cy="128" r="128"/>
        </clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>
        <rect width="256" height="256" fill="#E8D3A9"/>
        <path d="M24 256 C24 206 76 190 128 190 C180 190 232 206 232 256 Z" fill="#F9F3E6"/>
        <path d="M24 256 C24 206 76 190 128 190 C180 190 232 206 232 256" fill="none" stroke="#C9962B" strokeWidth="5"/>
        <path d="M128 192 V256" stroke="#00000018" strokeWidth="3"/>
        <path d="M112 160 H144 V200 C144 208 112 208 112 200 Z" fill="#966542"/>
        <ellipse cx="80" cy="124" rx="8" ry="13" fill="#966542"/>
        <ellipse cx="176" cy="124" rx="8" ry="13" fill="#966542"/>
        <ellipse cx="128" cy="118" rx="48" ry="56" fill="#B27C53"/>
        <path d="M81 128 C80 196 176 196 175 128 C172 158 152 172 128 172 C104 172 84 158 81 128 Z" fill="#2A1B14"/>
        <path d="M80 114 C74 62 106 54 128 54 C150 54 182 62 176 114 C170 90 152 78 128 78 C104 78 86 90 80 114 Z" fill="#21160F"/>
        <ellipse cx="110" cy="122" rx="4" ry="5" fill="#2B1B14"/>
        <ellipse cx="146" cy="122" rx="4" ry="5" fill="#2B1B14"/>
        <circle cx="111.5" cy="120.5" r="1.3" fill="#fff"/>
        <circle cx="147.5" cy="120.5" r="1.3" fill="#fff"/>
        <path d="M98 110 Q110 104 121 109" fill="none" stroke="#2B1B14" strokeWidth="3.2" strokeLinecap="round"/>
        <path d="M135 109 Q146 104 158 110" fill="none" stroke="#2B1B14" strokeWidth="3.2" strokeLinecap="round"/>
        <path d="M128 124 Q122 138 127 141 Q131 142 134 140" fill="none" stroke="#966542" strokeWidth="2.6" strokeLinecap="round"/>
        <path d="M113 150 Q128 162 143 150" fill="none" stroke="#7A2E2A" strokeWidth="3.2" strokeLinecap="round"/>
        <circle cx="100" cy="140" r="7" fill="#E57373" opacity=".18"/>
        <circle cx="156" cy="140" r="7" fill="#E57373" opacity=".18"/>
        <path d="M106 146 Q117 136 128 143 Q139 136 150 146 Q139 151 128 148 Q117 151 106 146 Z" fill="#2A1B14"/>
        <path d="M113 151 Q128 160 143 151" fill="none" stroke="#7A2E2A" strokeWidth="3" strokeLinecap="round"/>
        <g fill="none" strokeLinecap="round">
          <path d="M117 74 V96 M139 74 V96" stroke="#F6EBD6" strokeWidth="4.5"/>
          <path d="M128 80 V98" stroke="#C62828" strokeWidth="3"/>
        </g>
        <g transform="rotate(-28 186 120)">
          <rect x="182" y="84" width="6" height="64" rx="3" fill="#8B5A2B"/>
          <path d="M182 84 Q185 66 188 84Z" fill="#C62828"/>
        </g>
      </g>
    </>
  )
}
function SambalpuriArtisanArt() {
  const id = React.useId().replace(/:/g, "")
  const clip = `${id}-clip`
  const ikat = `${id}-ikat`

  return (
    <>
      <defs>
        <clipPath id={clip}>
          <circle cx="128" cy="128" r="128"/>
        </clipPath>
        <pattern id={ikat} width="14" height="14" patternUnits="userSpaceOnUse">
          <rect width="14" height="14" fill="#7A1F2B"/>
          <path d="M7 1 L12 7 L7 13 L2 7 Z" fill="none" stroke="#F1D9A0" strokeWidth="1.6"/>
          <circle cx="7" cy="7" r="1.3" fill="#F1D9A0"/>
        </pattern>
      </defs>
      <g clipPath={`url(#${clip})`}>
        <rect width="256" height="256" fill="#EFD9B4"/>
        <path d="M24 256 C24 206 76 190 128 190 C180 190 232 206 232 256 Z" fill="#F6EFE0"/>
        <path d="M44 224 C60 196 100 188 128 214 C156 188 196 196 212 224 L212 256 H44 Z" fill={`url(#${ikat})`}/>
        <path d="M44 224 C60 196 100 188 128 214 C156 188 196 196 212 224" fill="none" stroke="#2B1B14" strokeWidth="3"/>
        <path d="M112 160 H144 V200 C144 208 112 208 112 200 Z" fill="#8B5A38"/>
        <ellipse cx="80" cy="124" rx="8" ry="13" fill="#8B5A38"/>
        <ellipse cx="176" cy="124" rx="8" ry="13" fill="#8B5A38"/>
        <ellipse cx="128" cy="118" rx="48" ry="56" fill="#A9714B"/>
        <path d="M80 114 C74 62 106 54 128 54 C150 54 182 62 176 114 C170 90 152 78 128 78 C104 78 86 90 80 114 Z" fill="#1B120D"/>
        <ellipse cx="110" cy="122" rx="4" ry="5" fill="#2B1B14"/>
        <ellipse cx="146" cy="122" rx="4" ry="5" fill="#2B1B14"/>
        <circle cx="111.5" cy="120.5" r="1.3" fill="#fff"/>
        <circle cx="147.5" cy="120.5" r="1.3" fill="#fff"/>
        <path d="M98 110 Q110 104 121 109" fill="none" stroke="#2B1B14" strokeWidth="3.2" strokeLinecap="round"/>
        <path d="M135 109 Q146 104 158 110" fill="none" stroke="#2B1B14" strokeWidth="3.2" strokeLinecap="round"/>
        <path d="M128 124 Q122 138 127 141 Q131 142 134 140" fill="none" stroke="#8B5A38" strokeWidth="2.6" strokeLinecap="round"/>
        <path d="M113 150 Q128 162 143 150" fill="none" stroke="#7A2E2A" strokeWidth="3.2" strokeLinecap="round"/>
        <circle cx="100" cy="140" r="7" fill="#E57373" opacity=".18"/>
        <circle cx="156" cy="140" r="7" fill="#E57373" opacity=".18"/>
        <path d="M106 146 Q117 136 128 143 Q139 136 150 146 Q139 151 128 148 Q117 151 106 146 Z" fill="#1B120D"/>
        <g fill="none" stroke="#3B2A22" strokeWidth="3">
          <circle cx="110" cy="122" r="13"/>
          <circle cx="146" cy="122" r="13"/>
          <path d="M123 120 H133"/>
          <path d="M97 120 L82 116 M159 120 L174 116"/>
        </g>
        <path d="M60 100 Q128 56 196 100" fill="none" stroke="none"/>
      </g>
    </>
  )
}
function YoungManArt() {
  const id = React.useId().replace(/:/g, "")
  const clip = `${id}-clip`

  return (
    <>
      <defs>
        <clipPath id={clip}>
          <circle cx="128" cy="128" r="128"/>
        </clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>
        <rect width="256" height="256" fill="#EFD6B0"/>
        <path d="M24 256 C24 206 76 190 128 190 C180 190 232 206 232 256 Z" fill="#C5683C"/>
        <path d="M112 190 L128 224 L144 190" fill="#F6EFE0"/>
        <path d="M128 224 V256" stroke="#00000022" strokeWidth="2"/>
        <circle cx="128" cy="236" r="2.4" fill="#F6EFE0"/>
        <circle cx="128" cy="248" r="2.4" fill="#F6EFE0"/>
        <path d="M112 160 H144 V200 C144 208 112 208 112 200 Z" fill="#98684A"/>
        <ellipse cx="80" cy="124" rx="8" ry="13" fill="#98684A"/>
        <ellipse cx="176" cy="124" rx="8" ry="13" fill="#98684A"/>
        <ellipse cx="128" cy="118" rx="48" ry="56" fill="#B57F57"/>
        <path d="M80 114 C74 62 106 54 128 54 C150 54 182 62 176 114 C170 90 152 78 128 78 C104 78 86 90 80 114 Z" fill="#1B120D"/>
        <ellipse cx="110" cy="122" rx="4" ry="5" fill="#2B1B14"/>
        <ellipse cx="146" cy="122" rx="4" ry="5" fill="#2B1B14"/>
        <circle cx="111.5" cy="120.5" r="1.3" fill="#fff"/>
        <circle cx="147.5" cy="120.5" r="1.3" fill="#fff"/>
        <path d="M98 110 Q110 104 121 109" fill="none" stroke="#2B1B14" strokeWidth="3.2" strokeLinecap="round"/>
        <path d="M135 109 Q146 104 158 110" fill="none" stroke="#2B1B14" strokeWidth="3.2" strokeLinecap="round"/>
        <path d="M128 124 Q122 138 127 141 Q131 142 134 140" fill="none" stroke="#98684A" strokeWidth="2.6" strokeLinecap="round"/>
        <path d="M113 150 Q128 162 143 150" fill="none" stroke="#7A2E2A" strokeWidth="3.2" strokeLinecap="round"/>
        <circle cx="100" cy="140" r="7" fill="#E57373" opacity=".18"/>
        <circle cx="156" cy="140" r="7" fill="#E57373" opacity=".18"/>
        <path d="M104 160 Q128 178 152 160 Q150 172 128 176 Q106 172 104 160Z" fill="#1B120D" opacity=".22"/>
      </g>
    </>
  )
}
function YoungWomanArt() {
  const id = React.useId().replace(/:/g, "")
  const clip = `${id}-clip`
  const ikat = `${id}-ikat`

  return (
    <>
      <defs>
        <clipPath id={clip}>
          <circle cx="128" cy="128" r="128"/>
        </clipPath>
        <pattern id={ikat} width="14" height="14" patternUnits="userSpaceOnUse">
          <rect width="14" height="14" fill="#1F3A5F"/>
          <path d="M7 1 L12 7 L7 13 L2 7 Z" fill="none" stroke="#F1D9A0" strokeWidth="1.6"/>
          <circle cx="7" cy="7" r="1.3" fill="#F1D9A0"/>
        </pattern>
      </defs>
      <g clipPath={`url(#${clip})`}>
        <rect width="256" height="256" fill="#EAD0AA"/>
        <path d="M76 120 C60 190 70 230 84 256 H172 C186 230 196 190 180 120Z" fill="#241711"/>
        <path d="M24 256 C24 206 76 190 128 190 C180 190 232 206 232 256 Z" fill="#2F6F73"/>
        <path d="M24 256 C24 206 60 192 100 190 L128 232 L160 190 C200 192 232 206 232 256Z" fill={`url(#${ikat})`}/>
        <path d="M112 160 H144 V200 C144 208 112 208 112 200 Z" fill="#A87248"/>
        <ellipse cx="80" cy="124" rx="8" ry="13" fill="#A87248"/>
        <ellipse cx="176" cy="124" rx="8" ry="13" fill="#A87248"/>
        <ellipse cx="128" cy="118" rx="48" ry="56" fill="#C48B60"/>
        <path d="M80 116 C72 62 106 52 128 52 C150 52 184 62 176 116 C172 92 154 80 130 76 C108 82 88 92 80 116 Z" fill="#241711"/>
        <path d="M128 54 L130 76" stroke="#00000033" strokeWidth="2"/>
        <ellipse cx="110" cy="122" rx="4" ry="5" fill="#2B1B14"/>
        <ellipse cx="146" cy="122" rx="4" ry="5" fill="#2B1B14"/>
        <circle cx="111.5" cy="120.5" r="1.3" fill="#fff"/>
        <circle cx="147.5" cy="120.5" r="1.3" fill="#fff"/>
        <path d="M98 110 Q110 104 121 109" fill="none" stroke="#2B1B14" strokeWidth="3.2" strokeLinecap="round"/>
        <path d="M135 109 Q146 104 158 110" fill="none" stroke="#2B1B14" strokeWidth="3.2" strokeLinecap="round"/>
        <path d="M128 124 Q122 138 127 141 Q131 142 134 140" fill="none" stroke="#A87248" strokeWidth="2.6" strokeLinecap="round"/>
        <path d="M113 150 Q128 162 143 150" fill="none" stroke="#7A2E2A" strokeWidth="3.2" strokeLinecap="round"/>
        <circle cx="100" cy="140" r="7" fill="#E57373" opacity=".18"/>
        <circle cx="156" cy="140" r="7" fill="#E57373" opacity=".18"/>
        <circle cx="128" cy="96" r="4" fill="#C62828"/>
        <circle cx="80" cy="140" r="5" fill="#C9962B"/>
        <circle cx="176" cy="140" r="5" fill="#C9962B"/>
      </g>
    </>
  )
}

/* --------------------------------- AvatarArt ------------------------------- */

const AVATAR_ART: Record<AvatarArtName, React.ComponentType> = {
  "adivasi-man": AdivasiManArt,
  "adivasi-woman": AdivasiWomanArt,
  "elder-man": ElderManArt,
  "elder-woman": ElderWomanArt,
  "folk-performer": FolkPerformerArt,
  "odissi-dancer": OdissiDancerArt,
  "pattachitra-artist": PattachitraArtistArt,
  "sambalpuri-artisan": SambalpuriArtisanArt,
  "young-man": YoungManArt,
  "young-woman": YoungWomanArt,
}

type AvatarArtProps = Omit<React.ComponentProps<"svg">, "name"> & {
  /** Which portrait to draw. */
  name: AvatarArtName
  /** Accessible name. Defaults to a description of the portrait. */
  label?: string
}

/** Inline SVG portrait sized to fill an `<Avatar>`. */
function AvatarArt({ name, label, className, ...props }: AvatarArtProps) {
  const Art = AVATAR_ART[name]

  return (
    <svg
      data-slot="avatar-art"
      data-name={name}
      viewBox="0 0 256 256"
      role="img"
      aria-label={label ?? AVATAR_ART_LABELS[name]}
      className={cn("size-full", className)}
      {...props}
    >
      <Art />
    </svg>
  )
}

export { AvatarArt }
export type { AvatarArtName }

import { CatProps } from './types';

export const CatHead = ({ id }: CatProps) => {
    return (
        <g id={id} className="lineDraw">
            <path
                d={`M4279 6752 c-21 -9 -302 -303 -338 -354 -14 -21 -32 -38 -39 -38 -29
                0 -292 -93 -376 -133 -230 -110 -582 -351 -830 -572 -38 -33 -74 -64 -82 -68
                -22 -12 -17 -33 11 -45 14 -6 25 -18 25 -27 0 -8 4 -15 9 -15 14 0 93 55 116
                80 32 36 211 181 338 273 241 176 455 293 672 367 83 28 161 54 175 56 14 3
                30 12 35 21 49 78 315 348 332 336 28 -19 227 -283 254 -336 36 -71 64 -89
                183 -118 102 -24 239 -74 396 -142 58 -25 211 -82 340 -127 258 -90 333 -125
                552 -253 174 -102 226 -129 295 -151 28 -10 63 -26 77 -37 37 -29 67 -24 200
                35 181 80 366 150 374 142 13 -13 14 -224 2 -314 -11 -83 -26 -134 -84 -285
                -15 -38 -31 -99 -37 -135 -6 -37 -14 -90 -19 -118 -4 -28 -15 -65 -24 -82 -9
                -17 -16 -50 -16 -72 0 -36 9 -54 64 -127 100 -133 266 -491 316 -679 12 -43
                28 -96 37 -116 15 -35 15 -76 1 -207 -3 -20 4 -25 42 -37 25 -8 46 -14 47 -14
                12 -1 31 69 36 128 5 65 2 88 -33 210 -73 260 -242 636 -346 771 l-56 74 17
                36 c10 20 21 61 25 91 23 155 34 200 74 303 64 163 71 204 70 422 0 212 -10
                269 -49 287 -21 9 -48 2 -182 -51 -87 -34 -211 -85 -275 -113 l-117 -50 -103
                41 c-57 23 -173 82 -258 132 -222 130 -348 189 -570 264 -107 37 -269 97 -360
                135 -198 82 -309 121 -410 145 -88 21 -93 24 -119 78 -19 38 -69 105 -226 298
                -67 82 -119 110 -166 91z`}
            />
            <path
                d={`M3515 5279 c-60 -53 -71 -164 -19 -216 19 -19 33 -23 88 -23 58 0 70
                3 96 28 39 34 55 97 40 152 -24 90 -133 122 -205 59z`}
            />
            <path
                d={`M3905 5083 c-12 -12 -16 -27 -12 -53 7 -51 33 -87 81 -112 35 -18 53
                -20 144 -16 l103 5 15 -28 c35 -69 130 -105 243 -93 87 9 125 48 85 88 -18 18
                -23 19 -119 16 -85 -2 -120 19 -131 78 -14 83 -53 105 -111 64 -28 -19 -54
                -27 -99 -30 -71 -5 -104 8 -104 42 0 48 -62 73 -95 39z`}
            />
            <path
                d={`M5245 4765 c-57 -20 -91 -63 -100 -123 -4 -28 -4 -60 0 -72 16 -50
                147 -70 199 -29 24 19 26 26 26 104 0 64 -4 87 -17 103 -24 29 -60 34 -108 17z`}
            />
        </g>
    );
};

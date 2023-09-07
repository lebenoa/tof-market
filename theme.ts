import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'random',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace",
		"--theme-font-family-heading": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace",
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "2px",
		"--theme-rounded-container": "2px",
		"--theme-border-base": "0px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "255 255 255",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #d60dab 
		"--color-primary-50": "249 219 242", // #f9dbf2
		"--color-primary-100": "247 207 238", // #f7cfee
		"--color-primary-200": "245 195 234", // #f5c3ea
		"--color-primary-300": "239 158 221", // #ef9edd
		"--color-primary-400": "226 86 196", // #e256c4
		"--color-primary-500": "214 13 171", // #d60dab
		"--color-primary-600": "193 12 154", // #c10c9a
		"--color-primary-700": "161 10 128", // #a10a80
		"--color-primary-800": "128 8 103", // #800867
		"--color-primary-900": "105 6 84", // #690654
		// secondary | #618afd 
		"--color-secondary-50": "231 237 255", // #e7edff
		"--color-secondary-100": "223 232 255", // #dfe8ff
		"--color-secondary-200": "216 226 255", // #d8e2ff
		"--color-secondary-300": "192 208 254", // #c0d0fe
		"--color-secondary-400": "144 173 254", // #90adfe
		"--color-secondary-500": "97 138 253", // #618afd
		"--color-secondary-600": "87 124 228", // #577ce4
		"--color-secondary-700": "73 104 190", // #4968be
		"--color-secondary-800": "58 83 152", // #3a5398
		"--color-secondary-900": "48 68 124", // #30447c
		// tertiary | #120f89 
		"--color-tertiary-50": "219 219 237", // #dbdbed
		"--color-tertiary-100": "208 207 231", // #d0cfe7
		"--color-tertiary-200": "196 195 226", // #c4c3e2
		"--color-tertiary-300": "160 159 208", // #a09fd0
		"--color-tertiary-400": "89 87 172", // #5957ac
		"--color-tertiary-500": "18 15 137", // #120f89
		"--color-tertiary-600": "16 14 123", // #100e7b
		"--color-tertiary-700": "14 11 103", // #0e0b67
		"--color-tertiary-800": "11 9 82", // #0b0952
		"--color-tertiary-900": "9 7 67", // #090743
		// success | #1b3f9a 
		"--color-success-50": "221 226 240", // #dde2f0
		"--color-success-100": "209 217 235", // #d1d9eb
		"--color-success-200": "198 207 230", // #c6cfe6
		"--color-success-300": "164 178 215", // #a4b2d7
		"--color-success-400": "95 121 184", // #5f79b8
		"--color-success-500": "27 63 154", // #1b3f9a
		"--color-success-600": "24 57 139", // #18398b
		"--color-success-700": "20 47 116", // #142f74
		"--color-success-800": "16 38 92", // #10265c
		"--color-success-900": "13 31 75", // #0d1f4b
		// warning | #fc69b0 
		"--color-warning-50": "255 233 243", // #ffe9f3
		"--color-warning-100": "254 225 239", // #fee1ef
		"--color-warning-200": "254 218 235", // #fedaeb
		"--color-warning-300": "254 195 223", // #fec3df
		"--color-warning-400": "253 150 200", // #fd96c8
		"--color-warning-500": "252 105 176", // #fc69b0
		"--color-warning-600": "227 95 158", // #e35f9e
		"--color-warning-700": "189 79 132", // #bd4f84
		"--color-warning-800": "151 63 106", // #973f6a
		"--color-warning-900": "123 51 86", // #7b3356
		// error | #b017b3 
		"--color-error-50": "243 220 244", // #f3dcf4
		"--color-error-100": "239 209 240", // #efd1f0
		"--color-error-200": "235 197 236", // #ebc5ec
		"--color-error-300": "223 162 225", // #dfa2e1
		"--color-error-400": "200 93 202", // #c85dca
		"--color-error-500": "176 23 179", // #b017b3
		"--color-error-600": "158 21 161", // #9e15a1
		"--color-error-700": "132 17 134", // #841186
		"--color-error-800": "106 14 107", // #6a0e6b
		"--color-error-900": "86 11 88", // #560b58
		// surface | #3e2e4a 
		"--color-surface-50": "226 224 228", // #e2e0e4
		"--color-surface-100": "216 213 219", // #d8d5db
		"--color-surface-200": "207 203 210", // #cfcbd2
		"--color-surface-300": "178 171 183", // #b2abb7
		"--color-surface-400": "120 109 128", // #786d80
		"--color-surface-500": "62 46 74", // #3e2e4a
		"--color-surface-600": "56 41 67", // #382943
		"--color-surface-700": "47 35 56", // #2f2338
		"--color-surface-800": "37 28 44", // #251c2c
		"--color-surface-900": "30 23 36", // #1e1724
		
	}
}
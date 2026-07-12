import { GoogleAnalytics } from '@next/third-parties/google'

export default function Head() {
	const GA_ID = 'G-ZNSFR7C9PM'
	return (
		<head>
			<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />
			<link rel='manifest' href='/manifest.json' />
			<link rel='icon' href='/favicon.png' />
			{/* 已删除失效谷歌字体外链 */}
			<GoogleAnalytics gaId={GA_ID} />
		</head>
	)
}
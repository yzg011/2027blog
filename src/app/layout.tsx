import '@/styles/globals.css'
import type { Metadata, Readonly } from 'next'
// 本地自托管字体，彻底抛弃谷歌字体CDN
import { Averia_Gruesa_Libre } from 'next/font/google'
import Layout from '@/layout'
import Head from '@/layout/head'
import siteContent from '@/config/site-content.json'

// 字体配置，打包进本地，无外部网络请求
const averiaFont = Averia_Gruesa_Libre({
  subsets: ['latin'],
  weight: '400',
  display: 'swap'
})

const {
	meta: { title, description },
	theme
} = siteContent

export const metadata: Metadata = {
	title,
	description,
	openGraph: {
		title,
		description
	},
	twitter: {
		title,
		description
	}
}

const htmlStyle = {
	cursor: 'url(/images/cursor.svg) 2 1, auto',
	'--color-brand': theme.colorBrand,
	'--color-primary': theme.colorPrimary,
	'--color-secondary': theme.colorSecondary,
	'--color-brand-secondary': theme.colorBrandSecondary,
	'--color-bg': theme.colorBg,
	'--color-border': theme.colorBorder,
	'--color-card': theme.colorCard,
	'--color-article': theme.colorArticle
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html 
      lang='en' 
      suppressHydrationWarning 
      style={htmlStyle}
      className={averiaFont.className}
    >
			<Head />

			<body>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							if (/windows|win32/i.test(navigator.userAgent)) {
								document.documentElement.classList.add('windows');
							}
							// 屏蔽广告拦截GA产生的 installation 404 控制台报错
							window.addEventListener('error', e => {
								if (e.message?.includes('installation lookup failed')) {
									e.preventDefault();
									e.stopImmediatePropagation();
								}
							})
		      `
					}}
				/>

				<Layout>{children}</Layout>
			</body>
		</html>
	)
}
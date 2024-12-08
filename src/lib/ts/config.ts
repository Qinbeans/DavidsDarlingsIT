import type { FloatingService } from './types';

export const service_items: Array<FloatingService> = [
	{
		title: '🔍 Event Log Analysis',
		content: 'See who accessed your device, when they did it, and if their attempt succeeded.',
		tools: [
			{
				name: 'Event Log Explorer',
				url: 'https://eventlogxp.com/'
			}
		]
	},
	{
		title: '🛡️ Registry Detective Work',
		content: 'Catch unauthorized system tweaks or hidden malware in the act.',
		tools: [
			{
				name: 'Registry Explorer',
				url: 'https://www.sans.org/tools/registry-explorer/'
			}
		]
	},
	{
		title: '💾 USB Drive Investigation',
		content: 'Find out if a USB was connected, when it was plugged in, and how long it stayed.',
		tools: [
			{
				name: 'USB Detective',
				url: 'https://usbdetective.com/'
			}
		]
	},
	{
		title: '🌐 Browser History Review',
		content: 'Spot visits to malicious websites or identify unauthorized browsing activity.',
		tools: [
			{
				name: 'DB Browser for SQLite',
				url: 'https://sqlitebrowser.org/'
			}
		]
	},
	{
		title: '☁️ Cloud Storage Checkup',
		content: 'Ensure all uploads, downloads, and file access are expected.',
		tools: [
			{
				name: 'DB Browser for SQLite',
				url: 'https://sqlitebrowser.org/'
			}
		]
	},
	{
		title: '📂 Shortcut & Folder Analysis',
		content: 'Detect tampered shortcuts or redirected files that could hide malicious programs.',
		tools: [
			{
				name: 'Shellbag Explorer',
				url: 'https://ericzimmerman.github.io/#!index.md'
			},
			{
				name: 'LECmd',
				url: 'https://ericzimmerman.github.io/#!index.md'
			},
			{
				name: 'Timeline Explorer',
				url: 'https://ericzimmerman.github.io/#!index.md'
			}
		]
	},
	{
		title: '🗑️ Recycle Bin Recovery',
		content: 'Examine deleted files to spot any harmful or suspicious data.',
		tools: [
			{
				name: 'RBCmd',
				url: 'https://ericzimmerman.github.io/#!index.md'
			},
			{
				name: 'QPhotoRec',
				url: 'https://www.cgsecurity.org/wiki/PhotoRec'
			},
			{
				name: 'FTK Imager',
				url: 'https://www.exterro.com/digital-forensics-software/ftk-imager'
			}
		]
	},
	{
		title: '📱 Application Activity Inspection',
		content: 'Verify that only trusted apps have been running on your machine.',
		// SRUM Dump; Registry Explorer; WinPrefetchView; PECmd; Timeline Explorer
		tools: [
			{
				name: 'SRUM Dump',
				url: 'https://ericzimmerman.github.io/#!index.md'
			},
			{
				name: 'Registry Explorer',
				url: 'https://ericzimmerman.github.io/#!index.md'
			},
			{
				name: 'WinPrefetchView',
				url: 'https://ericzimmerman.github.io/#!index.md'
			},
			{
				name: 'PECmd',
				url: 'https://ericzimmerman.github.io/#!index.md'
			},
			{
				name: 'Timeline Explorer',
				url: 'https://ericzimmerman.github.io/#!index.md'
			}
		]
	}
];

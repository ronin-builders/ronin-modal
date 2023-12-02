import { Chain, initW3 } from '@w3vm/core'
import { roninInjected } from '../connectors/injected'
import { WalletConnect } from '@w3vm/walletconnect'

import '../../ui/ronin-modal'

type RoninOptions = {
	SSR?: boolean
	projectId: string
	chain: Chain
}

if (typeof window !== 'undefined') {
	const fontEl = document.createElement('link')
	fontEl.rel = 'stylesheet'
	fontEl.href = 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap'

	document.head.appendChild(fontEl)

	const fontPreload = document.createElement('link')
	fontPreload.rel = 'preload'
	fontPreload.as = 'font'
  fontPreload.crossOrigin = "true"
  fontPreload.type = "font/woff2"
	fontPreload.href = 'https://fonts.gstatic.com/s/worksans/v19/QGYsz_wNahGAdqQ43Rh_fKDp.woff2'

	document.head.appendChild(fontPreload)

	const modal = document.createElement('ronin-modal')
	document.body.insertAdjacentElement('beforeend', modal)
	document.body.style.width = '100%'
}

export function createRoninModal({ SSR, projectId, chain }: RoninOptions) {
	const w3props = initW3({
		connectors: [
			roninInjected,
			new WalletConnect({
				projectId,
				showQrModal: false,
				chains: [Number(chain.chainId)],
			}),
		],
		SSR,
	})

	return w3props
}

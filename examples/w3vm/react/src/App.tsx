import { ronin, createRoninModal } from "@roninbuilders/modal"

function generateNonce() {
	const array = new Uint8Array(16);
	window.crypto.getRandomValues(array);
	return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join('');
}

  
createRoninModal({
	chain: ronin,
	projectId: "cdbd18f9f96172be74c3e351ce99b908",
	siweConfig: {
		getNonce: generateNonce,
		verifyMessage: ()=>true,
		getSession: ()=> new Promise((resolve)=>resolve("session")),
		signOut: ()=>{}
	  },
})

function App() {
  return <ronin-button/>
}

export default App
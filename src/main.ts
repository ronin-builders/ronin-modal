import { ronin, saigon } from './lib/w3vm/chains'
import {createRoninModal} from './lib/w3vm/main/index'

createRoninModal({
  chains:[ronin, saigon],
  projectId: 'cdbd18f9f96172be74c3e351ce99b908'
})
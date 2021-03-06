export { default as Button } from '../../src/components/Button.vue'
export { default as Chart } from '../../src/components/Chart.vue'
export { default as Main } from '../../src/components/Main.vue'
export { default as Message } from '../../src/components/Message.vue'
export { default as MessageList } from '../../src/components/MessageList.vue'
export { default as SocialLogin } from '../../src/components/SocialLogin.vue'
export { default as Spinner } from '../../src/components/Spinner.vue'
export { default as TextBox } from '../../src/components/TextBox.vue'
export { default as TotalTime } from '../../src/components/TotalTime.vue'

export const LazyButton = import('../../src/components/Button.vue' /* webpackChunkName: "components/button" */).then(c => c.default || c)
export const LazyChart = import('../../src/components/Chart.vue' /* webpackChunkName: "components/chart" */).then(c => c.default || c)
export const LazyMain = import('../../src/components/Main.vue' /* webpackChunkName: "components/main" */).then(c => c.default || c)
export const LazyMessage = import('../../src/components/Message.vue' /* webpackChunkName: "components/message" */).then(c => c.default || c)
export const LazyMessageList = import('../../src/components/MessageList.vue' /* webpackChunkName: "components/message-list" */).then(c => c.default || c)
export const LazySocialLogin = import('../../src/components/SocialLogin.vue' /* webpackChunkName: "components/social-login" */).then(c => c.default || c)
export const LazySpinner = import('../../src/components/Spinner.vue' /* webpackChunkName: "components/spinner" */).then(c => c.default || c)
export const LazyTextBox = import('../../src/components/TextBox.vue' /* webpackChunkName: "components/text-box" */).then(c => c.default || c)
export const LazyTotalTime = import('../../src/components/TotalTime.vue' /* webpackChunkName: "components/total-time" */).then(c => c.default || c)

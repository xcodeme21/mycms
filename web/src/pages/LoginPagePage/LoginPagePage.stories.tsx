import type { ComponentMeta } from '@storybook/react'

import LoginPagePage from './LoginPagePage'

export const generated = () => {
  return <LoginPagePage />
}

export default {
  title: 'Pages/LoginPagePage',
  component: LoginPagePage,
} as ComponentMeta<typeof LoginPagePage>

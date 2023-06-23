import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const LoginPagePage = () => {
  return (
    <>
      <MetaTags title="LoginPage" description="LoginPage page" />

      <h1>LoginPagePage</h1>
      <p>
        Find me in <code>./web/src/pages/LoginPagePage/LoginPagePage.tsx</code>
      </p>
      <p>
        My default route is named <code>loginPage</code>, link to me with `
        <Link to={routes.loginPage()}>LoginPage</Link>`
      </p>
    </>
  )
}

export default LoginPagePage

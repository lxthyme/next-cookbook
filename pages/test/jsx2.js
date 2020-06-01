import React from 'react'

import { withTranslation } from '../../plugins/i18n'
import css from 'styled-jsx/css'
import Link from 'next/link'

const { className, styles } = css.resolve`
  a {
    color: green;
  }
`

const Page = () => (
  <div>
    {/* use the className */}
    <Link href="/">
      <a className={className}>About</a>
    </Link>

    {/* render the styles for it */}
    {styles}
  </div>
)

Page.getInitialProps = async ({}) => {
  return {
    namespacesRequired: ['main'],
  }
}

export default withTranslation('common')(Page)

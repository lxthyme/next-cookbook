import React, { FC } from 'react';
import './index.scss';
const PREFIX='leo-icon';
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('../../assets/svg', true, /\.svg$/))
} catch (error) {
  console.log(error)
}
type name='back'|'loading'|'loading-b'|'success'|'warning'|'error';
interface IIconProps {
  name: name
  color?: string,
  size?:number
}

const Icon: FC<IIconProps> = ({ name, color='white',size=20 }) => {
  return (
    <svg className={PREFIX} style={{ fill: color, width:size,height:size }}>
      <use xlinkHref={'#' + name} />
    </svg>
  )
}

export default Icon
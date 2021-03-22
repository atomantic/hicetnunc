import React, { useContext } from 'react'
import classnames from 'classnames'
import { HicetnuncContext } from '../../../context/HicetnuncContext'
import styles from './index.module.scss'

export const VectorComponent = ({ src, interactive, preview, token_info }) => {
  const context = useContext(HicetnuncContext)
  const classes = classnames({
    [styles.container]: true,
    [styles.interactive]: interactive,
  })

  let _creator_ = false
  let _viewer_ = false

  if (token_info && token_info.creators[0]) {
    _creator_ = token_info.creators[0]
  }

  if (context.address !== '') {
    _viewer_ = context.address
  }

  let iframeSrc
  if (preview) {
    iframeSrc = src
  } else {
    iframeSrc = `${src}?creator=${_creator_}&viewer=${_viewer_}`
  }

  return (
    <div className={classes}>
      <iframe
        title="hic et nunc SVG renderer"
        src={iframeSrc}
        sandbox="allow-scripts allow-same-origin"
        allow="camera; microphone; geolocation"
        scrolling="no"
      />
    </div>
  )
}

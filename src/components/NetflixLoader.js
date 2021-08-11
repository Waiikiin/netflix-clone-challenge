import React from 'react'
import ContentLoader from 'react-content-loader'

const NetflixLoader = props => {
  const { rows, columns, coverheight, coverwidth, padding, speed } = props;

  const coverheightWithPadding = coverheight + padding
  const coverwidthWithPadding = coverwidth + padding
  const initial = 35
  const covers = Array(columns * rows).fill(1)

  return (
    <ContentLoader
      speed={speed}
      width={columns * coverwidthWithPadding}
      height={rows * coverheightWithPadding}
      {...props}
    >
      <rect
        x="0"
        y="0"
        rx="0"
        ry="0"
        width={columns * coverwidthWithPadding - padding}
        height="20"
      />

      {covers.map((g, i) => {
        let vy = Math.floor(i / columns) * coverheightWithPadding + initial
        let vx = (i * coverwidthWithPadding) % (columns * coverwidthWithPadding)
        return (
          <rect
            key={i}
            x={vx}
            y={vy}
            rx="5"
            ry="5"
            width={coverwidth}
            height={coverheight}
          />
        )
      })}
    </ContentLoader>
  )
}

export default NetflixLoader
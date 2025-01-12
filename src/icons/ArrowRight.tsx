export const ArrowRight = ({ className = '' }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns={'http://www.w3.org/2000/svg'}
      // xmlns:xlink={'http://www.w3.org/1999/xlink'}
      width={'28'}
      height={'11'}
      viewBox={'0 0 28 11'}
    >
      <defs>
        <clipPath id={'b'}>
          <rect width={'28'} height={'11'} />
        </clipPath>
      </defs>
      <g id={'a'} clipPath={'url(#b)'}>
        <g transform={'translate(-820.94 -1454.5)'}>
          <rect width={'20'} height={'2'} transform={'translate(822 1459)'} fill={'#b046f1'} />
          <path
            d={'M0-4,10.544.036H0Z'}
            transform={'translate(837.337 1459.964)'}
            fill={'#b046f1'}
          />
          <rect
            width={'20'}
            height={'2'}
            transform={'translate(842 1461) rotate(180)'}
            fill={'#b046f1'}
          />
          <path
            d={'M10.544,0,0,4.036H10.544Z'}
            transform={'translate(847.881 1464.036) rotate(180)'}
            fill={'#b046f1'}
          />
        </g>
      </g>
    </svg>
  )
}

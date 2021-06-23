import { inView, useTrail, handleRef, animated } from 'react-spring'

export function LetterAnimation() {
    const text = [...'hey there how are you']
    const from = { transform: 'rotateX(0deg) translateY(0px) rotate(0deg) scale(1)' }
    const to = inView
      ? [
          { transform: 'rotateX(30deg) translateY(10px) rotate(-13deg) scale(1)' },
          { transform: 'rotateX(0deg) translateY(-22px) rotate(3deg) scale(1.1)' },
          { ...from },
        ]
      : from
  
    const trail = useTrail(text.length, {
      config: { mass: 5, tension: 2000, friction: 200 },
      from: from,
      to: to,
    })
  
    return (
      <>
        <div ref={handleRef}>
          {trail.map((props, i) => (
            <animated.span key={`char${i}`} style={props}>
              {text[i] === ' ' ? <>&nbsp;</> : text[i]}
            </animated.span>
          ))}
        </div>
      </>
    )
}
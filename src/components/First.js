import { useSpring, animated } from 'react-spring'

export function First() {
  // const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
  const props2 = useSpring({ to: { background: 'red' }, from: { background: 'blue' }, delay: 2000 })

  return <animated.div style={props2}>I will fade in</animated.div>
}
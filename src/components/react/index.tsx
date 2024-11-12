import style from './style.module.scss';

function ReactLogo({size=3}:{size?:number}) {
  return (
    <div className={style.box} style={{ height: `${size}rem`}}>
      <div />
      <div />
      <div />
      <span ></span>
    </div>
  )
}

export default ReactLogo
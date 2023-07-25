

const Cards = ({className,children}) => {
  return (
    <div>
      <article className={`card $(className)`}>
        {children}
      </article>
    </div>
  )
}

export default Cards

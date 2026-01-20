function ComicCard(props) {
    return (
      <div className="comic-card">
                <img src={props.thumb} alt={props.title} />
                <h3>{props.series}</h3>
            </div>
    )

}

export default ComicCard
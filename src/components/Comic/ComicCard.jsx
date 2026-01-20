function ComicCard(props) {

    //destrutturo e assegno degli alias
    const {thumb : src, title : alt, series : titolo} = props;

    return (
      <div className="comic-card">
                <img src={src} alt={alt} />
                <h3>{titolo}</h3>
            </div>
    )

}

export default ComicCard
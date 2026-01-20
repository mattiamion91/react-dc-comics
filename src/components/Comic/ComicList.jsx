import comics from "../../data/comics.js"

function ComicsList() {

 // funzione di rendering card fumetto
    const renderFumettoCard = () => {
        return comics.map((comic) => (
            <div className="comic-card" key={comic.id}>
                <img src={comic.thumb} alt={comic.title} />
                <h3>{comic.series}</h3>
            </div>
        ))
    }

  return (
    <section id="comics">
      <div className="card-container">
        {renderFumettoCard()}        
      </div>
    </section>
  )  
}
export default ComicsList
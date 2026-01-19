import dcNavigations from "../data/footer-nav-links.js"

console.log(dcNavigations);
function DCFooter() {

  // funzione di rendereing link
  function renderLista(arrayLink) {
    return arrayLink.map((elementolista) => {
      return (<li key={elementolista.id}>
        <a href={elementolista.url}>{elementolista.text}</a>
      </li>)
    })
  }




  return (
    <footer>
      <nav className="footer-nav">
        {dcNavigations.map((dcNavigation, i) => (
          <div className="footer-col" key={i}>
            <div>
              <h4>{dcNavigation.category}</h4>
              <ul>
                {renderLista(dcNavigation.links)}
              </ul>
            </div>
          </div>
        ))
        }
      </nav>
    </footer>




    // <footer>
    //   <div className="top-item">
    //     <div className="first-col">
    //       <h3 className="list-title">DC COMICS</h3>
    //       <ul>           
    //         <li>Character</li>
    //         <li>Comics</li>
    //         <li>Movies</li>
    //         <li>TV</li>
    //         <li>Games</li>
    //         <li>Videos</li>
    //         <li>News</li>
    //       </ul>
    //       <ul>
    //         <li className="li-title">SHOP</li>
    //         <li>Shop DC</li>
    //         <li>Shop DC Collectibles</li>
    //       </ul>
    //     </div>
    //     <div className="second-col">
    //       <ul>
    //         <li className="li-title">DC</li>
    //         <li>Terms of Use</li>
    //         <li>Privacy policy -new-</li>
    //         <li>Ad Choices</li>
    //         <li>Advetising</li>
    //         <li>Jobs</li>
    //         <li>Subscriptions</li>
    //         <li>Talent Workshop</li>
    //         <li>CPSC Certificates</li>
    //         <li>Ratings</li>
    //         <li>Shop Help</li>
    //         <li>Contact Us</li>
    //       </ul>
    //     </div>
    //     <div className="third-col">
    //       <ul>
    //         <li className="li-title">DC</li>
    //         <li>Terms of Use</li>
    //         <li>Privacy policy -new-</li>
    //         <li>Ad Choices</li>
    //         <li>Advetising</li>
    //         <li>Jobs</li>
    //         <li>Subscriptions</li>
    //         <li>Talent Workshop</li>
    //         <li>CPSC Certificates</li>
    //         <li>Ratings</li>
    //         <li>Shop Help</li>
    //         <li>Contact Us</li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="bottom-item">

    //   </div>
    // </footer>
  )
}

export default DCFooter

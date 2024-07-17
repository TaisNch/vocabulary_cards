import './page404.css'
// import picture from '/images/PicForPage404'

function Page404 () {
    return (
     <>
    <h1 className='h1'>Ooops, there is nothing to learn here</h1>
  <div className="page404">
  <img className='page404__img' src='./images/PicForPage404.png' alt="kitten" />
   <div className='page__links'>
   <p> try this links to study:</p>
    <nav className="page404__nav">
   <p>Here is our <a href="/">Home</a>  page. expolore it to fimd out how to learn more words and extend your vocabulary
    </p> 
   <p>
   If you are not new, click here <a href="cards">Cards</a> to repeat what you have learned
    </p> 
    <p>Here you can see all the words in a <a href="table">Table</a> and also add new ones, that you'd like to learn </p>
     </nav>
   </div>
   </div>
     <h2 className='h2'>Good luck!</h2>
  </> 
    )
}
export default Page404
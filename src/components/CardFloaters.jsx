
// function copyToClipBoard(){
//     navigator.clipboard.writeText("https://27rishabhagarwal.github.io/BusinessCard/")
//     alert("Copied to clipboard!")
//    }
const copyToClipBoard = () => {
    navigator.share({
        url: 'https://27rishabhagarwal.github.io/BusinessCard/'
    })
}

const CardFloaters = () => {
 return (
     <>
     <a href="./assets/RishabhAgarwal.vcf" download="RishabhAgarwal" className="card-floaters floater-right-btn">
         <p>Add to Contact</p>
         <i class="fa-solid fa-plus"></i>
     </a>
     <button id=".share-button" className="card-floaters floater-left-btn" onClick={copyToClipBoard}>
         <i class="fa-solid fa-share"></i>
     </button>
        
     </>
 );
}

export default CardFloaters;
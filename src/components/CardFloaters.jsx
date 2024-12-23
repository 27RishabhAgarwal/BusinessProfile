import Icon from '@mdi/react';
import { mdiShare,
    mdiPlus
 } from '@mdi/js';
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
         <i><Icon path={mdiPlus} size={1.25} /></i>
     </a>
     <button id=".share-button" className="card-floaters floater-left-btn" onClick={copyToClipBoard}>
     <i>
         <Icon path={mdiShare} size={1.25} />
         </i>
     </button>
        
     </>
 );
}

export default CardFloaters;
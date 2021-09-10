import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import image from "./shareImage.jpeg"
import video from "./TestVideo.mp4"

export default function ShareNow() {
  const handleOnSubmit= async()=> {
    const response = await fetch(video);
    // here image is url/location of image
    const blob = await response.blob();
    const file = new File([blob], 'share.jpg', {type: blob.type});
    console.log(file);
    if(navigator.share) {
      await navigator.share({
        title: "title",
        text: "Mobilly Invite",
        url: "https://mobillyinvite.com/",
        files: [file]     
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error in sharing', error));
    }else {
      console.log(`system does not support sharing files.`);
    }
  }
  
  useEffect(()=> {
    if (navigator.share === undefined) {
      if (window.location.protocol === 'http:') {
        window.location.replace(window.location.href.replace(/^http:/, 'https:'));
      } 
    }
  }, []);
  return (
    <div>
      <button
        onClick={handleOnSubmit}
        className="share-button"
        type="button"
        title="Share this article"
      >
        Share
      </button>
    </div>
  );
}

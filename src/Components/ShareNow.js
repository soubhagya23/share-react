import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import image from "./shareImage.jpeg";
import video from "./TestVideo.mp4";

export default function ShareNow() {
  const handleOnSubmit = async () => {
    const response = await fetch(video);
    const blob = await response.blob();
    const file = new File([blob], "share.mp4", { type: blob.type });

    /*  If Image 
    const response = await fetch(image);
    const blob = await response.blob();
    const file = new File([blob], 'share.jpg', {type: blob.type}); */

    console.log(file);
    if (navigator.share) {
      await navigator
        .share({
          title: "title",
          text: "Mobilly Invite",
          url: "https://mobillyinvite.com/",
          files: [file],
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error in sharing", error));
    } else {
      console.log(`system does not support sharing files.`);
    }
  };

  useEffect(() => {
    if (navigator.share === undefined) {
      if (window.location.protocol === "http:") {
        window.location.replace(
          window.location.href.replace(/^http:/, "https:")
        );
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
      <a href="upi://pay?pa=9777758789@ybl&amp;pn=SOUBHAGYA RANJAN &amp;cu=INR" class="upi-pay1">Pay Now !</a>
    </div>
  );
}

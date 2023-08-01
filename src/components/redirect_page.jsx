import React, { useEffect } from "react";

export function redirectToApp() {
  // Extract the path from the current URL (excluding the leading '/')
  console.log("redirectToApp function is being called");

  const path = window.location.pathname.substring(1);

  // Only try to open the app if the URL path starts with 'pickupdraft/'
  if (path.startsWith("pickupdraft/")) {
    // Extract the id from the path
    const id = path.split("/")[1];

    // Construct the Universal Link URL
    const universalLink = `https://micromatchfantasy.com/pickupdraft/${id}`;

    // Redirect to the Universal Link.
    window.location.href = universalLink;

    // If the app is not installed, redirect to the app store after a short delay.
    setTimeout(() => {
      // Detect the operating system
      const userAgent = window.navigator.userAgent;
      if (/android/i.test(userAgent)) {
        // Link to your app on the Play Store for Android.
        window.location.href =
          "https://play.google.com/store/apps/details?id=com.juused.juused_fantasy_leagues";
      } else if (/iPad|iPhone|iPod/.test(userAgent)) {
        // Link to your app on the App Store for iOS.
        window.location.href =
          "https://apps.apple.com/us/app/userbet/id1627538375";
      }
    }, 500);
  }
}

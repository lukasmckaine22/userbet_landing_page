import React, { useEffect } from "react";

export function redirectToApp() {
  // Extract the path from the current URL (excluding the leading '/')
  const path = window.location.pathname.substring(1);

  // Only try to open the app if the URL path starts with 'deeplink/'
  if (path.startsWith("microdraftfantasy/")) {
    // Remove 'deeplink/' from the start of the path
    const appPath = path.substring(9);

    // Construct the deep link URL
    const deeplink = `microdraftfantasy://micromatchfantasy.com/pickupdraft`;

    // Try to open the app using the custom URL scheme.
    window.location.href = deeplink;

    // If the app is not installed, redirect to the app store after a short delay.
    setTimeout(() => {
      // Detect the operating system
      const userAgent = window.navigator.userAgent;
      if (/android/i.test(userAgent)) {
        // Link to your app on the Play Store for Android.
        window.location.href =
          "https://play.google.com/store/apps/details?id=<your_android_app_id>";
      } else if (/iPad|iPhone|iPod/.test(userAgent)) {
        // Link to your app on the App Store for iOS.
        window.location.href =
          "https://apps.apple.com/us/app/userbet/id1627538375";
      }
    }, 500);
  }
}

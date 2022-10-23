import * as NavigationBar from "expo-navigation-bar";
import { setStatusBarHidden } from "expo-status-bar";
import { useEffect } from "react";

NavigationBar.setPositionAsync("absolute");
NavigationBar.setVisibilityAsync("hidden");
NavigationBar.setBehaviorAsync("inset-swipe");
NavigationBar.setBackgroundColorAsync("#00000080"); // `rgba(0,0,0,0.5)`
setStatusBarHidden(true, "none");

export function useStickyImmersiveReset() {
    const visibility = NavigationBar.useVisibility();

    useEffect(() => {
        if (visibility === "visible") {
            const interval = setTimeout(() => {
                NavigationBar.setVisibilityAsync("hidden");
            }, 2000);

            return () => {
                clearTimeout(interval);
            };
        }
    }, [visibility]);
}
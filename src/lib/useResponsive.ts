"use client";

import { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";

interface ResponsiveState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const getResponsiveState = (): ResponsiveState => {
  if (typeof window === "undefined") {
    return {
      isMobile: false,
      isTablet: false,
      isDesktop: true,
    };
  }

  const mobile = window.matchMedia("(max-width:392px)");
  const tablet = window.matchMedia("(max-width:1023px)");
  const desktop = window.matchMedia("(min-width: 1024px)");

  return {
    isMobile: mobile.matches,
    isTablet: tablet.matches,
    isDesktop: desktop.matches,
  };
};

export const useResponsive = (): ResponsiveState => {
  const [responsiveState, setResponsiveState] =
    useState<ResponsiveState>(getResponsiveState());
  const [mounted, setMounted] = useState(false);

  const updateResponsiveState = useCallback(() => {
    const newState = getResponsiveState();
    setResponsiveState((prevState) => {
      if (
        prevState.isMobile === newState.isMobile &&
        prevState.isTablet === newState.isTablet &&
        prevState.isDesktop === newState.isDesktop
      ) {
        return prevState;
      }
      return newState;
    });
  }, []);

  const debouncedHandleResize = useCallback(
    debounce(updateResponsiveState, 100),
    [updateResponsiveState]
  );

  useEffect(() => {
    setMounted(true);
    updateResponsiveState();

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, [debouncedHandleResize, updateResponsiveState]);

  // 서버사이드 렌더링 시에는 항상 데스크톱 상태 반환
  if (!mounted) {
    return {
      isMobile: false,
      isTablet: false,
      isDesktop: true,
    };
  }

  return responsiveState;
};

"use client";

import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { Toaster } from "react-hot-toast";

interface CustomThemeProviderProps extends ThemeProviderProps {
	children: React.ReactNode;
}

// const queryClient = new QueryClient();

export function ThemeProvider({ children, ...props }: CustomThemeProviderProps) {
	return (
		// <QueryClientProvider client={queryClient}>
			// <Toaster />
			<NextThemesProvider {...props}>{children}</NextThemesProvider>
		// </QueryClientProvider>
	);
}

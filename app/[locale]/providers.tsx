"use client";

import { I18nProviderClient } from "@/locales/client";
import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";
import { Provider } from "jotai";

export const Providers = (props: PropsWithChildren<{ locale: string }>) => {
	return (
		<SessionProvider>
			<I18nProviderClient locale={props.locale}>
				<Provider>{props.children}</Provider>
			</I18nProviderClient>
		</SessionProvider>
	);
};

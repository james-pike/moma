import { component$, useStyles$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";

import { RouterHead } from "~/components/common/RouterHead";
import { DarkThemeLauncher } from "~/components/common/DarkThemeLauncher";
import { ObserverProvider } from "~/components/common/ObserverProvider";

import styles from "~/assets/styles/global.css?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <DarkThemeLauncher />
        <ServiceWorkerRegister />
             <link rel="preload" href="/images/hero1.jpg" as="image" />
                <link rel="preload" href="/images/hero2.jpg" as="image" />
        
      </head>
      <body class="text-gray-900 dark:text-slate-300 tracking-tight bg-primary-50 dark:bg-gray-900 antialiased">
        <ObserverProvider>
          <RouterOutlet />
        </ObserverProvider>
      </body>
    </QwikCityProvider>
  );
});

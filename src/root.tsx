import { component$, useStyles$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";

import { RouterHead } from "~/components/common/RouterHead";
import { DarkThemeLauncher } from "~/components/common/DarkThemeLauncher";

import styles from "~/assets/styles/global.css?inline";
import { ObserverProvider } from "./components/common/ObserverProvider";

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
        <script
          dangerouslySetInnerHTML={`
            window.$crisp = [];
            window.CRISP_WEBSITE_ID = "283b7c7f-4f69-4725-ba15-f11822e24856";
            (function() {
              var d = document;
              var s = d.createElement("script");
              s.src = "https://client.crisp.chat/l.js";
              s.async = 1;
              d.getElementsByTagName("head")[0].appendChild(s);
            })();
          `}
        />
             <link rel="preload" href="/images/hero1.jpg" as="image" />
                <link rel="preload" href="/images/hero2.jpg" as="image" />
        
      </head>
      <body class="text-gray-900 max-w-7xl mx-auto dark:text-slate-300 tracking-tight bg-primary-50 dark:bg-gray-900 antialiased">
       <ObserverProvider>
          <RouterOutlet />
          </ObserverProvider>
      </body>
    </QwikCityProvider>
  );
});

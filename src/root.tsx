import { component$, useStyles$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from "@builder.io/qwik-city";

import { RouterHead } from "~/components/common/RouterHead";
import { DarkThemeLauncher } from "~/components/common/DarkThemeLauncher";
import { FlowbiteProvider, FlowbiteProviderHeader } from "flowbite-qwik"; // Import Flowbite components

// import "@fontsource-variable/inter";
import styles from  "~/assets/styles/global.css?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        /> */}
        <RouterHead />
        <DarkThemeLauncher />
        <ServiceWorkerRegister />
        <FlowbiteProviderHeader /> {/* Add FlowbiteProviderHeader here */}
      </head>
      <body class="text-gray-900 dark:text-slate-300 tracking-tight bg-white dark:bg-gray-900 antialiased">
        <FlowbiteProvider toastPosition="top-right" theme="blue"> {/* Wrap with FlowbiteProvider */}
          <RouterOutlet />
        </FlowbiteProvider>
      </body>
    </QwikCityProvider>
  );
});

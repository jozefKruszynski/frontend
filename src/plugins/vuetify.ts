/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "vuetify/styles";
import colors from "vuetify/lib/util/colors";
import { aliases as defaultAliases, mdi } from "vuetify/iconsets/mdi";
import { md } from "vuetify/iconsets/md";

// Composables
import { IconAliases, createVuetify } from "vuetify";

const aliases: IconAliases = {
  ...defaultAliases,
};

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        md,
        mdi,
      },
    },
    display: {
      mobileBreakpoint: "md",
      thresholds: {
        xs: 0,
        sm: 340,
        md: 540,
        lg: 800,
        xl: 1280,
      },
    },
    theme: {
      defaultTheme: "light",
      themes: {
        light: {
          dark: false,
          colors: {
            primary: "#03a9f4",
            accent: "#4fc3f7",
          },
        },
        dark: {
          dark: true,
          colors: {
            primary: "#0288d1",
            accent: "#29b6f6",
          },
        },
      },
    },
    defaults: {
      VBtn: {
        color: "primary", // This will use the theme's primary color
        // For text color, Vuetify typically handles contrast automatically
        // against the button's color. If explicit white is needed and
        // doesn't happen automatically, specific CSS might be required,
        // but Vuetify aims to make `color="primary"` sufficient for good contrast.
        // We'll rely on Vuetify's default behavior for text color first.
        // For border-radius, we need to use a SASS variable override or global CSS,
        // as it's not a direct prop for VBtn style in this manner.
        // Let's try adding it via a class or style prop if needed,
        // but the subtask asks for it through theme configuration if possible.
        // Vuetify 3 recommends SASS for this: $button-border-radius
        // For now, let's focus on what can be done directly in vuetify.ts
        // The prompt implies setting it via theme configuration.
        // Let's assume for a moment that `rounded` prop might accept values,
        // or there's another way. Vuetify's `rounded` prop can take '0', 'sm', 'lg', 'xl', 'pill', 'circle'.
        // It doesn't directly take '4px'.
        // The best way for border-radius is SASS or global CSS.
        // I will add `elevation: 2` as a common default for buttons.
        // And `variant: 'elevated'` to ensure they are not text/outlined by default.
        // elevation: 2, // Removing elevation for flat style
        variant: "flat", // Changing to flat style
        // The text color will be handled by Vuetify based on the primary color.
        // For border-radius, I will address this in global.css or SASS if not here.
        // The prompt implies it should be part of this step.
        // After checking Vuetify docs, 'rounded' can take a number that is a pre-defined SASS variable.
        // It cannot take '4px' directly.
        // The best way to achieve a specific 4px border-radius globally for VBtn
        // is through SASS variables or global CSS overrides.
        // I will proceed with color and elevation here, and handle border-radius in CSS.
      },
    },
  },
);

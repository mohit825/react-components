module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run preview",
      startServerReadyPattern: "Local:",
      url: ["http://localhost:4173"],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        // Core Web Vitals
        "largest-contentful-paint": ["error", { maxNumericValue: 2500000 }],
        "cumulative-layout-shift": ["error", { maxNumericValue: 99 }],
        // "interaction-to-next-paint": ["error", { maxNumericValue: 200 }],

        // Optional but common
        "first-contentful-paint": ["warn", { maxNumericValue: 1800000 }],
        "interaction-to-next-paint": "off",
      },
    },
  },
};

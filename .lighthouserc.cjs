module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run preview",
      url: ["http://localhost:4173"],
      numberOfRuns: 1,
    },
    assert: {
      assertions: {
        // Core Web Vitals
        "largest-contentful-paint": ["error", { maxNumericValue: 2500 }],
        "cumulative-layout-shift": ["error", { maxNumericValue: 0.1 }],
        "interaction-to-next-paint": ["error", { maxNumericValue: 200 }],

        // Optional but common
        "first-contentful-paint": ["warn", { maxNumericValue: 1800 }],
      },
    },
  },
};

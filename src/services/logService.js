// import * as Sentry from "@sentry/react";

function init() {
  // Sentry.init({
  //   dsn:
  //     "https://ce2ebceea78745c98264f1089654224e@o464278.ingest.sentry.io/5472066",
  // });
}

function log(error) {
  console.log(error);
}

export default {
  init,
  log,
};

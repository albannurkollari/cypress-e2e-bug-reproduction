Cypress.on("uncaught:exception", (_err: Error, _runnable: Mocha.Runnable) => {
  return false;
});

export {};

import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I navigate to the Website", () => {
  cy.visit("http://localhost:3000/");
});

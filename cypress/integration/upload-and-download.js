/// <reference types="cypress" />
/// <reference types="cypress-downloadfile"/>

describe("Testing file uplaod and file download", () => {
  const path = require("path");
  it("Upload a file", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.fixture("laptop.png", "base64").then((fileContent) => {
      cy.get("#myFile").attachFile(
        {
          fileContent,
          fileName: "laptop.png",
          mimeType: "image/png",
        },
        {
          uploadType: "input",
        }
      );
    });
    cy.get("#submit-button").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Your file has now been uploaded!");
    });
  });

  it("Initiate download", () => {
    cy.downloadFile(
      "https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg",
      "mydownloads",
      "example.jpg",
      "MyCustomAgentName"
    );
  });

  it("Verify the downloaded file", () => {
    const mydownloads = Cypress.config("mydownloads");
    cy.readFile(path.join("mydownloads", "example.jpg")).should("exist");
  });
});

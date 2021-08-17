/// <reference types="cypress" />

describe("Testing simple Html elements for automation via ultimateQa", () => {
  beforeEach(() => {
    cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
  });
  it("Clicking buttons", () => {
    cy.get("#idExample").click();
    cy.assertCorrectBtnPress();
    cy.get(".buttonClass").contains("Button").click();
    cy.assertCorrectBtnPress();
    cy.get('[name="button1"]').click();
    cy.assertCorrectBtnPress();
  });
  it("Testing table values", () => {
    let sum = 0;
    var salaries = [];
    cy.get("#htmlTableId tbody tr td:nth-child(3)")
      .each(($el, index, $list) => {
        let values = Number($el.text().slice(1, -1).replace(/,/g, ""));
        salaries[index] = values;
      })
      .then(() => {
        for (let i = 0; i < salaries.length; i++) {
          sum += Number(salaries[i]);
        }
        expect(sum).to.eq(320000);
      });
  });
  it("Testing Radio Btns, Checkboxes, and Dropdowns", () => {
    cy.get("[type='radio']").eq(0).should("have.value", "male");
    cy.get("[type='checkbox']").check("Bike");
    cy.get("[type='checkbox']").eq(1).should("not.be.checked");
    cy.get("select").select("opel").contains("el");
  });
  it("Assertion of correct text", () => {
    cy.get("a").contains("Tab 1").click();
    cy.xpath("//*[contains(text(),'tab 1')]").should(
      "have.text",
      "tab 1 content"
    );
  });
  it("Searching for elements with Xpath", () => {
    cy.xpath('(//button[text()="Xpath Button 1"])[1]').click();
    cy.url().should("contain", "success?");
  });
  it("Highlighting with mouse test", () => {
    cy.get(
      ".et_pb_column_9 > .et_pb_module > .et_pb_blurb_content > .et_pb_blurb_container > .et_pb_module_header > span:nth-child(1)"
    ).trigger("mousedown", {
      which: 1,
    });
    cy.get(
      ".et_pb_column_9 > .et_pb_module > .et_pb_blurb_content > .et_pb_blurb_container > .et_pb_module_header > span:nth-child(1)"
    ).trigger("mousemove");
    cy.get(
      ".et_pb_column_9 > .et_pb_module > .et_pb_blurb_content > .et_pb_blurb_container > .et_pb_module_header > span:nth-child(1)"
    ).trigger("mouseup", {
      force: true,
    });
  });
});

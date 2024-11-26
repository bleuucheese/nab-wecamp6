describe("Practice form", () => {
  it("Fills out form", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.get("#firstName").type("Nguyen Ha");
    cy.get("#lastName").type("Trinh");
    cy.get("#userEmail").type("din.smorgastarta@gmail.com");
    cy.get('input[name="gender"][value="Other"]').check({ force: true });
    // cy.get('label[for="gender-radio-1"]').click();
    // cy.get('#gender-radio-1').check({ force: true });
    cy.get("#userNumber").type("0123456789");
    cy.get("#dateOfBirthInput").click();
    // Open the date picker
    cy.get("#dateOfBirthInput").click();

    // Select November from the month dropdown
    cy.get(".react-datepicker__month-select").select("November");

    // Select 2004 from the year dropdown
    cy.get(".react-datepicker__year-select").select("2004");

    // Click on the 8th day
    cy.get(".react-datepicker__day--008")
      .not(".react-datepicker__day--outside-month")
      .click();

    cy.get("#subjectsInput").type("Maths").type("{enter}");
    cy.get('label[for="hobbies-checkbox-2"]').click();
    cy.get('label[for="hobbies-checkbox-3"]').click();
    cy.get("#uploadPicture").attachFile("chillguy.webp");
    cy.get("#currentAddress").type(
      "15 Tran Bach Dang st, Thu Thiem wd, Dist 2, HCM City"
    );

    cy.get("#submit").click();

    // Verify modal content
    cy.get(".modal-content").should("be.visible");

    cy.get("table").within(() => {
      // Assert Student Name
      cy.get("tr")
        .contains("Student Name")
        .siblings("td")
        .invoke("text")
        .then((text) => {
          expect(text.trim()).to.equal("Nguyen Ha Trinh"); // Correct use of equality check
        });

      // Assert Student Email
      cy.get("tr")
        .contains("Student Email")
        .siblings("td")
        .invoke("text")
        .then((text) => {
          expect(text.trim()).to.equal("din.smorgastarta@gmail.com");
        });

      // Assert Gender
      cy.get("tr")
        .contains("Gender")
        .siblings("td")
        .invoke("text")
        .then((text) => {
          expect(text.trim()).to.equal("Other");
        });

      // Assert Mobile Number
      cy.get("tr")
        .contains("Mobile")
        .siblings("td")
        .invoke("text")
        .then((text) => {
          expect(text.trim()).to.equal("0123456789");
        });

      // Assert Date of Birth
      cy.get("tr")
        .contains("Date of Birth")
        .siblings("td")
        .invoke("text")
        .then((text) => {
          expect(text.trim()).to.equal("08 November,2004");
        });

      // Assert Subjects
      cy.get("tr")
        .contains("Subjects")
        .siblings("td")
        .invoke("text")
        .then((text) => {
          expect(text.trim()).to.equal("Maths");
        });

      // Assert Hobbies
      cy.get("tr")
        .contains("Hobbies")
        .siblings("td")
        .invoke("text")
        .then((text) => {
          expect(text.trim()).to.equal("Reading, Music");
        });

      // Assert Picture
      cy.get("tr")
        .contains("Picture")
        .siblings("td")
        .invoke("text")
        .then((text) => {
          expect(text.trim()).to.equal("chillguy.webp");
        });

      // Assert Address
      cy.get("tr")
        .contains("Address")
        .siblings("td")
        .invoke("text")
        .then((text) => {
          expect(text.trim()).to.equal(
            "15 Tran Bach Dang st, Thu Thiem wd, Dist 2, HCM City"
          );
        });
    });

    // Close the modal
    cy.get("#closeLargeModal").click({ force: true }); // Force click because the button is not visible in the viewport
  });

  // A test case should have expected results
});

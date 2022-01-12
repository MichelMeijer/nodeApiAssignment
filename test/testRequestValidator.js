const expect = require("chai").expect;
const { validate } = require("../validators/requestValidator");

describe("Request validator", function() {
    describe("Validate", function() {

      it('Should return true when valid', () => {
        let request = {
            body: {
                startDate: "2016-01-01",
                endDate: "2016-01-01",
                minCount: 2910,
                maxCount: 3000
            }
        };

        let result = validate(request)

        expect(result).to.equal(true);
      });

      it('Should return false when not complete', () => {
        let request = {
            body: {
                startDate: "2016-01-01",
                maxCount: 3000,
            }
        };

        let result = validate(request)

        expect(result).to.equal(false);
      });

      it('Should return false when startDate wrong format', () => {
        let request = {
            body: {
                startDate: 2019,
                endDate: "2016-01-01",
                minCount: 2910,
                maxCount: 3000
            }
        };
        let result = validate(request)

        expect(result).to.equal(false);
      });

        it('Should return false when minCount wrong format', () => {
            let request = {
                body: {
                    startDate: "2016-01-01",
                    endDate: "2016-01-01",
                    minCount: "2910",
                    maxCount: 3000
                }
            };

        let result = validate(request)

        expect(result).to.equal(false);
      });



    });
});
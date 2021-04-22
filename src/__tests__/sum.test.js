import sum from "../utils/sum";

describe("sum function", () => {
  test("should add two numbers together", () => {
    expect(sum(1, 3)).toEqual(4);
  });
});

describe("testing with jest", () => {
  describe("matchers", () => {
    test("object assignment", () => {
      const data = { one: 1 };
      data.two = 2;
      expect(data).toEqual({ one: 1, two: 2 });
    });

    test("adding positive numbers is not zero", () => {
      for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
          expect(a + b).not.toBe(0);
        }
      }
    });
  });

  describe("truthiness", () => {
    test("null", () => {
      const n = null;
      expect(n).toBeNull();
      expect(n).toBeDefined();
      expect(n).not.toBeUndefined();
      expect(n).not.toBeTruthy();
      expect(n).toBeFalsy();
    });

    test("zero", () => {
      const z = 0;
      expect(z).not.toBeNull();
      expect(z).toBeDefined();
      expect(z).not.toBeUndefined();
      expect(z).not.toBeTruthy();
      expect(z).toBeFalsy();
    });
  });

  describe("numbers", () => {
    test("two plus two", () => {
      const value = 2 + 2;
      expect(value).toBeGreaterThan(3);
      expect(value).toBeGreaterThanOrEqual(3.5);
      expect(value).toBeLessThan(5);
      expect(value).toBeLessThanOrEqual(4.5);

      // toBe and toEqual are equivalent for numbers
      expect(value).toBe(4);
      expect(value).toEqual(4);
    });

    test("adding floating point numbers", () => {
      const value = 0.1 + 0.2;
      // expect(value).toBe(0.3);           This won't work because of rounding error
      expect(value).toBeCloseTo(0.3); // This works.
    });
  });

  describe("strings", () => {
    test("there is no I in team", () => {
      expect("team").not.toMatch(/I/);
    });

    test('but there is a "stop" in Christoph', () => {
      expect("Christoph").toMatch(/stop/);
    });
  });

  describe("arrays and iterables", () => {
    const shoppingList = [
      "diapers",
      "kleenex",
      "trash bags",
      "paper towels",
      "beer",
    ];

    test("the shopping list has beer on it", () => {
      expect(shoppingList).toContain("beer");
      expect(new Set(shoppingList)).toContain("beer");
    });
  });

  describe("exceptions", () => {
    function compileAndroidCode() {
      throw new Error("you are using the wrong JDK");
    }

    test("compiling android goes as expected", () => {
      expect(() => compileAndroidCode()).toThrow();
      expect(() => compileAndroidCode()).toThrow(Error);

      // You can also use the exact error message or a regexp
      expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
      expect(() => compileAndroidCode()).toThrow(/JDK/);
    });
  });

  describe("callbacks", () => {
    const fetchData = (callback) => {
      const message = "peanut butter";
      setTimeout(() => {
        callback(message);
      }, 100);
    };

    // you have to add done to inform jest that callback is finished
    test("the data is peanut butter", (done) => {
      function callback(data) {
        try {
          expect(data).toBe("peanut butter");
          done();
        } catch (error) {
          done(error);
        }
      }

      fetchData(callback);
    });
  });

  describe("promises/resolve/reject/catch/async/await", () => {
    const errorMessage = "grape jelly";
    const successMessage = "peanut butter";
    const fetchData = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(successMessage);
        }, 100);
      });
    };
    const fetchDataWithError = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(errorMessage);
        }, 100);
      });
    };

    test("the data is peanut butter, then", () => {
      return fetchData().then((data) => {
        expect(data).toBe("peanut butter");
      });
    });

    test("the fetch fails with an error, catch", () => {
      expect.assertions(1);
      return fetchDataWithError().catch((e) => expect(e).toMatch(errorMessage));
    });

    test("the data is peanut butter, resolves", () => {
      return expect(fetchData()).resolves.toBe("peanut butter");
    });

    test("the fetch fails with an error, rejects", () => {
      return expect(fetchDataWithError()).rejects.toMatch(errorMessage);
    });

    test("the data is peanut butter", async () => {
      const data = await fetchData();
      expect(data).toBe(successMessage);
    });

    test("the fetch fails with an error", async () => {
      expect.assertions(1);
      try {
        await fetchDataWithError();
      } catch (e) {
        expect(e).toMatch(errorMessage);
      }
    });

    test("the data is peanut butter", async () => {
      await expect(fetchData()).resolves.toBe(successMessage);
    });

    test("the fetch fails with an error", async () => {
      await expect(fetchDataWithError()).rejects.toBe(errorMessage);
    });
  });

  test("should check truth", () => {
    expect(true).toBe(true);
  });
});
